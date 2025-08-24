import { useMemo, useState } from "react";

const certificatesData = [
  {
    name: "Future Skills Training Program in Robotics & Automation",
    org: "KLE Technological University (NPIU, MHRD – TEQIP)",
    year: "Sep 2020 – Nov 2020",
    details: ["Hands-on robotics and automation training program."],
  },
  {
    name: "Control Design Onramp with MATLAB",
    org: "MathWorks",
    year: "Completed",
    details: [
      "Interactive training on control system design using MATLAB.",
      "Covered modeling, PID control, system analysis, feedback design.",
    ],
  },
  {
    name: "Deep Learning Specialization",
    org: "DeepLearning.ai",
    year: "Completed",
    details: [
      "Focused on neural networks, CNNs, and sequence models.",
      "Applied to AI and robotics perception tasks.",
    ],
  },
];

function CertificateCard({ c }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginBottom: 12 }}>
      <h3 style={{ margin: 0, fontSize: 18 }}>{c.name}</h3>
      <p style={{ margin: "4px 0", fontWeight: "bold" }}>{c.org} — {c.year}</p>
      <ul style={{ paddingLeft: 18 }}>
        {c.details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
    </div>
  );
}

export default function CertificatesPortfolio() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    return certificatesData.filter(c =>
      [c.name, c.org, c.year, ...(c.details || [])]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h1>Certificates</h1>
      <input
        placeholder="Search certificates…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ margin: "8px 0 16px", padding: 8, borderRadius: 8, border: "1px solid #ddd", width: "100%", maxWidth: 420 }}
      />
      {filtered.map((c, i) => <CertificateCard key={i} c={c} />)}
    </div>
  );
}
