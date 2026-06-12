import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import QAShowcase from "./components/QAShowcase";
import Approach from "./components/Approach";
import Contact from "./components/Contact";

/* ROUTE BACKGROUNDS */
const backgrounds = {
  "/": "var(--bg-gradient-home)",
  "/about": "var(--bg-gradient-about)",
  "/projects": "var(--bg-gradient-projects)",
  "/experience": "var(--bg-gradient-experience)",
  "/qa-showcase": "var(--bg-gradient-qa-showcase)",
  "/approach": "var(--bg-gradient-approach)",
  "/contact": "var(--bg-gradient-contact)"
};

/* LOADER */
function PageLoader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-ring"></div>
    </div>
  );
}

/* ANIMATED ROUTES */
function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="route-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              minHeight: "100vh",
              background:
                backgrounds[location.pathname] ||
                "linear-gradient(135deg, #0A0A0A, #121212)",
              transition: "background 0.8s ease"
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/qa-showcase" element={<QAShowcase />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    const root = document.body;
    if (theme === "light") {
      root.classList.add("light-theme");
    } else {
      root.classList.remove("light-theme");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimatedRoutes />
      <footer className="footer-global">
        <div className="footer-copyright">
          &copy; 2026 <span className="footer-name">Bala Subra Maniyan S R</span>
        </div>
        <div className="footer-profession">Quality Assurance Engineer</div>
        <div className="footer-services">
          Manual Testing &bull; Automation Testing &bull; API Testing &bull; Defect Management
        </div>
        <div className="footer-links">
          <a href="https://github.com/BalaSubraManiyan-sr" target="_blank" rel="noreferrer">GitHub</a>
          <span className="footer-divider">|</span>
          <a href="https://www.linkedin.com/in/bala-subra-maniyan-s-r/" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="footer-divider">|</span>
          <a href="https://wa.me/918925156100" target="_blank" rel="noreferrer">WhatsApp</a>
          <span className="footer-divider">|</span>
          <a href="mailto:balasubramaniyansr@gmail.com">Email</a>
        </div>
        <div className="footer-tagline">"Ensuring Quality. Delivering Confidence."</div>
      </footer>
    </>
  );
}

export default App;