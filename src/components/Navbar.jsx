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

const linkBase = {
  color: "#cbd5e1",
  textDecoration: "none",
  position: "relative",
  paddingBottom: "4px",
  transition: "color 0.3s ease",
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