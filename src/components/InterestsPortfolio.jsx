import { useMemo, useState } from "react";

const interestsData = [
  { name: "Badminton", notes: "Competitive and recreational play" },
  { name: "Chess", notes: "Strategic thinking and pattern recognition", link: "https://www.chess.com/member/prathyush1002" },
  { name: "Music", notes: "Listening and exploring diverse genres" },
  { name: "Traveling", notes: "Exploring new places and cultures" }
];
/*
function InterestCard({ i }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <h3 style={{ margin: 0, fontSize: 18 }}>{i.name}</h3>
      {i.notes && <p style={{ marginTop: 6, color: "#555" }}>{i.notes}</p>}
    </div>
  );
}
*/
function InterestCard({ i }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <h3 style={{ margin: 0, fontSize: 18 }}>
        {i.link ? <a href={i.link} target="_blank" rel="noreferrer">{i.name}</a> : i.name}
      </h3>
      {i.notes && <p style={{ marginTop: 6, color: "#555" }}>{i.notes}</p>}
    </div>
  );
}


export default function InterestsPortfolio() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    return interestsData.filter(i =>
      [i.name, i.notes].join(" ").toLowerCase().includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h1>Interests</h1>
      <input
        placeholder="Search interests…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ margin: "8px 0 16px", padding: 8, borderRadius: 8, border: "1px solid #ddd", width: "100%", maxWidth: 420 }}
      />
      <div style={{ display: "grid", gap: 12 }}>
        {filtered.map((i, idx) => <InterestCard key={idx} i={i} />)}
      </div>
    </div>
  );
}
