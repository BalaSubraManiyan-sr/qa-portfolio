import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiBriefcase, FiCheck, FiArrowRight, FiCheckCircle, FiUser } from "react-icons/fi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, useInView } from "framer-motion";

/* ================= COUNTER ANIMATION COMPONENT ================= */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 1.5; // seconds
      const totalFrames = Math.round(duration * 60);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(end * (1 - (1 - progress) * (1 - progress)));
        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  /* ================= PARTICLES INIT ================= */
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  /* ================= SEND EMAIL FUNCTION ================= */
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(form.current);
      const payload = {
        name: formData.get("user_name"),          // Maps to {{name}}
        user_name: formData.get("user_name"),     // Maps to {{user_name}}
        to_name: formData.get("user_name"),       // Often used in settings
        email: formData.get("user_email"),        // Maps to {{email}}
        user_email: formData.get("user_email"),   // Maps to {{user_email}}
        reply_to: formData.get("user_email"),     // Standard EmailJS variable for Reply-To
        subject: formData.get("subject") || "",   // Maps to {{subject}}
        message: formData.get("message")          // Maps to {{message}}
      };

      // Send email to YOU (Admin Notification + Built-in Auto Reply)
      await emailjs.send(
        "service_0jq4soc",
        "template_zhs83db",
        payload,
        "8Ueuot6w0yUKXMThd"
      );

      setLoading(false);
      setShowSuccess(true);
      form.current.reset();
      setTimeout(() => setShowSuccess(false), 3000);

    } catch (error) {
      console.error("Email Error:", error);
      setLoading(false);
      alert(`Failed to send message ❌\nReason: ${error.text || error.message || JSON.stringify(error)}`);
    }
  };

  return (
    <div className="contact-container">
      {/* PARTICLES BACKGROUND */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { speed: 1 },
            links: { enable: true, color: document.body.classList.contains("light-theme") ? "#2563EB" : "#D4AF37", opacity: 0.15 }
          }
        }}
        style={{ position: "absolute", zIndex: 0 }}
      />

      <div className="contact-bg-dots"></div>

      {/* SECTION HEADER */}
      <h1 className="contact-title">
        Let's Build <span className="gradient-text">Quality Software</span>
      </h1>
      <p className="contact-subtitle">
        Reach out and let's discuss how we can deliver stable, scalable, and high-quality applications through structured testing, automation, and quality assurance.
      </p>

      {/* 2-COLUMN RESPONSIVE LAYOUT */}
      <div className="contact-grid">
        
        {/* LEFT COLUMN: Contact Information Card */}
        <motion.div 
          className="contact-info-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-status-pill">
            <span className="pulse-dot"></span>
            Available for Opportunities
          </div>
          <h3 className="info-card-header">Contact Information</h3>
          
          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="item-icon-wrapper"><FiMail /></div>
              <div>
                <div className="item-label">Email</div>
                <a href="mailto:balasubramaniyansr@gmail.com" className="item-value">balasubramaniyansr@gmail.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="item-icon-wrapper"><FiPhone /></div>
              <div>
                <div className="item-label">Phone</div>
                <a href="tel:+918925156100" className="item-value">+91 89251 56100</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="item-icon-wrapper"><FiMapPin /></div>
              <div>
                <div className="item-label">Location</div>
                <div className="item-value">Coimbatore, Tamil Nadu, India</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="item-icon-wrapper"><FiBriefcase /></div>
              <div>
                <div className="item-label">Current Role</div>
                <div className="item-value">Quality Assurance Engineer</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div 
          className="contact-form-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label"><FiUser /> Name</label>
                <input
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="contact-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label"><FiMail /> Email</label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="contact-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                name="subject"
                placeholder="Subject of message"
                required
                className="contact-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="How can I help you?"
                required
                className="contact-textarea"
              />
            </div>

            <button type="submit" className="contact-btn-submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* PROFESSIONAL PROFILES SECTION */}
      <motion.div 
        className="contact-profiles-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="profiles-heading">Connect With Me</h3>
        <div className="profiles-buttons">
          <a 
            href="https://github.com/BalaSubraManiyan-sr" 
            target="_blank" 
            rel="noreferrer" 
            className="social-circle-btn github-btn"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/bala-subra-maniyan-s-r/" 
            target="_blank" 
            rel="noreferrer" 
            className="social-circle-btn linkedin-btn"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://wa.me/918925156100?text=Hello%20Bala%20Subra%20Maniyan%2C%20I%20visited%20your%20QA%20portfolio%20and%20would%20like%20to%20connect%20regarding%20quality%20assurance%20opportunities." 
            target="_blank" 
            rel="noreferrer" 
            className="social-circle-btn whatsapp-btn"
            title="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </motion.div>

      {/* QUICK STATS SECTION */}
      <motion.div 
        className="contact-stats-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-stat-card">
          <div className="stat-value"><Counter target={500} suffix="+" /></div>
          <div className="stat-label">Test Cases Executed</div>
        </div>
        <div className="contact-stat-card">
          <div className="stat-value"><Counter target={100} suffix="+" /></div>
          <div className="stat-label">Defects Reported</div>
        </div>
        <div className="contact-stat-card">
          <div className="stat-value"><Counter target={2} suffix="+" /></div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="contact-stat-card">
          <div className="stat-value"><Counter target={10} suffix="+" /></div>
          <div className="stat-label">Projects Delivered</div>
        </div>
      </motion.div>

      {/* CALL TO ACTION CARD */}
      <motion.div 
        className="contact-cta-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="cta-left">
          <h3 className="cta-title">Need a QA Engineer for Your Next Project?</h3>
          <p className="cta-description">
            I help teams deliver reliable, scalable, and high-quality software through structured testing, automation, API validation, and defect management.
          </p>
          
          <div className="cta-split-lists">
            <div className="cta-list-column">
              <h4 className="cta-list-header">My Services</h4>
              <ul className="cta-list">
                <li><FiCheck /> Manual & Functional Testing</li>
                <li><FiCheck /> Automation Testing (Selenium + TestNG)</li>
                <li><FiCheck /> API Testing & Validation</li>
                <li><FiCheck /> Defect Lifecycle Management</li>
                <li><FiCheck /> Regression & Smoke Testing</li>
                <li><FiCheck /> Cross-Browser Testing</li>
                <li><FiCheck /> Test Planning & Documentation</li>
                <li><FiCheck /> Release Validation & UAT Support</li>
              </ul>
            </div>
            <div className="cta-list-column">
              <h4 className="cta-list-header">Your Benefits</h4>
              <ul className="cta-list">
                <li><FiCheckCircle /> Improved Software Stability</li>
                <li><FiCheckCircle /> Faster Release Confidence</li>
                <li><FiCheckCircle /> Better User Experience</li>
                <li><FiCheckCircle /> Reduced Production Defects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-right-buttons">
          <a href="mailto:balasubramaniyansr@gmail.com" className="cta-btn-primary">
            Let's Connect <FiArrowRight />
          </a>
          <a 
            href="https://wa.me/918925156100?text=Hello%20Bala%20Subra%20Maniyan%2C%20I%20visited%20your%20QA%20portfolio%20and%20would%20like%20to%20connect%20regarding%20quality%20assurance%20opportunities." 
            target="_blank" 
            rel="noreferrer" 
            className="cta-btn-secondary"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* TRUST INDICATORS */}
      <motion.div 
        className="contact-trust-bar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="trust-item">✓ Quality Focused</span>
        <span className="trust-dot"></span>
        <span className="trust-item">✓ Automation Driven</span>
        <span className="trust-dot"></span>
        <span className="trust-item">✓ Detail Oriented</span>
        <span className="trust-dot"></span>
        <span className="trust-item">✓ Client Centric</span>
      </motion.div>


      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div style={popupOverlay}>
          <div style={squarePopup}>
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>✅</div>
            <h3 style={{ margin: 0 }}>Message Sent Successfully</h3>
            <p style={{ opacity: 0.8 }}>Check your email for confirmation</p>
          </div>
        </div>
      )}

    </div>
  );
}

/* ================= LEGACY POPUP STYLES ================= */
const popupOverlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(5px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 3000
};

const squarePopup = {
  background: "var(--bg-card)",
  border: "2px solid var(--border-gold)",
  boxShadow: "0 0 30px var(--glow-gold)",
  padding: "40px",
  borderRadius: "15px",
  textAlign: "center",
  minWidth: "250px"
};