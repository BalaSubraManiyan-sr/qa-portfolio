const expKeyframes = `
  @keyframes expFadeSlideUp {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .experience-card:hover {
    transform: translateY(-5px);
    border-color: var(--border-gold-hover) !important;
    box-shadow: 0 10px 30px var(--glow-gold);
  }

  @media (max-width: 768px) {
    .experience-card {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      padding: 25px !important;
      gap: 15px !important;
    }
    
    .experience-icon {
      width: 60px !important;
      height: 60px !important;
    }

    .experience-list {
      text-align: left !important;
      padding-left: 20px !important;
    }
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('exp-keyframes')) {
  document.head.insertAdjacentHTML("beforeend", `<style id="exp-keyframes">${expKeyframes}</style>`);
}

export default function Experience() {
  return (
    <div style={pageContainer}>
      <h1 style={mainTitle}>My Work Experience</h1>

      <div style={timelineContainer}>

        {/* INTERN CARD */}
        <div
          className="experience-card"
          style={{ ...card, animation: "expFadeSlideUp 0.6s ease-out forwards", opacity: 0 }}
        >
          <img
            src="/mindgraph-logo.png"
            alt="Mindgraph Logo"
            className="experience-icon"
            style={iconStyle}
          />

          <div>
            <h2 style={{ ...roleTitle, color: "var(--text-white)", fontSize: "28px", fontWeight: "700" }}>Quality Assurance Intern</h2>
            <h3 style={{ ...company, color: "var(--accent-gold-text)", fontWeight: "600", fontSize: "18px", opacity: 1 }}>Mindgraph Technologies PVT LTD</h3>
            <p style={{ ...duration, color: "var(--text-secondary)", fontWeight: "500", opacity: 1 }}>Feb 2024 – Aug 2024</p>

            <p style={{ ...description, color: "var(--text-description)", fontWeight: "500", lineHeight: "1.8", opacity: 1 }}>
              Gained hands-on experience in manual and automation testing
              of web and API-based applications.
            </p>

            <ul style={{ ...list, color: "var(--text-description)" }} className="experience-list">
              <li>Designed and executed functional & regression test cases.</li>
              <li>Performed API testing using Postman.</li>
              <li>Developed automation scripts using Selenium & TestNG.</li>
              <li>Assisted in performance testing using JMeter.</li>
              <li>Logged and tracked defects using Jira.</li>
            </ul>
          </div>
        </div>

        {/* VERTICAL TIMELINE LINE */}
        <div style={verticalLine}></div>

        {/* FULL TIME CARD */}
        <div
          className="experience-card"
          style={{ ...card, animation: "expFadeSlideUp 0.6s ease-out 0.3s forwards", opacity: 0 }}
        >
          <img
            src="/mindgraph-logo.png"
            alt="Mindgraph Logo"
            className="experience-icon"
            style={iconStyle}
          />

          <div>
            <h2 style={{ ...roleTitle, color: "var(--text-white)", fontSize: "28px", fontWeight: "700" }}>Quality Assurance Engineer</h2>
            <h3 style={{ ...company, color: "var(--accent-gold-text)", fontWeight: "600", fontSize: "18px", opacity: 1 }}>Mindgraph Technologies PVT LTD</h3>
            <p style={{ ...duration, color: "var(--text-secondary)", fontWeight: "500", opacity: 1 }}>Aug 2024 – Present</p>

            <p style={{ ...description, color: "var(--text-description)", fontWeight: "500", lineHeight: "1.8", opacity: 1 }}>
              Leading end-to-end quality assurance activities for enterprise
              web and API-based applications ensuring stable production releases.
            </p>

            <ul style={{ ...list, color: "var(--text-description)" }} className="experience-list">
              <li>Designed detailed test cases & test scenarios.</li>
              <li>Performed functional, regression, integration & smoke testing.</li>
              <li>Automated test scripts using Selenium WebDriver & TestNG.</li>
              <li>Implemented Page Object Model (POM) framework.</li>
              <li>Conducted API validation using Postman.</li>
              <li>Executed performance testing using JMeter.</li>
              <li>Managed defects lifecycle using Jira in Agile/Scrum environment.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  paddingTop: "120px",
  padding: "120px 40px",
  minHeight: "100vh",
  background: "transparent",
  color: "var(--text-white)"
};

const mainTitle = {
  fontSize: "42px",
  marginBottom: "10px",
  textAlign: "center",
  color: "var(--text-white)",
  fontWeight: "bold"
};

const timelineContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "800px",
  margin: "0 auto",
  gap: "20px"
};

const verticalLine = {
  width: "4px",
  height: "70px",
  background: "linear-gradient(to bottom, var(--accent-gold-text), var(--accent-gold-hover))",
  borderRadius: "2px",
  opacity: 0,
  animation: "expFadeSlideUp 0.6s ease-out 0.15s forwards",
  boxShadow: "0 0 12px var(--glow-gold)"
};

const card = {
  display: "flex",
  gap: "25px",
  background: "var(--bg-card)",
  border: "1px solid var(--border-gold)",
  padding: "35px",
  borderRadius: "24px",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
  alignItems: "flex-start",
  width: "100%",
  boxShadow: "var(--card-shadow)"
};

const iconStyle = {
  width: "80px",
  height: "80px",
  objectFit: "contain"
};

const roleTitle = {
  fontSize: "22px",
  marginBottom: "5px"
};

const company = {
  fontSize: "18px",
  opacity: 0.9
};

const duration = {
  fontSize: "14px",
  opacity: 0.6,
  marginBottom: "15px"
};

const description = {
  marginBottom: "15px",
  opacity: 0.8
};

const list = {
  lineHeight: "1.8",
  fontSize: "14px"
};