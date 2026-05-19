import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio_journal";

function loadEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch { return []; }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function getWeekLabel() {
  const now  = new Date();
  const year = now.getFullYear();
  const start= new Date(year, 0, 1);
  const week = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
  return `Week ${week}, ${year}`;
}

const PROMPTS = [
  "What did you buy this week and why?",
  "Which positions are you most/least confident in?",
  "Any news that changed your thesis on a holding?",
  "What would make you sell a position?",
  "Market conditions this week — how are they affecting your strategy?",
  "Are you sticking to the DCA schedule? Any deviations?",
  "New information learned about any of your 20 stocks?",
];

export default function Journal() {
  const [entries,  setEntries]  = useState(loadEntries);
  const [view,     setView]     = useState("list");
  const [editing,  setEditing]  = useState(null);
  const [form,     setForm]     = useState({ week: "", notes: "", bought: "", confidence: "", rating: 3 });

  const save = () => {
    const entry = { ...form, id: editing?.id || Date.now(), date: editing?.date || new Date().toISOString() };
    const updated = editing
      ? entries.map(e => e.id === editing.id ? entry : e)
      : [entry, ...entries];
    setEntries(updated);
    saveEntries(updated);
    setView("list");
    setEditing(null);
  };

  const del = (id) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    saveEntries(updated);
  };

  const startNew = () => {
    setForm({ week: getWeekLabel(), notes: "", bought: "", confidence: "", rating: 3 });
    setEditing(null);
    setView("edit");
  };

  const startEdit = (e) => {
    setForm({ week: e.week, notes: e.notes, bought: e.bought, confidence: e.confidence, rating: e.rating });
    setEditing(e);
    setView("edit");
  };

  if (view === "edit") {
    return (
      <div style={{ padding: "16px 16px calc(100px + var(--safe-bottom))", overflowY: "auto", height: "100%" }}>
        <button onClick={() => setView("list")} style={backBtn}>← JOURNAL</button>
        <div style={{ fontSize: 28, fontFamily: "var(--font-display)", color: "#fff", marginBottom: 4 }}>{editing ? "EDIT ENTRY" : "NEW ENTRY"}</div>
        <div style={{ fontSize: 10, color: "#334455", marginBottom: 20 }}>{form.week}</div>

        {/* Week label */}
        <div style={fieldGroup}>
          <label style={fieldLabel}>WEEK</label>
          <input type="text" value={form.week} onChange={e => setForm(f => ({ ...f, week: e.target.value }))} style={input} />
        </div>

        {/* What did you buy */}
        <div style={fieldGroup}>
          <label style={fieldLabel}>WHAT DID YOU BUY THIS WEEK?</label>
          <textarea rows={3} value={form.bought} onChange={e => setForm(f => ({ ...f, bought: e.target.value }))} style={input} placeholder="Tickers, amounts, which basket..." />
        </div>

        {/* Notes */}
        <div style={fieldGroup}>
          <label style={fieldLabel}>WEEKLY NOTES</label>
          <div style={{ marginBottom: 8 }}>
            {PROMPTS.map((p, i) => (
              <button key={i} onClick={() => setForm(f => ({ ...f, notes: f.notes + (f.notes ? "\n\n" : "") + p + "\n" }))}
                style={{ fontSize: 9, color: "#334455", background: "#0a1525", border: "1px solid #152030", borderRadius: 4, padding: "3px 7px", margin: "2px", cursor: "pointer", fontFamily: "var(--font-mono)" }}>
                + {p.slice(0, 30)}…
              </button>
            ))}
          </div>
          <textarea rows={8} value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} style={input} placeholder="Your weekly journal entry..." />
        </div>

        {/* Confidence */}
        <div style={fieldGroup}>
          <label style={fieldLabel}>PORTFOLIO CONFIDENCE NOTE</label>
          <textarea rows={3} value={form.confidence} onChange={e => setForm(f => ({ ...f, confidence: e.target.value }))} style={input} placeholder="How confident are you in the current holdings?" />
        </div>

        {/* Rating */}
        <div style={fieldGroup}>
          <label style={fieldLabel}>WEEK RATING: {["", "Poor", "Below avg", "Average", "Good", "Excellent"][form.rating]}</label>
          <input type="range" min={1} max={5} value={form.rating} onChange={e => setForm(f => ({ ...f, rating: +e.target.value }))} />
        </div>

        <button onClick={save} style={saveBtn}>SAVE ENTRY</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "16px 16px calc(100px + var(--safe-bottom))", overflowY: "auto", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 9, color: "#334455", letterSpacing: "0.2em", marginBottom: 4 }}>WEEKLY LOG</div>
          <div style={{ fontSize: 32, fontFamily: "var(--font-display)", color: "#fff", lineHeight: 1 }}>JOURNAL</div>
        </div>
        <button onClick={startNew} style={newBtn}>+ NEW</button>
      </div>

      {entries.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 20px", color: "#334455" }}>
          <div style={{ fontSize: 32, fontFamily: "var(--font-display)", marginBottom: 8, color: "#1a2d40" }}>NO ENTRIES YET</div>
          <div style={{ fontSize: 11 }}>Start your first weekly journal entry to track your investment journey</div>
        </div>
      )}

      {entries.map(e => (
        <div key={e.id} style={entryCard}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 14, color: "#dce8f5", fontWeight: 500, marginBottom: 2 }}>{e.week}</div>
              <div style={{ fontSize: 9, color: "#334455" }}>{new Date(e.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map(n => <div key={n} style={{ width: 6, height: 6, borderRadius: "50%", background: n <= e.rating ? "#00e5ff" : "#152030" }} />)}
              </div>
            </div>
          </div>
          {e.bought && (
            <div style={{ marginBottom: 8, padding: "8px 10px", background: "#0a1525", borderRadius: 6, borderLeft: "2px solid #00e5ff44" }}>
              <div style={{ fontSize: 8, color: "#334455", marginBottom: 3 }}>BOUGHT</div>
              <div style={{ fontSize: 11, color: "#778899", lineHeight: 1.5 }}>{e.bought}</div>
            </div>
          )}
          {e.notes && (
            <div style={{ fontSize: 11, color: "#667788", lineHeight: 1.6, marginBottom: 10 }}>
              {e.notes.length > 150 ? e.notes.slice(0, 150) + "…" : e.notes}
            </div>
          )}
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => startEdit(e)} style={editBtn}>EDIT</button>
            <button onClick={() => del(e.id)} style={delBtn}>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const fieldGroup = { marginBottom: 16 };
const fieldLabel = { display: "block", fontSize: 9, color: "#334455", letterSpacing: "0.12em", marginBottom: 6 };
const input = { width: "100%", background: "#0f1e30", border: "1px solid #1a2d40", borderRadius: 8, color: "#cfe0f0", fontFamily: "var(--font-mono)", fontSize: 12, padding: "10px 12px", resize: "none", outline: "none", boxSizing: "border-box" };
const saveBtn = { width: "100%", padding: 14, background: "#00e5ff", border: "none", borderRadius: 10, color: "#060d1a", fontSize: 12, letterSpacing: "0.12em", fontFamily: "var(--font-mono)", fontWeight: 500, cursor: "pointer", marginTop: 8 };
const newBtn = { padding: "8px 16px", background: "#0f1e30", border: "1px solid #1a2d40", borderRadius: 8, color: "#00e5ff", fontSize: 10, letterSpacing: "0.1em", fontFamily: "var(--font-mono)", cursor: "pointer" };
const backBtn = { background: "transparent", border: "none", color: "#445566", fontSize: 10, letterSpacing: "0.1em", marginBottom: 16, padding: 0, cursor: "pointer", display: "block", fontFamily: "var(--font-mono)" };
const entryCard = { background: "#0b1625", border: "1px solid #152030", borderRadius: 10, padding: 16, marginBottom: 10 };
const editBtn = { padding: "6px 12px", background: "#0f1e30", border: "1px solid #1a2d40", borderRadius: 6, color: "#778899", fontSize: 9, letterSpacing: "0.1em", fontFamily: "var(--font-mono)", cursor: "pointer" };
const delBtn = { padding: "6px 12px", background: "transparent", border: "1px solid #ff444433", borderRadius: 6, color: "#ff4444", fontSize: 9, letterSpacing: "0.1em", fontFamily: "var(--font-mono)", cursor: "pointer" };
