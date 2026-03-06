import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/qa-showcase", label: "QA Showcase" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Desktop Menu */}
      <div style={menuStyle} className="desktop-menu">
        {navLinks.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            style={({ isActive }) => ({
              ...linkBase,
              ...(isActive ? activeLink : {})
            })}
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div
        className="mobile-icon"
        onClick={() => setIsOpen(!isOpen)}
        style={mobileIconStyle}
      >
        {isOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={mobileMenuOverlay} className="mobile-menu-overlay">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                ...mobileLinkBase,
                ...(isActive ? mobileActiveLink : {})
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ================= STYLES ================= */

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "clamp(10px, 2vh, 20px) clamp(10px, 2vw, 20px)",
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
  height: "auto",
  zIndex: 1002
};

const menuStyle = {
  display: "flex",
  gap: "30px",
  fontSize: "16px"
};

const linkBase = {
  color: "#cbd5e1",
  textDecoration: "none",
  position: "relative",
  paddingBottom: "4px",
  transition: "all 0.3s ease",
  fontWeight: "500"
};

const activeLink = {
  background: "linear-gradient(90deg, #60a5fa, #a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "700",
  borderBottom: "2px solid #60a5fa",
  paddingBottom: "2px"
};

const mobileIconStyle = {
  display: "none", // Shown/hidden via CSS media queries in index.css
  fontSize: "32px",
  color: "#38bdf8",
  cursor: "pointer",
  zIndex: 1005,
  userSelect: "none"
};

const mobileMenuOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "#0f172a",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "25px",
  zIndex: 1001,
  animation: "fadeUp 0.4s ease forwards"
};

const mobileLinkBase = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "600",
  transition: "all 0.3s ease"
};

const mobileActiveLink = {
  color: "#38bdf8",
  transform: "scale(1.1)"
};
