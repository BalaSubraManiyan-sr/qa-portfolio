import React, { useState, useEffect } from "react";

const RunningCode = () => {
  const [lines, setLines] = useState([]);
  const codeLines = [
    "> Initialize automated test suite...",
    "> Loading WebDriver instance...",
    "> Navigating to target environment...",
    "> [EXEC] login_authentication_test",
    "  ✓ PASS: User login successful",
    "> [EXEC] payment_gateway_validation",
    "  ✓ PASS: Checkout flow completed",
    "> [EXEC] load_testing_module",
    "  ✓ PASS: 10k concurrent users simulated",
    "> [EXEC] api_endpoint_check",
    "  ✓ PASS: All endpoints 200 OK",
    "> Compiling test execution report...",
    "> Status: 100% Automation Passed ✨"
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev, codeLines[currentLine]];
        if (newLines.length > 7) newLines.shift();
        return newLines;
      });
      currentLine++;
      if (currentLine >= codeLines.length) {
        currentLine = 0;
        setLines([]);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: "100%",
      height: "260px",
      background: "#0D0D0D",
      padding: "20px",
      fontFamily: "monospace",
      fontSize: "13px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      borderBottom: "2px solid #D4AF37",
      overflow: "hidden"
    }}>
      {lines.map((line, i) => (
        <div key={i} style={{
          color: line.includes('PASS') ? '#4ade80' : line.includes('>') ? '#D4AF37' : '#F3E5AB',
          marginBottom: "6px",
          opacity: 0.6 + (i * 0.05),
          textShadow: line.includes('PASS') ? '0 0 5px rgba(74, 222, 128, 0.4)' : 'none',
          whiteSpace: "pre-wrap",
          wordBreak: "break-word"
        }}>
          {line}
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
        <span style={{ color: "#D4AF37", marginRight: "8px" }}>&gt;</span>
        <div style={{ width: "8px", height: "14px", background: "#D4AF37", animation: "blink 1s step-end infinite" }} />
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div style={pageContainer} className="about-page-container">
      <div className="about-content-wrapper">
        <div className="stable-2-column-grid">
          {/* TOP ROW: Image card and Strategic coverage */}
          <div style={{ ...imageCard, height: "100%", margin: 0 }} className="glass-card-mobile-fix">
            <div style={{ background: "rgba(0,0,0,0.2)" }}>
              <RunningCode />
            </div>
            <div style={{ padding: "clamp(20px, 5vw, 30px)", textAlign: "left" }}>
              <div style={{
                margin: 0,
                lineHeight: "1.8",
                fontSize: "22px",
                fontWeight: "600",
                fontFamily: "Inter, sans-serif",
                hyphens: "none",
                wordBreak: "normal",
                overflowWrap: "normal",
                color: "#e5e7eb"
              }}>
                I am a passionate <span style={{ color: "#D4AF37", fontWeight: "800" }}>Quality Assurance Engineer</span> with
                hands-on experience in <span style={{ color: "#D4AF37", fontWeight: "800" }}>manual testing</span>,
                <span style={{ color: "#D4AF37", fontWeight: "800" }}> automation testing</span>, and
                <span style={{ color: "#D4AF37", fontWeight: "800" }}> API validation</span>. I focus on delivering reliable and
                high quality software by identifying defects early, improving test coverage, and supporting stable releases through
                effective testing strategies.
              </div>
            </div>
          </div>

          <div style={{ ...glassCard, margin: 0, display: "flex", flexDirection: "column", textAlign: "left" }} className="glass-card-mobile-fix">
            <p>Comprehensive Quality Assurance</p>
            <h2 className="responsive-title" style={{ marginBottom: "10px" }}>Strategic Test Coverage</h2>

            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
              {[
                {label: "Manual Testing", text: "End-to-End, Regression, and Exploratory.", color: "#D4AF37" },
                { label: "API Testing", text: "Functional and Schema validation of REST APIs.", color: "#F3E5AB" },
                { label: "Compatibility", text: "Responsive Web Design (RWD) and Cross-Platform testing.", color: "#C5A028" },
                { label: "Defect Management", text: "Root Cause Analysis (RCA) and Bug Life Cycle tracking.", color: "#E6C35C" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="coverage-item"
                  style={{ animationDelay: `${i * 0.2 + 0.5}s` }}
                >
                  <strong style={{ color: item.color, fontSize: "18px", display: "block", marginBottom: "5px" }}>{item.label}</strong>
                  <span style={{ opacity: 0.9, lineHeight: "1.6" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ROW: Left (Scoop + Comp) and Right (Tools) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px", height: "100%" }}>
            <div style={{ ...glassCard, flex: 1, display: "flex", flexDirection: "column" }} className="glass-card-mobile-fix">
              <p>The Inside Scoop</p>
              <h2 className="responsive-title" style={{ marginBottom: "20px" }}>
                Currently contributing to enterprise-level QA
                projects at Mindgraph Technologies
              </h2>
              <div style={{ flex: 1 }}>
                <p style={{ lineHeight: "1.6", color: "#e2e8f0" }}>
                  Involved in regression automation, API validation,
                  defect lifecycle management, and release verification
                  ensuring production stability.
                </p>
              </div>
            </div>

            <div style={{ ...glassCard, overflow: "hidden" }} className="glass-card-mobile-fix">
              <p>Extensive Testing Expertise</p>
              <h2 className="responsive-title" style={{ marginBottom: "25px" }}>Core Testing Competencies</h2>

              <div style={{ position: "relative", width: "100%", overflow: "hidden", paddingBottom: "10px" }}>
                <div style={{
                  display: "flex",
                  gap: "15px",
                  width: "max-content",
                  animation: "marquee 60s linear infinite"
                }}>
                  {[
                    "Functional Testing", "Smoke & Sanity Testing", "Regression Testing", "System Integration Testing (SIT)",
                    "User Acceptance Testing (UAT)", "API & Backend Testing", "RESTful API Testing", "Load Testing",
                    "Performance Testing", "Cross-Browser Testing", "Exploratory Testing", "Boundary Value Analysis (BVA)",
                    "UI/UX Testing", "Agile / Scrum", "Test Case Design", "Equivalence Partitioning (ECP)", "Risk-Based Testing"
                  ].map((comp, i) => (
                    <span key={i} style={badge}>{comp}</span>
                  ))}
                  {/* Duplicate for marquee */}
                  {[
                    "Functional Testing", "Smoke & Sanity Testing", "Regression Testing", "System Integration Testing (SIT)",
                    "User Acceptance Testing (UAT)", "API & Backend Testing", "RESTful API Testing", "Load Testing",
                    "Performance Testing", "Cross-Browser Testing", "Exploratory Testing", "Boundary Value Analysis (BVA)",
                    "UI/UX Testing", "Agile / Scrum", "Test Case Design", "Equivalence Partitioning (ECP)", "Risk-Based Testing"
                  ].map((comp, i) => (
                    <span key={`dup-${i}`} style={badge}>{comp}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ ...rightColumn, height: "100%" }}>
            <div style={{ ...glassCard, height: "100%", display: "flex", flexDirection: "column", textAlign: "left" }} className="glass-card-mobile-fix">
              <p style={{ margin: 0 }}>QA Tools & Technologies</p>
              <h2 className="responsive-title" style={{ marginTop: "10px", lineHeight: "1.3" }}>Tools and technologies powering my quality assurance workflow</h2>

              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
                {[
                  { category: "Automation", tools: ["Selenium WebDriver", "TestNG"], color: "#D4AF37" },
                  { category: "API Testing", tools: ["Postman"], color: "#F3E5AB" },
                  { category: "Performance Testing", tools: ["JMeter"], color: "#C5A028" },
                  { category: "Languages", tools: ["Java", "SQL"], color: "#E6C35C" },
                  { category: "Project Tools", tools: ["Jira", "Azure DevOps", "Taiga"], color: "#EAA850" }
                ].map((group, idx) => (
                  <div key={idx}>
                    <strong style={{ color: group.color, display: "block", marginBottom: "8px" }}>{group.category}</strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {group.tools.map((tech, i) => (
                        <span key={i} className="tool-badge-animate" style={badge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* SECTION 2.15 - Testing Environments & Platforms */}
      <div style={{ marginTop: "40px" }}>
        <div style={{ ...glassCardLarge, textAlign: "left" }} className="glass-card-mobile-fix">
          <p style={{ color: "#94a3b8", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>
            Testing Environments & Platforms
          </p>
          <h2 className="responsive-title" style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}>
            Platforms & Tools I leverage
          </h2>

          <div className="platform-grid">
            {[
              "Web Application Testing",
              "Mobile Application Testing on Real Devices",
              "iOS Testing using BrowserStack",
              "Cross-Browser Testing (Chrome, Edge)",
              "API Validation using Postman",
              "Load & Performance Testing using JMeter",
              "Automation Testing using Selenium WebDriver",
              "Defect Tracking and Lifecycle Management using JIRA"
            ].map((item, i) => (
              <div
                key={i}
                className="platform-pill stagger-reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* SECTION 2.25 - QA Philosophy Quote */}
      <div style={{ marginTop: "80px", marginBottom: "20px" }}>
        <div className="fade-scale-up philosophy-quote-card" style={{
          ...glassCardLarge,
          background: "rgba(212, 175, 55, 0.03)",
          borderLeft: "4px solid #D4AF37",
          borderRadius: "0 20px 20px 0",
          textAlign: "center",
          position: "relative"
        }}>
          <span className="quote-mark-start" style={{
            position: "absolute",
            top: "10px",
            left: "20px",
            fontSize: "60px",
            color: "rgba(212, 175, 55, 0.2)",
            fontFamily: "serif",
            lineHeight: 1
          }}>“</span>
          <h2 className="responsive-title" style={{ letterSpacing: "1px", marginBottom: "15px", color: "#D4AF37" }}>My QA Philosophy</h2>
          <p style={{ fontSize: "18px", color: "#e2e8f0", lineHeight: "1.8", fontStyle: "italic" }}>
            "Quality is not just about finding defects — it’s about building confidence in every release. My goal is to ensure software is reliable, scalable, and delivers a seamless experience for every user. Great software is built when quality becomes everyone’s responsibility — QA ensures that promise is delivered."
          </p>
          <span className="quote-mark-end" style={{
            position: "absolute",
            bottom: "-10px",
            right: "20px",
            fontSize: "60px",
            color: "rgba(212, 175, 55, 0.2)",
            fontFamily: "serif",
            lineHeight: 1
          }}>”</span>
        </div>
      </div>

      {/* SECTION 2.5 - Testing Process Timeline */}
      <div style={{ marginTop: "60px" }}>
        <div style={{ ...glassCardLarge, paddingBottom: "30px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="responsive-title" style={{ letterSpacing: "1px", marginBottom: "10px", marginTop: "0" }}>My Testing Process</h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
              A structured and quality-driven approach to ensure reliable software delivery.
            </p>
          </div>

          <div className="timeline-container">
            {[
              {
                step: "1",
                title: "Requirement Understanding",
                desc: "Analyze business requirements, user flows, and technical documentation to identify testing scope, edge cases, and potential risk areas."
              },
              {
                step: "2",
                title: "Test Planning & Scenario Design",
                desc: "Design detailed test scenarios, test data, and test plans aligned with functional requirements and business workflows."
              },
              {
                step: "3",
                title: "Test Execution",
                desc: "Execute functional, regression, integration, and API tests across environments to validate system behavior and ensure expected results."
              },
              {
                step: "4",
                title: "Defect Identification & Reporting",
                desc: "Log and track defects with clear reproduction steps, severity analysis, and collaborate with developers for faster resolution."
              },
              {
                step: "5",
                title: "Automation & Optimization",
                desc: "Automate critical workflows using Selenium WebDriver and TestNG to improve regression efficiency and testing coverage."
              },
              {
                step: "6",
                title: "Release Validation",
                desc: "Support SIT and UAT phases, validate fixes, perform regression testing, and ensure stable and production-ready releases."
              }
            ].map((item, idx) => (
              <div key={idx} className="timeline-step">
                <div className="timeline-marker">
                  <span className="timeline-icon">{item.step}</span>
                  <div className="timeline-line"></div>
                </div>
                <div className="timeline-content glass-hover">
                  <h3 style={{ color: "#D4AF37", marginBottom: "8px", fontSize: "18px" }}>{item.title}</h3>
                  <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.5" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2.75 - QA Impact & Contributions */}
      <div style={{ marginTop: "60px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="responsive-title" style={{ letterSpacing: "1px", marginBottom: "10px" }}>QA Impact & Contributions</h2>
          <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, #AA7C11, transparent)", width: "30%", margin: "0 auto" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px"
        }}>
          {[
            {
              text: "Detected and reported ",
              highlight: "100+",
              rest: " functional and integration defects before production releases."
            },
            {
              text: "Improved regression testing efficiency by automating critical workflows using ",
              highlight: "Selenium WebDriver",
              rest: " and TestNG."
            },
            {
              text: "Designed and executed ",
              highlight: "500+",
              rest: " test cases across enterprise web and API-based applications."
            },
            {
              text: "Supported multiple ",
              highlight: "SIT and UAT",
              rest: " cycles, ensuring smooth deployments for enterprise-level systems."
            },
            {
              text: "Validated REST APIs using ",
              highlight: "Postman",
              rest: ", ensuring accurate backend responses and data integrity."
            },
            {
              text: "Collaborated with developers and stakeholders to ",
              highlight: "reduce defect leakage",
              rest: " and improve release quality."
            }
          ].map((impact, idx) => (
            <div key={idx} style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
              padding: "25px",
              borderRadius: "16px",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              display: "flex",
              alignItems: "flex-start",
              gap: "15px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default"
            }}
              className="reveal impact-card"
            >
              <div style={{
                background: "rgba(212, 175, 55, 0.1)",
                color: "#D4AF37",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "2px"
              }}>✔</div>
              <p style={{ lineHeight: "1.6", color: "#e2e8f0", fontSize: "15px" }}>
                {impact.text}
                <strong style={{ color: "#D4AF37", fontWeight: "600", padding: "0 4px" }}>{impact.highlight}</strong>
                {impact.rest}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3 - Key Achievements */}
      <div style={{ marginTop: "60px" }}>
        <div style={{ ...glassCardLarge, textAlign: "center", paddingBottom: "20px" }} className="glass-card-mobile-fix">
          <h2 className="responsive-title" style={{ letterSpacing: "1px", marginBottom: "10px", marginTop: "0" }}>KEY ACHIEVEMENTS</h2>
          <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, #AA7C11, transparent)", width: "100%", marginBottom: "30px" }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            textAlign: "left"
          }}>
            <div style={achievementItem}>
              <p>Improved regression testing efficiency by automating <strong>selected critical workflows</strong> using Selenium WebDriver and TestNG.</p>
            </div>
            <div style={achievementItem}>
              <p>Reduced production defects through effective <strong>test planning, requirement analysis, and early defect identification</strong>.</p>
            </div>
            <div style={achievementItem}>
              <p>Enhanced test coverage by designing detailed test scenarios using <strong>BVA and ECP</strong> techniques.</p>
            </div>
            <div style={achievementItem}>
              <p>Supported successful <strong>SIT and UAT phases</strong> by collaborating with clients and internal teams to ensure smooth releases.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 - Resume CTA */}
      <div style={{ marginTop: "60px" }}>
        <div style={resumeCard}>
          <h2>Interested in collaborating?</h2>
          <p style={{ marginTop: "10px", fontSize: "16px" }}>Download my resume to explore my experience in manual testing, automation, API validation, and enterprise QA projects.</p>

          <a
            href="/BALA_SUBRA_MANIYAN_S_R_QA_Resume.pdf"
            download="BALA_SUBRA_MANIYAN_S_R_QA_Resume.pdf"
            style={{ textDecoration: "none" }}
          >
            <button className="animated-btn" style={{ marginTop: "20px" }}>
              Download Resume ↓
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  paddingTop: "120px",
  minHeight: "100vh",
  background: "transparent",
  padding: "clamp(100px, 12vh, 140px) clamp(10px, 4vw, 40px) 40px clamp(10px, 4vw, 40px)",
  color: "white"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
  marginBottom: "80px"
};

const imageCard = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
};

const rightColumn = {
  display: "flex",
  flexDirection: "column",
  gap: "30px"
};

const glassCard = {
  background: "rgba(255,255,255,0.05)",
  padding: "45px",
  borderRadius: "20px",
  backdropFilter: "blur(10px)"
};

const glassCardLarge = {
  background: "rgba(255,255,255,0.05)",
  padding: "40px",
  borderRadius: "20px",
  backdropFilter: "blur(10px)"
};

const badgeContainer = {
  marginTop: "20px",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px"
};

const badge = {
  background: "transparent",
  border: "1px solid rgba(212, 175, 55, 0.25)",
  color: "#FFFFFF",
  padding: "8px 15px",
  borderRadius: "20px",
  fontSize: "14px",
  transition: "all 0.3s ease",
  display: "inline-block"
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px"
};

const resumeCard = {
  background: "linear-gradient(135deg, #121212, #221B0B)",
  border: "1px solid rgba(212, 175, 55, 0.3)",
  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.1)",
  padding: "40px",
  borderRadius: "20px",
  textAlign: "center"
};


const achievementItem = {
  background: "rgba(255,255,255,0.03)",
  padding: "20px",
  borderRadius: "12px",
  borderLeft: "4px solid #D4AF37",
  fontSize: "15px",
  lineHeight: "1.6"
};