import { useState } from "react";
import { ALL_STOCKS, BASKET_A, BASKET_B } from '../data/stocks.js';

const PROXY = 'http://localhost:3001/api/anthropic';

async function fetchStockNews(ticker, name) {
  const res = await fetch(PROXY, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system: `You are a financial analyst. Search for the latest news on ${ticker} (${name}). Return a JSON object with this exact structure — no markdown, no preamble, only valid JSON:
{
  "summary": "2-3 sentence overview of current company health",
  "sentiment": "bullish|neutral|bearish",
  "items": [
    { "headline": "short headline", "detail": "1-2 sentence detail", "source": "publication name", "url": "url or empty string", "impact": "positive|neutral|negative" }
  ],
  "catalysts": ["upcoming catalyst 1", "upcoming catalyst 2"],
  "risks": ["near-term risk 1", "near-term risk 2"]
}
Max 4 news items. Return only the JSON object.`,
      user: `Search for the latest ${ticker} stock news, earnings, analyst updates, and company developments from the past 7 days.`,
    }),
  });
  const data  = await res.json();
  if (data.error) throw new Error(data.error);
  const clean = data.text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

const SENT_COLOR = { bullish: '#69ff47', neutral: '#ffcc00', bearish: '#ff4444' };
const IMP_COLOR  = { positive: '#69ff47', neutral: '#ffcc00', negative: '#ff4444' };

