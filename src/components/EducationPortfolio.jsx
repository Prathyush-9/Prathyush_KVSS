import { useMemo, useState } from "react";

const educationData = [
  {
    school: "University of Delaware, Newark, DE, USA",
    degree: "Master of Science in Robotics",
    year: "2023 – 2025",
    details: [
      "GPA: 3.46 / 4.0",
      "Coursework: State Estimation, Digital Controls, BioMechatronics, Linear Systems, ML, CUDA",
    ],
  },
  {
    school: "KLE Technological University, Hubli, India",
    degree: "B.Tech in Automation & Robotics",
    year: "2018 – 2022",
    details: [
      "GPA: 4.00 / 4.0",
      "Coursework: Kinematics of Machinery, Robot Design, ROS & ML, Computer Vision & AI",
    ],
  },
];

function EducationCard({ e }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginBottom: 12 }}>
      <h3 style={{ margin: 0, fontSize: 18 }}>{e.school}</h3>
      <p style={{ margin: "4px 0", fontWeight: "bold" }}>{e.degree} — {e.year}</p>
      <ul style={{ paddingLeft: 18 }}>
        {e.details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
    </div>
  );
}

export default function EducationPortfolio() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    return educationData.filter(e =>
      [e.school, e.degree, e.year, ...(e.details || [])]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div>
      <h1>Education</h1>
      <input
        placeholder="Search education…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ marginBottom: 12, padding: 6, borderRadius: 6, border: "1px solid #ddd" }}
      />
      {filtered.map((e, i) => <EducationCard key={i} e={e} />)}
    </div>
  );
}
