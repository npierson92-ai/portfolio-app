import { useState } from "react";
import { ALL_STOCKS, BASKET_A, BASKET_B } from '../data/stocks.js';

export default function Thesis() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter]     = useState("all");

  const stocks = filter === "a" ? BASKET_A : filter === "b" ? BASKET_B : ALL_STOCKS;
  const stock   = selected ? ALL_STOCKS.find(s => s.ticker === selected) : null;

  if (stock) {
    return (
      <div style={{ padding: "16px 16px calc(100px + var(--safe-bottom))", overflowY: "auto", height: "100%" }}>
        <button onClick={() => setSelected(null)} style={{ ...backBtn }}>← BACK</button>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 9, color: stock.color, letterSpacing: "0.2em", marginBottom: 4 }}>{stock.sector} · {stock.name}</div>
          <div style={{ fontSize: 42, fontFamily: "var(--font-display)", color: "#fff", letterSpacing: "0.05em", lineHeight: 1 }}>{stock.ticker}</div>
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <div style={{ fontSize: 10, color: "#69ff47" }}>{(stock.annualReturn * 100).toFixed(0)}% est. annual return</div>
            <div style={{ fontSize: 10, color: "#334455" }}>·</div>
            <div style={{ fontSize: 10, color: "#ff9100" }}>{stock.pct}% basket allocation</div>
          </div>
        </div>

        <div style={{ ...card, borderColor: `${stock.color}25` }}>
          <div style={{ fontSize: 9, color: stock.color, letterSpacing: "0.15em", marginBottom: 14 }}>INVESTMENT THESIS</div>
          {stock.thesis.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: 12, color: "#99aabb", lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
          ))}
        </div>

        <div style={{ ...card }}>
          <div style={{ fontSize: 9, color: "#334455", letterSpacing: "0.12em", marginBottom: 10 }}>SIZING RATIONALE</div>
          <p style={{ fontSize: 12, color: "#778899", lineHeight: 1.7 }}>{stock.rationale}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { label: "EST. RETURN", value: `${(stock.annualReturn * 100).toFixed(0)}%/yr`, color: stock.color },
            { label: "RISK LEVEL", value: ["", "Low", "Med-Lo", "Medium", "Med-Hi", "High"][stock.risk], color: ["", "#69ff47", "#a0ff47", "#ffcc00", "#ff9100", "#ff4444"][stock.risk] },
            { label: "BASKET PCT", value: `${stock.pct}%`, color: "#ff9100" },
          ].map(m => (
            <div key={m.label} style={{ background: "#0a1525", borderRadius: 6, padding: "10px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 8, color: "#334455", marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 16, color: m.color, fontFamily: "var(--font-display)" }}>{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "16px 16px calc(100px + var(--safe-bottom))", overflowY: "auto", height: "100%" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 9, color: "#334455", letterSpacing: "0.2em", marginBottom: 4 }}>INVESTMENT THESES</div>
        <div style={{ fontSize: 32, fontFamily: "var(--font-display)", color: "#fff", lineHeight: 1 }}>WHY WE OWN IT</div>
        <div style={{ fontSize: 10, color: "#445566", marginTop: 6 }}>Tap any stock for the full investment case</div>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {[["all", "ALL 20"], ["a", "AI BASKET"], ["b", "GROWTH BASKET"]].map(([k, l]) => (
          <button key={k} style={{ ...tabBtn, ...(filter === k ? tabBtnOn : {}) }} onClick={() => setFilter(k)}>{l}</button>
        ))}
      </div>

      {stocks.map(s => (
        <div key={s.ticker} onClick={() => setSelected(s.ticker)} style={{ ...thesisRow }}>
          <div style={{ ...avatar, background: `${s.color}12`, border: `1px solid ${s.color}28`, color: s.color }}>
            {s.ticker.slice(0, 4)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
              <span style={{ fontSize: 14, color: "#dce8f5", fontWeight: 500 }}>{s.ticker}</span>
              <span style={{ fontSize: 9, color: "#334455" }}>{s.name}</span>
            </div>
            <div style={{ fontSize: 11, color: "#556677", lineHeight: 1.5 }}>{s.thesis.slice(0, 100)}…</div>
          </div>
          <div style={{ color: s.color, fontSize: 14, flexShrink: 0, paddingLeft: 8 }}>›</div>
        </div>
      ))}
    </div>
  );
}

const card = { background: "#0b1625", border: "1px solid #152030", borderRadius: 10, padding: 16, marginBottom: 12 };
const thesisRow = { display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 12px", borderRadius: 10, background: "#0b1625", border: "1px solid #152030", marginBottom: 8, cursor: "pointer" };
const avatar = { width: 42, height: 42, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, flexShrink: 0 };
const backBtn = { background: "transparent", border: "none", color: "#445566", fontSize: 10, letterSpacing: "0.1em", marginBottom: 16, padding: 0, cursor: "pointer" };
const tabBtn = { padding: "7px 14px", borderRadius: 5, border: "1px solid #152030", background: "transparent", color: "#445566", fontSize: 10, letterSpacing: "0.1em", fontFamily: "var(--font-mono)" };
const tabBtnOn = { background: "#152030", color: "#cfe0f0", borderColor: "#00e5ff33" };
