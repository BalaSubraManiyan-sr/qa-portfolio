import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/qa-showcase", label: "QA Showcase" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBrandingClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav style={navStyle}>
      <div onClick={handleBrandingClick} className="nav-branding">
        <img
          src="/bsr-logo.png"
          alt="BSR Logo"
          className="nav-branding-logo"
        />
        <span className="nav-branding-text">S R Bala Subra Maniyan</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

        {/* Mobile Toggle */}
        <div
          className="mobile-icon"
          onClick={() => setIsOpen(!isOpen)}
          style={mobileIconStyle}
        >
          {isOpen ? "✕" : "☰"}
        </div>
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
  background: "var(--navbar-bg)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid var(--border-gold)",
  zIndex: 1000
};

const menuStyle = {
  display: "flex",
  gap: "30px",
  fontSize: "16px"
};

const linkBase = {
  color: "var(--text-gray)",
  textDecoration: "none",
  position: "relative",
  paddingBottom: "4px",
  transition: "all 0.3s ease",
  fontWeight: "500"
};

const activeLink = {
  background: "var(--accent-gold-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "700",
  borderBottom: "2px solid var(--accent-gold-text)",
  paddingBottom: "2px"
};

const mobileIconStyle = {
  display: "none", // Shown/hidden via CSS media queries in index.css
  fontSize: "32px",
  color: "var(--accent-gold-text)",
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
  background: "var(--bg-dark)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "25px",
  zIndex: 1001,
  animation: "fadeUp 0.4s ease forwards"
};

const mobileLinkBase = {
  color: "var(--text-gray)",
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "600",
  transition: "all 0.3s ease"
};

const mobileActiveLink = {
  color: "var(--accent-gold-text)",
  transform: "scale(1.1)"
};
