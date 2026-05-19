import { useState, useEffect } from "react";

const PROXY = 'https://portfolio-app-production-ee72.up.railway.app/api/anthropic';

const SECTORS = [
  "Technology", "Healthcare", "Financial Services", "Consumer Discretionary",
  "Industrials", "Energy", "Real Estate", "Materials",
  "Communication Services", "Defense & Aerospace", "Biotech", "Utilities",
];

const STORAGE_KEY = "portfolio_pick_of_week";

function getWeekId() {
  const now   = new Date();
  const year  = now.getFullYear();
  const start = new Date(year, 0, 1);
  const week  = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
  return `${year}-W${week}`;
}

async function fetchPick(sector) {
  const EXCLUDED = "NVDA, MSFT, META, AMZN, GOOGL, APLD, AAPL, NOW, PLTR, V, CRWD, SHOP, AXON, NVO, UBER, TTD, SPOT, DUOL, CELH, DKNG";
  const res = await fetch(PROXY, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system: `You are a high-conviction equity analyst. Search for the most compelling growth stock in the ${sector} sector right now.
Exclude these tickers already in the portfolio: ${EXCLUDED}.
Return ONLY valid JSON, no markdown, no preamble:
{
  "ticker": "TICKER",
  "name": "Company Name",
  "sector": "${sector}",
  "price_approx": "$XXX",
  "market_cap": "$XXXb",
  "thesis": "3-4 sentence investment thesis explaining why this stock NOW",
  "catalysts": ["catalyst 1", "catalyst 2", "catalyst 3"],
  "risks": ["risk 1", "risk 2"],
  "suggested_allocation": "X%",
  "conviction": "high|medium",
  "timeframe": "12-18 months",
  "sources": ["source 1", "source 2"]
}`,
      user: `Search for and identify the single most compelling undiscovered or undervalued growth stock in the ${sector} sector right now, based on recent news, earnings, and market developments. Not any of: ${EXCLUDED}.`,
    }),
  });
  const data  = await res.json();
  if (data.error) throw new Error(data.error);
  const clean = data.text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

