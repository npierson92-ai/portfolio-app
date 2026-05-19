import { useState } from "react";
import { BASKET_A, BASKET_B, RISK_LABEL, RISK_COLOR } from '../data/stocks.js';

export default function Stocks({ weekly }) {
  const [filter, setFilter]   = useState("both");
  const [expanded, setExpanded] = useState(null);

  const renderBasket = (basket, accent, title) => (
    <div style={{ ...card, borderColor: `${accent}20`, marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontSize: 10, color: accent, letterSpacing: "0.12em" }}>{title}</span>
        <span style={{ fontSize: 10, color: "#334455" }}>$1,000/wk on its weeks</span>
      </div>
      {basket.map(s => {
        const amt    = Math.round(weekly * s.pct / 100);
        const isOpen = expanded === s.ticker;
        const maxPct = basket === BASKET_A ? 22 : 20;
        return (
          <div key={s.ticker}>
            <div
              style={{ ...srow, ...(isOpen ? srowOpen : {}) }}
              onClick={() => setExpanded(isOpen ? null : s.ticker)}
            >
              <div style={{ ...avatar, background: `${s.color}12`, border: `1px solid ${s.color}28`, color: s.color }}>
                {s.ticker.slice(0, 4)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                  <span style={{ fontSize: 13, color: "#dce8f5", fontWeight: 500 }}>{s.ticker}</span>
                  <span style={{ fontSize: 8, padding: "1px 5px", borderRadius: 3, background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}25` }}>{s.sector}</span>
                  <span style={{ fontSize: 8, color: RISK_COLOR[s.risk] }}>{RISK_LABEL[s.risk]}</span>
                </div>
                <div style={{ fontSize: 10, color: "#445566", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.why}</div>
                <div style={{ marginTop: 5, height: 2, background: "#0f1c2c", borderRadius: 1 }}>
                  <div style={{ height: "100%", width: `${(s.pct / maxPct) * 100}%`, background: s.color, borderRadius: 1, opacity: 0.65 }} />
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, paddingLeft: 8 }}>
                <div style={{ fontSize: 15, color: s.color, fontFamily: "var(--font-display)" }}>${amt}/wk</div>
                <div style={{ fontSize: 9, color: "#334455" }}>{s.pct}% · {(s.annualReturn * 100).toFixed(0)}% est</div>
              </div>
            </div>
            {isOpen && (
              <div style={{ margin: "2px 0 8px", padding: 12, background: "#060d1a", borderRadius: 6, borderLeft: `2px solid ${s.color}` }}>
                <div style={{ fontSize: 9, color: s.color, letterSpacing: "0.1em", marginBottom: 6 }}>WHY {s.ticker}</div>
                <div style={{ fontSize: 10, color: "#8899aa", lineHeight: 1.7, marginBottom: 10 }}>{s.why}</div>
                <div style={{ fontSize: 9, color: "#445566", letterSpacing: "0.1em", marginBottom: 4 }}>WHY {s.pct}% → ${amt}/WEEK</div>
                <div style={{ fontSize: 10, color: "#667788", lineHeight: 1.7 }}>{s.rationale}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ padding: "16px 16px calc(100px + var(--safe-bottom))", overflowY: "auto", height: "100%" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        {[["both", "ALL 20"], ["a", "BASKET A"], ["b", "BASKET B"]].map(([k, l]) => (
          <button key={k} style={{ ...tabBtn, ...(filter === k ? tabBtnOn : {}) }} onClick={() => setFilter(k)}>{l}</button>
        ))}
      </div>
      <div style={{ fontSize: 9, color: "#334455", marginBottom: 12 }}>Tap any stock → conviction thesis + sizing rationale</div>
      {(filter === "both" || filter === "a") && renderBasket(BASKET_A, "#00e5ff", "BASKET A — AI GROWTH · WEEKS 1 & 3")}
      {(filter === "both" || filter === "b") && renderBasket(BASKET_B, "#1db954", "BASKET B — NON-AI GROWTH · WEEKS 2 & 4")}
    </div>
  );
}

const card = { background: "#0b1625", border: "1px solid #152030", borderRadius: 10, padding: 16, marginBottom: 12 };
const srow = { display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 6px", borderRadius: 7, border: "1px solid transparent", cursor: "pointer", transition: "background .15s" };
const srowOpen = { background: "#0f1e30", border: "1px solid #1a3050" };
const avatar = { width: 40, height: 40, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, flexShrink: 0, letterSpacing: "0.03em" };
const tabBtn = { padding: "7px 14px", borderRadius: 5, border: "1px solid #152030", background: "transparent", color: "#445566", fontSize: 10, letterSpacing: "0.1em", fontFamily: "var(--font-mono)" };
const tabBtnOn = { background: "#152030", color: "#cfe0f0", borderColor: "#00e5ff33" };
