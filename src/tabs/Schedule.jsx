import { BASKET_A, BASKET_B, WEEK_DAYS_A, WEEK_DAYS_B, BLENDED_A, BLENDED_B } from '../data/stocks.js';

const WEEKS = [
  { label: "WEEK 1", bk: "A", color: "#00e5ff" },
  { label: "WEEK 2", bk: "B", color: "#1db954" },
  { label: "WEEK 3", bk: "A", color: "#00bbcc" },
  { label: "WEEK 4", bk: "B", color: "#17a348" },
];

export default function Schedule({ weekly }) {
  return (
    <div style={{ padding: "16px 16px calc(100px + var(--safe-bottom))", overflowY: "auto", height: "100%" }}>

      {/* How it works */}
      <div style={card}>
        <div style={label}>HOW IT WORKS</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
          {[
            { wk: "Weeks 1 & 3", name: "Basket A — AI Growth", color: "#00e5ff" },
            { wk: "Weeks 2 & 4", name: "Basket B — Non-AI", color: "#1db954" },
          ].map(w => (
            <div key={w.wk} style={{ padding: 10, background: "#0a1525", borderRadius: 6, borderLeft: `2px solid ${w.color}` }}>
              <div style={{ fontSize: 9, color: w.color, marginBottom: 2 }}>{w.wk}</div>
              <div style={{ fontSize: 11, color: "#cfe0f0", marginBottom: 3 }}>{w.name}</div>
              <div style={{ fontSize: 10, color: "#69ff47" }}>${weekly.toLocaleString()} fully deployed</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 10, color: "#445566", lineHeight: 1.7 }}>
          2 stocks per day · Mon–Fri · full $1,000 every week regardless of market conditions. Monthly: <span style={{ color: "#cfe0f0" }}>${(weekly * 4).toLocaleString()}</span> across all 20 positions.
        </div>
      </div>

      {/* 4 week cards */}
      {WEEKS.map(wk => {
        const isA  = wk.bk === "A";
        const days = isA ? WEEK_DAYS_A : WEEK_DAYS_B;
        const bk   = isA ? BASKET_A : BASKET_B;
        const bl   = isA ? BLENDED_A : BLENDED_B;
        const title= isA ? "AI GROWTH BASKET" : "NON-AI GROWTH BASKET";

        const totalDeployed = days
          .flatMap(d => d.stocks)
          .map(tk => bk.find(s => s.ticker === tk))
          .reduce((a, s) => a + Math.round(weekly * s.pct / 100), 0);

        return (
          <div key={wk.label} style={{ ...card, borderColor: `${wk.color}22`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 9, color: "#334455", letterSpacing: "0.12em", marginBottom: 2 }}>{wk.label}</div>
                <div style={{ fontSize: 20, fontFamily: "var(--font-display)", color: wk.color, letterSpacing: "0.05em" }}>{title}</div>
                <div style={{ fontSize: 9, color: "#334455", marginTop: 2 }}>{(bl * 100).toFixed(1)}% basket est.</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 28, color: wk.color, fontFamily: "var(--font-display)" }}>${weekly.toLocaleString()}</div>
                <div style={{ fontSize: 9, color: "#69ff47" }}>fully deployed</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
              {days.map(d => {
                const stocks = d.stocks.map(tk => bk.find(s => s.ticker === tk));
                return (
                  <div key={d.day} style={dayCol}>
                    <div style={{ fontSize: 9, color: "#334455", letterSpacing: "0.1em", marginBottom: 8, textAlign: "center" }}>{d.day}</div>
                    {stocks.map(s => {
                      const amt = Math.round(weekly * s.pct / 100);
                      return (
                        <div key={s.ticker} style={{ marginBottom: 8 }}>
                          <div style={{ fontSize: 10, color: s.color, fontWeight: 500 }}>{s.ticker}</div>
                          <div style={{ fontSize: 16, color: "#dce8f5", fontFamily: "var(--font-display)" }}>${amt}</div>
                          <div style={{ fontSize: 8, color: "#334455" }}>{s.pct}%</div>
                        </div>
                      );
                    })}
                    <div style={{ fontSize: 8, color: "#1e2f42", marginTop: 4, lineHeight: 1.4 }}>{d.note}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 10, paddingTop: 8, borderTop: "1px solid #0f1c2c", display: "flex", justifyContent: "space-between", fontSize: 9, color: "#334455" }}>
              <span>Allocated this week</span>
              <span style={{ color: totalDeployed === weekly ? "#69ff47" : "#ff9100" }}>
                ${totalDeployed.toLocaleString()} / ${weekly.toLocaleString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const card = {
  background: "#0b1625",
  border: "1px solid #152030",
  borderRadius: 10,
  padding: 16,
  marginBottom: 12,
};
const dayCol = {
  background: "#0a1828",
  border: "1px solid #152030",
  borderRadius: 8,
  padding: "10px 8px",
  flex: 1,
  minWidth: 80,
};
const label = {
  fontSize: 9,
  color: "#334455",
  letterSpacing: "0.12em",
  marginBottom: 10,
};
