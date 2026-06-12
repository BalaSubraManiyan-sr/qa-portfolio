import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaBug, FaCog, FaClock, FaRocket, FaDownload } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/BALA_SUBRA_MANIYAN_S_R_QA_Resume.pdf";
    link.download = "BALA_SUBRA_MANIYAN_S_R_QA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <div className="hero-glow-orb"></div>

      {/* Main Split Section */}
      <div className="hero-split-section">
        {/* Left Side: Content */}
        <div className="hero-left-content">
          <div className="hero-badge-container">
            <span className="hero-badge-dots">•••</span>
            <span className="hero-badge-text">QUALITY ASSURANCE ENGINEER</span>
            <span className="hero-badge-line"></span>
          </div>

          <h1 className="hero-heading">
            Delivering
            <span className="gold-text-gradient"> Reliable & Bug-Free </span>
            Software Experiences
          </h1>

          <p className="hero-description">
            Hi, I’m <strong>Bala Subra Maniyan S R</strong>, a Quality Assurance Engineer focused on delivering reliable, scalable, and defect-free software through automation and strategic testing.
          </p>

          <div className="hero-button-group">
            <button
              className="home-explore-btn"
              onClick={() => navigate("/projects")}
            >
              Explore My Work <span className="arrow">→</span>
            </button>
            <button
              className="home-resume-btn"
              onClick={handleDownloadResume}
            >
              Download Resume <FaDownload className="download-icon" />
            </button>
          </div>
        </div>

        {/* Right Side: Graphic Emblem */}
        <div className="hero-right-graphic">
          <div className="graphic-outer-circle">
            <div className="graphic-inner-circle">
              <img src="/qa-logo-gold.jpg" alt="QA Emblem" className="graphic-emblem-img" />
            </div>
            <div className="orbit-dot dot-1"></div>
            <div className="orbit-dot dot-2"></div>
          </div>
          <p className="graphic-subtext">QUALITY | PRECISION | RELIABILITY</p>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="hero-stats-bar">
        <div className="stat-item">
          <FaShieldAlt className="stat-icon" />
          <div className="stat-text-group">
            <span className="stat-label">QUALITY FOCUS</span>
            <span className="stat-value">100%</span>
          </div>
        </div>
        <div className="stat-item">
          <FaBug className="stat-icon" />
          <div className="stat-text-group">
            <span className="stat-label">DEFECT DETECTION</span>
            <span className="stat-value">High Accuracy</span>
          </div>
        </div>
        <div className="stat-item">
          <FaCog className="stat-icon" />
          <div className="stat-text-group">
            <span className="stat-label">AUTOMATION</span>
            <span className="stat-value">Selenium • TestNG</span>
          </div>
        </div>
        <div className="stat-item">
          <FaClock className="stat-icon" />
          <div className="stat-text-group">
            <span className="stat-label">EXPERIENCE</span>
            <span className="stat-value">+ 2 Years</span>
          </div>
        </div>
        <div className="stat-item">
          <FaRocket className="stat-icon" />
          <div className="stat-text-group">
            <span className="stat-label">APPROACH</span>
            <span className="stat-value">Strategic & Reliable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
