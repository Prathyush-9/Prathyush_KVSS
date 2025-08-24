import { useMemo, useState } from "react";

const skillsData = [
  {
    group: "Programming",
    items: ["Python", "C++", "C", "SQL"],
    notes: ["Clean, reliable code; data structures; scripting & tooling"],
  },
  {
    group: "Robotics Tools & Methodologies",
    items: ["ROS2", "ROS", "Gazebo", "MoveIt", "RViz", "URDF", "SolidWorks", "AutoCAD", "MATLAB/Simulink", "LabVIEW"],
    notes: ["Kinematics, trajectory planning, state estimation, sim→hardware bring‑up"],
  },
  {
    group: "ML & Computer Vision",
    items: ["PyTorch", "TensorFlow", "scikit‑learn", "OpenCV", "NumPy", "Pandas", "YOLOv5", "CNN"],
    notes: ["Time‑series (LSTM), classification, detection, tracking, data pipelines"],
  },
  {
    group: "Controls & Automation",
    items: ["Siemens TIA Portal", "Allen‑Bradley Studio 5000", "Beckhoff TwinCAT", "Mitsubishi PLCs"],
    notes: ["AGV/AMR controls, HMI, commissioning, diagnostics, safety"],
  },
  {
    group: "Systems, Sensors & Protocols",
    items: ["ESP32", "IMU", "LiDAR", "RGB‑D", "Force‑Torque",
            "UART", "PWM", "MODBUS", "OPC UA", "PROFINET", "CAN bus", "Ethernet/IP"],
    notes: ["Perception integration, calibration, real‑time I/O, industrial comms"],
  },
];

function SkillCard({ s }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <h3 style={{ margin: 0, fontSize: 18 }}>{s.group}</h3>
      <p style={{ margin: "6px 0 8px", color: "#555" }}>
        {s.notes?.join(" • ")}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {s.items.map((it, i) => (
          <span key={i}
            style={{ border: "1px solid #e5e7eb", borderRadius: 999, padding: "4px 10px", fontSize: 12 }}>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsPortfolio() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return skillsData.filter(s =>
      [s.group, ...(s.items || []), ...(s.notes || [])]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h1>Skills</h1>
      <input
        placeholder="Search skills… (e.g., ROS, LiDAR, OPC UA)"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ margin: "8px 0 16px", padding: 8, borderRadius: 8, border: "1px solid #ddd", width: "100%", maxWidth: 420 }}
      />
      <div style={{ display: "grid", gap: 12 }}>
        {filtered.map((s, i) => <SkillCard key={i} s={s} />)}
      </div>
    </div>
  );
}
