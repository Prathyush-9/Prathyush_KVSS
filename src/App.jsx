import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import EducationPortfolio from "./components/EducationPortfolio.jsx";
import ExperiencePortfolio from "./components/ExperiencePortfolio.jsx";
import SkillsPortfolio from "./components/SkillsPortfolio.jsx";
import InterestsPortfolio from "./components/InterestsPortfolio.jsx";
import CertificatesPortfolio from "./components/CertificatesPortfolio.jsx";

export default function App() {
  const linkClass = ({isActive}) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <div>
      <header className="navbar">
        <nav className="container nav-inner">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/portfolio" className={linkClass}>Projects</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/interests" className={linkClass}>Interests</NavLink>
          <NavLink to="/certificates" className={linkClass}>Certificates</NavLink>
          <div className="nav-spacer" />
          <a className="nav-cta" href="https://github.com/Prathyush-9" target="_blank" rel="noreferrer">GitHub</a>
          <a className="nav-cta" href="https://www.linkedin.com/in/prathyush-kvss-9b5131174" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </header>

      <main className="container">
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