export default function PickOfWeek() {
  const [pick,    setPick]    = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);
  const [sector,  setSector]  = useState("Technology");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      if (stored.pick)    setPick(stored.pick);
      if (stored.history) setHistory(stored.history);
    } catch {}
  }, []);

  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result  = await fetchPick(sector);
      const entry   = { ...result, weekId: getWeekId(), generatedAt: new Date().toISOString(), sector };
      const newHist = [entry, ...history].slice(0, 12);
      setPick(entry);
      setHistory(newHist);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ pick: entry, history: newHist }));
    } catch (e) {
      setError(`Failed to generate pick: ${e.message}. Make sure the proxy server is running: node server.js`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '16px 16px calc(100px + var(--safe-bottom))', overflowY: 'auto', height: '100%' }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 9, color: '#334455', letterSpacing: '0.2em', marginBottom: 4 }}>AI-POWERED · WEEKLY</div>
        <div style={{ fontSize: 32, fontFamily: 'var(--font-display)', color: '#fff', lineHeight: 1 }}>PICK OF THE WEEK</div>
        <div style={{ fontSize: 10, color: '#445566', marginTop: 6 }}>AI scans a sector and surfaces 1 high-conviction new stock idea</div>
      </div>

      {/* Sector picker */}
      <div style={{ ...card, marginBottom: 12 }}>
        <div style={{ fontSize: 9, color: '#334455', letterSpacing: '0.12em', marginBottom: 10 }}>SCAN SECTOR</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          {SECTORS.map(s => (
            <button key={s} onClick={() => setSector(s)} style={{
              fontSize: 9, padding: '4px 10px', borderRadius: 4, cursor: 'pointer', fontFamily: 'var(--font-mono)',
              border: `1px solid ${sector === s ? '#00e5ff' : '#152030'}`,
              background: sector === s ? '#00e5ff15' : 'transparent',
              color: sector === s ? '#00e5ff' : '#445566',
            }}>
              {s}
            </button>
          ))}
        </div>
        <button onClick={generate} disabled={loading} style={{ ...generateBtn, opacity: loading ? 0.6 : 1 }}>
          {loading ? `SCANNING ${sector.toUpperCase()}…` : `FIND BEST ${sector.toUpperCase()} STOCK`}
        </button>
      </div>

      {error && (
        <div style={{ ...card, borderColor: '#ff440033', marginBottom: 12 }}>
          <div style={{ fontSize: 10, color: '#ff4444', marginBottom: 4 }}>Error</div>
          <div style={{ fontSize: 10, color: '#778899', lineHeight: 1.6 }}>{error}</div>
        </div>
      )}

      {loading && (
        <div style={{ ...card, textAlign: 'center', padding: 30 }}>
          <div style={{ fontSize: 11, color: '#00e5ff', marginBottom: 6 }}>Scanning {sector} sector…</div>
          <div style={{ fontSize: 10, color: '#334455' }}>Searching earnings, analyst reports, and recent developments</div>
        </div>
      )}

      {/* Current pick */}
      {pick && !loading && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 9, color: '#334455', letterSpacing: '0.12em', marginBottom: 8 }}>CURRENT PICK</div>
          <div style={{ ...card, borderColor: '#00e5ff22' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 9, color: '#00e5ff', letterSpacing: '0.15em', marginBottom: 2 }}>{pick.sector} · {pick.name}</div>
                <div style={{ fontSize: 44, fontFamily: 'var(--font-display)', color: '#fff', lineHeight: 1 }}>{pick.ticker}</div>
                <div style={{ fontSize: 10, color: '#445566', marginTop: 4 }}>{pick.market_cap} · {pick.price_approx}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 9, padding: '3px 8px', borderRadius: 4, marginBottom: 6, background: pick.conviction === 'high' ? '#69ff4718' : '#ffcc0018', color: pick.conviction === 'high' ? '#69ff47' : '#ffcc00', border: `1px solid ${pick.conviction === 'high' ? '#69ff4733' : '#ffcc0033'}` }}>
                  {pick.conviction?.toUpperCase()} CONVICTION
                </div>
                <div style={{ fontSize: 10, color: '#334455' }}>{pick.timeframe}</div>
                <div style={{ fontSize: 11, color: '#ff9100', marginTop: 4 }}>Suggest: {pick.suggested_allocation}</div>
              </div>
            </div>

            <div style={{ fontSize: 9, color: '#334455', letterSpacing: '0.1em', marginBottom: 6 }}>THESIS</div>
            <p style={{ fontSize: 12, color: '#99aabb', lineHeight: 1.7, marginBottom: 14 }}>{pick.thesis}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div>
                <div style={{ fontSize: 9, color: '#69ff47', letterSpacing: '0.1em', marginBottom: 6 }}>CATALYSTS</div>
                {(pick.catalysts || []).map((c, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#778899', marginBottom: 5, paddingLeft: 8, borderLeft: '2px solid #69ff4733', lineHeight: 1.4 }}>{c}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 9, color: '#ff4444', letterSpacing: '0.1em', marginBottom: 6 }}>RISKS</div>
                {(pick.risks || []).map((r, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#778899', marginBottom: 5, paddingLeft: 8, borderLeft: '2px solid #ff444433', lineHeight: 1.4 }}>{r}</div>
                ))}
              </div>
            </div>

            {pick.sources?.length > 0 && (
              <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #0f1c2c' }}>
                <div style={{ fontSize: 9, color: '#334455', marginBottom: 4 }}>SOURCES</div>
                {pick.sources.map((s, i) => <div key={i} style={{ fontSize: 10, color: '#445566' }}>· {s}</div>)}
              </div>
            )}
            <div style={{ marginTop: 8, fontSize: 9, color: '#223344' }}>Generated {new Date(pick.generatedAt).toLocaleDateString()} · {pick.weekId}</div>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 1 && (
        <div>
          <div style={{ fontSize: 9, color: '#334455', letterSpacing: '0.12em', marginBottom: 10 }}>PREVIOUS PICKS</div>
          {history.slice(1).map((h, i) => (
            <div key={i} style={{ ...card, marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 18, fontFamily: 'var(--font-display)', color: '#dce8f5' }}>{h.ticker}</div>
                  <div style={{ fontSize: 10, color: '#445566' }}>{h.name} · {h.sector}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 9, color: '#334455' }}>{h.weekId}</div>
                  <div style={{ fontSize: 10, color: '#ff9100' }}>{h.suggested_allocation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const card        = { background: '#0b1625', border: '1px solid #152030', borderRadius: 10, padding: 16, marginBottom: 12 };
const generateBtn = { width: '100%', padding: 14, background: '#00e5ff', border: 'none', borderRadius: 10, color: '#060d1a', fontSize: 11, letterSpacing: '0.12em', fontFamily: 'var(--font-mono)', fontWeight: 500, cursor: 'pointer' };
