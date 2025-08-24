import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import EducationPortfolio from "./components/EducationPortfolio.jsx";
import ExperiencePortfolio from "./components/ExperiencePortfolio.jsx";
import SkillsPortfolio from "./components/SkillsPortfolio.jsx";
import InterestsPortfolio from "./components/InterestsPortfolio.jsx";
import CertificatesPortfolio from "./components/CertificatesPortfolio.jsx";

export default function App() {
  const link = { padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: "10px", textDecoration: "none", color: "#111" };
  const active = { background: "#111", color: "#fff" };

  return (
    <div>
      <header style={{ borderBottom: "1px solid #e5e7eb" }}>
        <nav style={{ maxWidth: 900, margin: "0 auto", padding: 16, display: "flex", gap: 8, alignItems: "center" }}>
          <NavLink to="/" end style={({isActive}) => isActive ? {...link, ...active} : link}>Home</NavLink>
          <NavLink to="/portfolio" style={({isActive}) => isActive ? {...link, ...active} : link}>Projects</NavLink>
          <NavLink to="/education" style={({isActive}) => isActive ? {...link, ...active} : link}>Education</NavLink>
          <NavLink to="/experience" style={({isActive}) => isActive ? {...link, ...active} : link}>Experience</NavLink>
          <NavLink to="/skills" style={({isActive}) => isActive ? {...link, ...active} : link}>Skills</NavLink>
          <NavLink to="/interests" style={({isActive}) => isActive ? {...link, ...active} : link}>Interests</NavLink>
          <NavLink to="/certificates" style={({isActive}) => isActive ? {...link, ...active} : link}>Certificates</NavLink>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <a href="https://github.com/Prathyush-9" target="_blank" rel="noreferrer" style={link}>GitHub</a>
            <a href="https://www.linkedin.com/in/prathyush-kvss-9b5131174" target="_blank" rel="noreferrer" style={link}>LinkedIn</a>
          </div>
        </nav>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/education" element={<EducationPortfolio />} />
          <Route path="/experience" element={<ExperiencePortfolio />} />
          <Route path="/skills" element={<SkillsPortfolio />} />
          <Route path="/interests" element={<InterestsPortfolio />} />
          <Route path="/certificates" element={<CertificatesPortfolio />} />
        </Routes>
      </main>
    </div>
  );
}
