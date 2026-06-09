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
  "/": "linear-gradient(135deg, #0A0A0A, #121212)",
  "/about": "linear-gradient(135deg, #0A0A0A, #14120E)",
  "/projects": "linear-gradient(135deg, #0A0A0A, #121212)",
  "/experience": "linear-gradient(135deg, #0A0A0A, #15130F)",
  "/qa-showcase": "linear-gradient(135deg, #0A0A0A, #121212)",
  "/approach": "linear-gradient(135deg, #0A0A0A, #161410)",
  "/contact": "linear-gradient(135deg, #0A0A0A, #121212)"
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
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
      <footer className="footer-global">
        <span className="footer-copyright">© 2026 </span>
        <span className="footer-name">Bala Subra Maniyan S R</span>
        <span className="footer-divider"> | </span>
        <span className="footer-profession">Quality Assurance Engineer</span>
      </footer>
    </>
  );
}

export default App;