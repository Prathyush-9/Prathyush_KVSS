import { useMemo, useState } from "react";

const experienceData = [
  {
    role: "Research Assistant",
    company: "Microrobotics Lab, University of Delaware",
    year: "May 2024 – Jul 2024",
    details: [
      "Designed SolidWorks model for plate-based monitoring system.",
      "Implemented Python algorithms for 3D Helmholtz coil magnetic control.",
      "Maintained incubation environment; logged experiments.",
    ],
  },
  {
    role: "Data Engineering Associate",
    company: "Accenture Solutions, Chennai, India",
    year: "Dec 2022 – Jun 2023",
    details: [
      "Developed ETL pipelines with Kafka, Spark Streaming, APIs.",
      "Built Tableau dashboards for KPI visualization.",
      "Optimized SQL queries for large-scale transformation/reporting.",
    ],
  },
  {
    role: "Control Systems Intern",
    company: "Difacto Robotics, Bangalore, India",
    year: "Jan 2022 – Jun 2022",
    details: [
      "Programmed & tested PLC logic for AGV systems (Siemens, Mitsubishi, Allen Bradley).",
      "Configured HMIs and integrated real-time feedback loops.",
      "Commissioned panels; executed diagnostics/troubleshooting.",
    ],
  },
  {
    role: "Robotics Intern",
    company: "Assemtica Robotics, Vijayawada, India",
    year: "Mar 2019 – Jun 2019",
    details: [
      "Developed CV pipelines for detection/tracking/classification.",
      "Enhanced CV apps with ML frameworks.",
      "Contributed to Industry 4.0 workflow optimizations.",
    ],
  },
];

function ExperienceCard({ x }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginBottom: 12 }}>
      <h3 style={{ margin: 0, fontSize: 18 }}>{x.role}</h3>
      <p style={{ margin: "4px 0", fontWeight: "bold" }}>{x.company} — {x.year}</p>
      <ul style={{ paddingLeft: 18 }}>
        {x.details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
    </div>
  );
}

export default function ExperiencePortfolio() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    return experienceData.filter(x =>
      [x.role, x.company, x.year, ...(x.details || [])]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div>
      <h1>Experience</h1>
      <input
        placeholder="Search experience…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ marginBottom: 12, padding: 6, borderRadius: 6, border: "1px solid #ddd" }}
      />
      {filtered.map((x, i) => <ExperienceCard key={i} x={x} />)}
    </div>
  );
}
