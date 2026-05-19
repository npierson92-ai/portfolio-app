import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ALL_STOCKS, BLENDED_ALL, BLENDED_A, BLENDED_B, fmt, project } from "./data/stocks.js";
import Schedule   from "./tabs/Schedule.jsx";
import Stocks     from "./tabs/Stocks.jsx";
import Thesis     from "./tabs/Thesis.jsx";
import News       from "./tabs/News.jsx";
import Journal    from "./tabs/Journal.jsx";
import PickOfWeek from "./tabs/PickOfWeek.jsx";

const TABS = [
  { id: "schedule", label: "Schedule", icon: "📅" },
  { id: "stocks",   label: "Stocks",   icon: "📊" },
  { id: "thesis",   label: "Thesis",   icon: "📖" },
  { id: "news",     label: "News",     icon: "📡" },
  { id: "journal",  label: "Journal",  icon: "📓" },
  { id: "pick",     label: "Pick",     icon: "⭐" },
];

const ChartTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#07111e", border: "1px solid #1a2d40", borderRadius: 8, padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: 11 }}>
      <div style={{ color: "#556677", marginBottom: 3 }}>Age {label}</div>
      {payload.map(p => <div key={p.name} style={{ color: p.stroke }}>{p.name}: <b>{fmt(p.value)}</b></div>)}
    </div>
  );
};

export default function App() {
  const [tab,    setTab]    = useState("schedule");
  const [weekly, setWeekly] = useState(1000);
  const [years,  setYears]  = useState(25);
  const [showChart, setShowChart] = useState(false);

  const projAll = useMemo(() => project(weekly, years, BLENDED_ALL), [weekly, years]);
  const projA   = useMemo(() => project(weekly, years, BLENDED_A),   [weekly, years]);
  const projB   = useMemo(() => project(weekly, years, BLENDED_B),   [weekly, years]);

  const chartData = projAll.map((r, i) => ({
    age: r.age,
    "Combined":    r.value,
    "Basket A":    projA[i].value,
    "Basket B":    projB[i].value,
    "Invested":    r.invested,
  }));

  const final    = projAll[projAll.length - 1];
  const invested = weekly * years * 52;
  const gain     = final.value - invested;
  const mult     = (final.value / invested).toFixed(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "var(--bg)", overflow: "hidden" }}>

      {/* ── Header ── */}
      <div style={{ padding: "calc(var(--safe-top) + 12px) 16px 0", background: "var(--bg)", zIndex: 10, flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 8, color: "var(--text3)", letterSpacing: "0.2em", marginBottom: 1 }}>20 STOCKS · DCA · CONVICTION-WEIGHTED</div>
            <div style={{ fontSize: 26, fontFamily: "var(--font-display)", color: "#fff", letterSpacing: "0.04em", lineHeight: 1 }}>PORTFOLIO</div>
          </div>
          <button onClick={() => setShowChart(c => !c)} style={{ background: "var(--bg3)", border: "1px solid var(--border2)", borderRadius: 8, padding: "6px 12px", color: "var(--text3)", fontSize: 9, letterSpacing: "0.1em", fontFamily: "var(--font-mono)", cursor: "pointer" }}>
            {showChart ? "HIDE" : "PROJECTIONS"}
          </button>
        </div>

        {/* Stats strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginBottom: showChart ? 12 : 0 }}>
          {[
            { label: "WEEKLY",    value: `$${weekly.toLocaleString()}`, color: "var(--cyan)" },
            { label: "PROJECTED", value: fmt(final.value),              color: "var(--cyan)" },
            { label: "GAIN",      value: fmt(gain),                     color: "var(--green)" },
            { label: "MULT",      value: `${mult}x`,                    color: "var(--gold)" },
          ].map(s => (
            <div key={s.label} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
              <div style={{ fontSize: 7, color: "var(--text3)", letterSpacing: "0.1em", marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: s.color, fontFamily: "var(--font-display)" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Collapsible chart + controls */}
        {showChart && (
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, padding: 14, marginBottom: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 8, color: "var(--text3)", letterSpacing: "0.1em", marginBottom: 4 }}>WEEKLY</div>
                <div style={{ fontSize: 20, color: "var(--cyan)", fontFamily: "var(--font-display)", marginBottom: 6 }}>${weekly.toLocaleString()}</div>
                <input type="range" min={250} max={3000} step={50} value={weekly} onChange={e => setWeekly(+e.target.value)} />
              </div>
              <div>
                <div style={{ fontSize: 8, color: "var(--text3)", letterSpacing: "0.1em", marginBottom: 4 }}>HORIZON</div>
                <div style={{ fontSize: 20, color: "var(--green)", fontFamily: "var(--font-display)", marginBottom: 6 }}>{years} YRS</div>
                <input type="range" min={5} max={35} step={1} value={years} onChange={e => setYears(+e.target.value)} />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={chartData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                <defs>
                  {[["gAll","#00e5ff"],["gA","#ff6b35"],["gB","#1db954"]].map(([id,c])=>(
                    <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor={c} stopOpacity={0.15}/>
                      <stop offset="95%" stopColor={c} stopOpacity={0}/>
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="2 4" stroke="#0f1c2c"/>
                <XAxis dataKey="age" tick={{ fill: "#2a3d50", fontSize: 8 }} tickLine={false} interval={Math.floor(years/4)}/>
                <YAxis tick={{ fill: "#2a3d50", fontSize: 8 }} tickLine={false} axisLine={false} tickFormatter={fmt} width={46}/>
                <Tooltip content={<ChartTip/>}/>
                <Area type="monotone" dataKey="Invested"  stroke="#1e3048" strokeWidth={1}   fill="none"       dot={false} strokeDasharray="3 3"/>
                <Area type="monotone" dataKey="Basket A"  stroke="#ff6b35" strokeWidth={1.5} fill="url(#gA)"   dot={false}/>
                <Area type="monotone" dataKey="Basket B"  stroke="#1db954" strokeWidth={1.5} fill="url(#gB)"   dot={false}/>
                <Area type="monotone" dataKey="Combined"  stroke="#00e5ff" strokeWidth={2}   fill="url(#gAll)" dot={false}/>
              </AreaChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 9, color: "var(--text3)" }}>
              <span style={{ color: "#ff6b35" }}>A: {(BLENDED_A*100).toFixed(1)}%</span>
              <span style={{ color: "#1db954" }}>B: {(BLENDED_B*100).toFixed(1)}%</span>
              <span style={{ color: "var(--cyan)" }}>Combined: {(BLENDED_ALL*100).toFixed(1)}%</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Tab content ── */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        {tab === "schedule" && <Schedule weekly={weekly} />}
        {tab === "stocks"   && <Stocks   weekly={weekly} />}
        {tab === "thesis"   && <Thesis />}
        {tab === "news"     && <News />}
        {tab === "journal"  && <Journal />}
        {tab === "pick"     && <PickOfWeek />}
      </div>

      {/* ── Bottom nav ── */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "rgba(6,13,26,0.95)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid var(--border)",
        paddingBottom: "var(--safe-bottom)",
        zIndex: 100,
      }}>
        <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 0 4px" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              background: "transparent", border: "none", cursor: "pointer",
              padding: "4px 8px", borderRadius: 8,
              opacity: tab === t.id ? 1 : 0.4,
              transition: "opacity .15s",
            }}>
              <span style={{ fontSize: 20 }}>{t.icon}</span>
              <span style={{ fontSize: 8, color: tab === t.id ? "var(--cyan)" : "var(--text3)", letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>
                {t.label.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
