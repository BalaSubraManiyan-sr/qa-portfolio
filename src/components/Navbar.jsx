import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle} className="nav-logo-container">
        <img
          src="/nav-logo-animated.png"
          alt="QA Logo"
          className="nav-logo-animated"
          style={{ display: "block", border: "none" }}
        />
      </div>

      <div style={menuStyle} className="desktop-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/qa-showcase">QA Showcase</Link>
        <Link to="/approach">Approach</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

/* ================= STYLES ================= */

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "20px 60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(15, 23, 42, 0.7)",
  backdropFilter: "blur(12px)",
  zIndex: 1000
};

const logoStyle = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  height: "auto"
};

const menuStyle = {
  display: "flex",
  gap: "30px",
  fontSize: "16px"
};