export default function News() {
  const [selected, setSelected] = useState(null);
  const [newsData, setNewsData] = useState({});
  const [loading,  setLoading]  = useState(null);
  const [error,    setError]    = useState(null);
  const [filter,   setFilter]   = useState('all');

  const stocks = filter === 'a' ? BASKET_A : filter === 'b' ? BASKET_B : ALL_STOCKS;

  const loadNews = async (s) => {
    setSelected(s.ticker);
    setError(null);
    if (newsData[s.ticker]) return;
    setLoading(s.ticker);
    try {
      const result = await fetchStockNews(s.ticker, s.name);
      setNewsData(prev => ({ ...prev, [s.ticker]: result }));
    } catch (e) {
      setError(`Failed to load news: ${e.message}`);
    } finally {
      setLoading(null);
    }
  };

  const refresh = (s) => {
    setNewsData(prev => { const n = { ...prev }; delete n[s.ticker]; return n; });
    loadNews(s);
  };

  const stock = selected ? ALL_STOCKS.find(s => s.ticker === selected) : null;
  const news  = selected ? newsData[selected] : null;

  if (stock) {
    return (
      <div style={{ padding: '16px 16px calc(100px + var(--safe-bottom))', overflowY: 'auto', height: '100%' }}>
        <button onClick={() => setSelected(null)} style={backBtn}>← ALL STOCKS</button>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 9, color: stock.color, letterSpacing: '0.15em', marginBottom: 2 }}>{stock.name} · LIVE NEWS</div>
          <div style={{ fontSize: 40, fontFamily: 'var(--font-display)', color: '#fff', lineHeight: 1 }}>{stock.ticker}</div>
        </div>

        {loading === stock.ticker && (
          <div style={loadingBox}>
            <div style={{ fontSize: 11, color: '#00e5ff', marginBottom: 6 }}>Searching the web…</div>
            <div style={{ fontSize: 10, color: '#334455' }}>Fetching latest {stock.ticker} news, earnings & analyst updates</div>
          </div>
        )}

        {error && (
          <div style={{ ...loadingBox, borderColor: '#ff444433' }}>
            <div style={{ fontSize: 11, color: '#ff4444', marginBottom: 6 }}>Error loading news</div>
            <div style={{ fontSize: 10, color: '#778899', marginBottom: 6 }}>{error}</div>
            <div style={{ fontSize: 10, color: '#334455' }}>Is the proxy running? Open a new Terminal tab and run: <span style={{ color: '#00e5ff' }}>node server.js</span></div>
          </div>
        )}

        {news && !loading && (
          <>
            <div style={{ ...card, borderColor: `${SENT_COLOR[news.sentiment]}33` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ fontSize: 9, color: '#334455', letterSpacing: '0.12em' }}>CURRENT HEALTH</div>
                <div style={{ fontSize: 10, color: SENT_COLOR[news.sentiment], padding: '2px 8px', borderRadius: 4, background: `${SENT_COLOR[news.sentiment]}18`, border: `1px solid ${SENT_COLOR[news.sentiment]}33` }}>
                  {news.sentiment?.toUpperCase()}
                </div>
              </div>
              <p style={{ fontSize: 12, color: '#99aabb', lineHeight: 1.7 }}>{news.summary}</p>
            </div>

            <div style={{ fontSize: 9, color: '#334455', letterSpacing: '0.12em', marginBottom: 8 }}>LATEST NEWS</div>
            {(news.items || []).map((item, i) => (
              <div key={i} style={{ ...card, marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                  <div style={{ fontSize: 12, color: '#dce8f5', fontWeight: 500, flex: 1, marginRight: 8, lineHeight: 1.4 }}>{item.headline}</div>
                  <div style={{ fontSize: 8, color: IMP_COLOR[item.impact], padding: '2px 6px', borderRadius: 3, background: `${IMP_COLOR[item.impact]}15`, border: `1px solid ${IMP_COLOR[item.impact]}25`, flexShrink: 0 }}>
                    {item.impact?.toUpperCase()}
                  </div>
                </div>
                <p style={{ fontSize: 11, color: '#667788', lineHeight: 1.6, marginBottom: 6 }}>{item.detail}</p>
                <div style={{ fontSize: 9, color: '#334455' }}>
                  {item.source}
                  {item.url && <a href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00e5ff', marginLeft: 8, textDecoration: 'none' }}>↗ Read</a>}
                </div>
              </div>
            ))}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
              <div style={card}>
                <div style={{ fontSize: 9, color: '#69ff47', letterSpacing: '0.1em', marginBottom: 8 }}>CATALYSTS</div>
                {(news.catalysts || []).map((c, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#778899', marginBottom: 6, lineHeight: 1.5, paddingLeft: 8, borderLeft: '2px solid #69ff4733' }}>{c}</div>
                ))}
              </div>
              <div style={card}>
                <div style={{ fontSize: 9, color: '#ff4444', letterSpacing: '0.1em', marginBottom: 8 }}>RISKS</div>
                {(news.risks || []).map((r, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#778899', marginBottom: 6, lineHeight: 1.5, paddingLeft: 8, borderLeft: '2px solid #ff444433' }}>{r}</div>
                ))}
              </div>
            </div>

            <button onClick={() => refresh(stock)} style={refreshBtn}>↻ REFRESH NEWS</button>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ padding: '16px 16px calc(100px + var(--safe-bottom))', overflowY: 'auto', height: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 9, color: '#334455', letterSpacing: '0.2em', marginBottom: 4 }}>LIVE INTELLIGENCE</div>
        <div style={{ fontSize: 32, fontFamily: 'var(--font-display)', color: '#fff', lineHeight: 1 }}>STOCK NEWS</div>
        <div style={{ fontSize: 10, color: '#445566', marginTop: 6 }}>Tap any stock for live news, earnings & analyst updates</div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {[['all', 'ALL 20'], ['a', 'AI BASKET'], ['b', 'GROWTH BASKET']].map(([k, l]) => (
          <button key={k} style={{ ...tabBtn, ...(filter === k ? tabBtnOn : {}) }} onClick={() => setFilter(k)}>{l}</button>
        ))}
      </div>

      {stocks.map(s => {
        const cached = newsData[s.ticker];
        return (
          <div key={s.ticker} onClick={() => loadNews(s)} style={newsRow}>
            <div style={{ width: 40, height: 40, borderRadius: 7, background: `${s.color}12`, border: `1px solid ${s.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: s.color, flexShrink: 0 }}>
              {s.ticker.slice(0, 4)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <span style={{ fontSize: 13, color: '#dce8f5', fontWeight: 500 }}>{s.ticker}</span>
                <span style={{ fontSize: 9, color: '#334455' }}>{s.name}</span>
                {cached && (
                  <span style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${SENT_COLOR[cached.sentiment]}18`, color: SENT_COLOR[cached.sentiment], border: `1px solid ${SENT_COLOR[cached.sentiment]}25` }}>
                    {cached.sentiment?.toUpperCase()}
                  </span>
                )}
              </div>
              <div style={{ fontSize: 10, color: '#445566' }}>
                {loading === s.ticker ? 'Searching…' : cached ? cached.summary?.slice(0, 70) + '…' : 'Tap to load live news'}
              </div>
            </div>
            <div style={{ color: '#334455', fontSize: 16, paddingLeft: 8 }}>›</div>
          </div>
        );
      })}
    </div>
  );
}

const card    = { background: '#0b1625', border: '1px solid #152030', borderRadius: 10, padding: 16, marginBottom: 12 };
const newsRow = { display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 10, background: '#0b1625', border: '1px solid #152030', marginBottom: 8, cursor: 'pointer' };
const loadingBox = { background: '#0b1625', border: '1px solid #00e5ff22', borderRadius: 10, padding: 20, marginBottom: 12, textAlign: 'center' };
const backBtn    = { background: 'transparent', border: 'none', color: '#445566', fontSize: 10, letterSpacing: '0.1em', marginBottom: 16, padding: 0, cursor: 'pointer', display: 'block', fontFamily: 'var(--font-mono)' };
const refreshBtn = { width: '100%', marginTop: 8, padding: 10, background: '#0f1e30', border: '1px solid #1a2d40', borderRadius: 8, color: '#445566', fontSize: 10, letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', cursor: 'pointer' };
const tabBtn     = { padding: '7px 14px', borderRadius: 5, border: '1px solid #152030', background: 'transparent', color: '#445566', fontSize: 10, letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', cursor: 'pointer' };
const tabBtnOn   = { background: '#152030', color: '#cfe0f0', borderColor: '#00e5ff33' };
