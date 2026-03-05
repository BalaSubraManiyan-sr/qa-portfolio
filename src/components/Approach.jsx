import { FaClipboardCheck, FaBug, FaRocket } from "react-icons/fa";

const approachStyles = `
  .approach-card {
    border: 1px solid rgba(255,255,255,0.05);
  }
  .approach-card:hover {
    transform: translateY(-10px);
    border-color: rgba(56, 189, 248, 0.6);
    box-shadow: 0 12px 30px rgba(56, 189, 248, 0.2);
    filter: brightness(1.15);
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('approach-styles')) {
  document.head.insertAdjacentHTML("beforeend", "<style id='approach-styles'>" + approachStyles + "</style>");
}

export default function Approach() {
  return (
    <div style={pageContainer}>
      <h1 style={title}>
        My <span style={gradientText}>QA Approach</span>
      </h1>

      <div style={gridContainer}>

        {/* PHASE 1 */}
        <div style={{ ...card, background: phase1 }} className="approach-card">
          <div style={iconHeader}>
            <span style={numberStyle}>01</span>
            <FaClipboardCheck style={iconStyle} />
          </div>
          <h2>Requirement Analysis & Planning</h2>
          <p>
            Collaborate with stakeholders to understand business
            requirements, functional flows, and edge cases.
            Design detailed test scenarios, test data, and test plans
            aligned with release goals.
          </p>
        </div>

        {/* PHASE 2 */}
        <div style={{ ...card, background: phase2 }} className="approach-card">
          <div style={iconHeader}>
            <span style={numberStyle}>02</span>
            <FaBug style={iconStyle} />
          </div>
          <h2>Test Execution & Validation</h2>
          <p>
            Execute functional, regression, integration,
            smoke, and API testing to validate system stability
            and reliability. Automate critical workflows
            using Selenium WebDriver and TestNG.
          </p>
        </div>

        {/* PHASE 3 */}
        <div style={{ ...card, background: phase3 }} className="approach-card">
          <div style={iconHeader}>
            <span style={numberStyle}>03</span>
            <FaRocket style={iconStyle} />
          </div>
          <h2>Release & Continuous Improvement</h2>
          <p>
            Support SIT & UAT phases, track defects, and ensure
            production stability. Improve automation coverage,
            optimize QA processes, and enhance release confidence
            through continuous feedback.
          </p>
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
  background: "#0f172a",
  color: "white"
};

const title = {
  textAlign: "center",
  fontSize: "42px",
  marginBottom: "70px"
};

const gradientText = {
  background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px"
};

const card = {
  padding: "40px 35px",
  borderRadius: "20px",
  minHeight: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  transition: "all 0.4s ease",
  cursor: "pointer"
};

const iconHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px"
};

const numberStyle = {
  fontSize: "48px",
  fontWeight: "bold",
  opacity: 0.2,
  lineHeight: 1
};

const iconStyle = {
  fontSize: "36px",
  color: "#fff",
  opacity: 0.9
};

const phase1 =
  "linear-gradient(135deg, #1e3a8a, #3b82f6)";

const phase2 =
  "linear-gradient(135deg, #4c1d95, #6366f1)";

const phase3 =
  "linear-gradient(135deg, #0891b2, #0ea5e9)";