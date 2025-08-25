import { useMemo, useState } from "react";

const CATEGORIES = [
  "All",
  "Robotics & Automation",
  "Perception",
  "AI & ML",
  "Embedded Systems",
];

// ==== EDIT THIS ARRAY TO ADD/CHANGE PROJECTS ====
const projectsData = [
  // --- ROBOTICS & AUTOMATION ---
  {
    title: "Automatic Storage & Retrieval System (ASRS)",
    org: "KLE Tech / Beckhoff TwinCAT",
    year: "2021–2022",
    category: "Robotics & Automation",
    tags: ["Beckhoff", "TwinCAT", "OPC UA", "Digital Twin"],
    bullets: [
      "Built ASRS with Beckhoff PLCs and VFD motors in TwinCAT.",
      "Created MATLAB digital twin via OPC UA to optimize cycle time.",
      "Browser HMI for live control/monitoring.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Prathyush-9" }],
  },
  {
    title: "3‑DOF SCARA Manipulator (300g)",
    org: "KLE Tech / ROS & Gazebo",
    year: "2021",
    category: "Robotics & Automation",
    tags: ["SCARA", "ROS", "Gazebo", "Kinematics"],
    bullets: [
      "Simulated pick‑and‑place with suction end‑effector.",
      "Built physical arm with reliable 300g handling.",
      "FEA in SolidWorks for durability checks.",
    ],
    links: [],
  },

  // --- PERCEPTION ---
  {
    title: "AMR with LiDAR & ROS Navigation",
    org: "Difacto Technologies",
    year: "2022",
    category: "Perception",
    tags: ["AMR", "LiDAR", "SLAM", "ROS"],
    bullets: [
      "ROS pipeline for localization & mapping.",
      "Fused LiDAR + odometry for avoidance & planning.",
      "Tested robustness in dynamic aisles.",
    ],
    links: [],
  },
  {
    title: "AGV – Magnetic Tape Guidance",
    org: "Difacto Technologies",
    year: "2022",
    category: "Perception",
    tags: ["AGV", "PID", "Sensors"],
    bullets: [
      "PID tuning for robust tape tracking under load.",
      "Obstacle detection + feedback control integration.",
      "Reduced lateral error from logs analysis.",
    ],
    links: [],
  },

  // --- AI & ML ---
  {
    title: "Energy Consumption Forecasting (LSTM)",
    org: "UD Coursework",
    year: "2024",
    category: "AI & ML",
    tags: ["LSTM", "Time Series", "XGBoost"],
    bullets: [
      "Built LR/DT/RF/XGBoost/LSTM on 19k+ samples.",
      "Best model: R²≈0.955, RMSE≈0.037 after tuning & CV.",
      "Key features: temperature, humidity, time.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Prathyush-9" }],
  },
  {
    title: "Water Potability Classification",
    org: "UD Coursework",
    year: "2024",
    category: "AI & ML",
    tags: ["Classification", "Random Forest", "GUI"],
    bullets: [
      "Imputation, scaling, class balancing pipeline.",
      "RF ≈ 68% accuracy; cross‑validated & tuned.",
      "Tkinter GUI for real‑time prediction.",
    ],
    links: [],
  },

  // --- EMBEDDED SYSTEMS ---
  {
    title: "Bot‑to‑Bot Mesh Communication",
    org: "Jaia Robotics",
    year: "2024–2025",
    category: "Embedded Systems",
    tags: ["Goby3", "XBee", "Mesh"],
    bullets: [
      "Mesh comms: broadcast + peer‑to‑peer for ASVs.",
      "Configured XBee radios for reliable packets.",
      "PoC for swarm navigation/decisions.",
    ],
    links: [],
  },
  {
    title: "Custom PCB for Signal Identification",
    org: "Lab Project",
    year: "2022",
    category: "Embedded Systems",
    tags: ["PCB", "Signal Processing", "Oscilloscope"],
    bullets: [
      "Fabricated PCB for signal conditioning/ID.",
      "Integrated with motor control stack.",
      "Improved noise immunity via layout & filters.",
    ],
    links: [],
  },

  // --- Placeholders (copy to add more quickly) ---
  {
    title: "[New Project]",
    org: "",
    year: "2025",
    category: "Robotics & Automation",
    tags: ["tag1", "tag2"],
    bullets: ["Impact/result.", "Key tools.", "Validation metric."],
    links: [],
  },
];

function Pill({ children }) {
  return (
    <span style={{
      display: "inline-block",
      border: "1px solid rgba(103, 150, 246, 1)",
      borderRadius: "999px",
      padding: "4px 10px",
      fontSize: 12,
      marginRight: 6,
      marginTop: 6
    }}>
      {children}
    </span>
  );
}

function ProjectCard({ p }) {
  return (
    <div style={{
      border: "1px solid #7ba4f5ff",
      borderRadius: 16,
      padding: 16,
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      background: "#9179f9ff"
    }}>
      <div style={{display: "flex", justifyContent: "space-between", gap: 12}}>
        <div>
          <h3 style={{margin: 0, fontSize: 18}}>{p.title}</h3>
          <div style={{color: "#666", fontSize: 13}}>{p.org} • {p.year}</div>
        </div>
        <div>
          {(p.links||[]).map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer"
               style={{border:"1px solid #e5e7eb", borderRadius:999, padding:"4px 10px", fontSize:12, textDecoration:"none", color:"#111", marginLeft:6}}>
              🔗 {l.label}
            </a>
          ))}
        </div>
      </div>

      <ul style={{margin: "10px 0 6px", paddingLeft: 18}}>
        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      <div>
        {p.tags.map((t, i) => <Pill key={i}>{t}</Pill>)}
      </div>
    </div>
  );
}

export default function ProjectsPortfolio() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return projectsData.filter(p => {
      const matchCategory = active === "All" || p.category === active;
      const hay = [p.title, p.org, p.category, ...(p.tags||[]), ...(p.bullets||[])]
        .join(" ")
        .toLowerCase();
      const matchQuery = hay.includes(q.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [active, q]);

  return (
    <div style={{maxWidth: 1000, margin: "0 auto"}}>
      {/* Top */}
      <div className="section">
        <div className="card" style={{padding:20, marginBottom:12}}>
          <h1 style={{margin: "0 0 6px 0"}}>Projects</h1>
          <p className="subtle">Filter by category or search. Edit the data inside <code>ProjectsPortfolio.jsx</code> (or move to JSON later).</p>
      </div>
      </div>


      {/* Toolbar */}
      <div className="toolbar">
      {CATEGORIES.map(c => (
        <button
          key={c}
          onClick={() => setActive(c)}
          className={"tab" + (active===c ? " active" : "")}
        >
          {c}
        </button>
      ))}
      <div className="search">
        <span>🔎</span>
        <input
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          placeholder="Search titles, tags, tools…"
        />
      </div>
    </div>
      {/* Grid */}
      <div style={{display:"grid", gridTemplateColumns:"1fr", gap:12}}>
        {/* two columns on wide screens */}
        <style>{`@media (min-width: 900px){ .grid2 { grid-template-columns: 1fr 1fr; } }`}</style>
        <div className="grid cols-2">
          {filtered.map((p, i) => <ProjectCard key={p.title+i} p={p} />)}
        </div>
      </div>
      {filtered.length === 0 && (
        <div style={{border:"1px dashed #115befff", padding:24, textAlign:"center", borderRadius:12, color:"#666", marginTop:12}}>
          No results. Try another category or clear your search.
        </div>
      )}
    </div>
  );
}
