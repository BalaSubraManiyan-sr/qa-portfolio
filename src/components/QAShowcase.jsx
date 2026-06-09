import { motion } from "framer-motion";

export default function QAShowcase() {
    return (
        <div style={pageContainer}>
            <h1 style={mainTitle}>Bug Report Showcase</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    This section demonstrates a sample defect report created using standard QA documentation practices. It highlights how issues are clearly recorded with severity, priority, reproduction steps, and expected versus actual outcomes to help developers quickly identify and resolve defects.
                </motion.div>
            </div>

            {/* Bug Tracking Dashboard */}
            <div style={tagStyle} className="premium-glow-card">Defect Summary Dashboard</div>
            <div style={dashboardGrid}>
                <motion.div className="premium-glow-card" style={{ ...dashboardCardBase, borderTop: "4px solid #D4AF37", "--glow-rgb": "212 175 55" }} whileHover={{ y: -6, boxShadow: "0 0 25px rgba(212, 175, 55, 0.25), 0 12px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div style={{ ...dashboardNumber, color: "#F3E5AB" }}>2</div>
                    <div style={dashboardLabel}>Open Bugs</div>
                </motion.div>
                <motion.div className="premium-glow-card" style={{ ...dashboardCardBase, borderTop: "4px solid #10b981", "--glow-rgb": "16 185 129" }} whileHover={{ y: -6, boxShadow: "0 0 25px rgba(16, 185, 129, 0.25), 0 12px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div style={{ ...dashboardNumber, color: "#6ee7b7" }}>5</div>
                    <div style={dashboardLabel}>Closed Bugs</div>
                </motion.div>
                <motion.div className="premium-glow-card" style={{ ...dashboardCardBase, borderTop: "4px solid #ef4444", "--glow-rgb": "239 68 68" }} whileHover={{ y: -6, boxShadow: "0 0 25px rgba(239, 68, 68, 0.25), 0 12px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div style={{ ...dashboardNumber, color: "#fca5a5" }}>1</div>
                    <div style={dashboardLabel}>High Severity</div>
                </motion.div>
                <motion.div className="premium-glow-card" style={{ ...dashboardCardBase, borderTop: "4px solid #f59e0b", "--glow-rgb": "245 158 11" }} whileHover={{ y: -6, boxShadow: "0 0 25px rgba(245, 158, 11, 0.25), 0 12px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div style={{ ...dashboardNumber, color: "#fcd34d" }}>2</div>
                    <div style={dashboardLabel}>Medium Severity</div>
                </motion.div>
            </div>

            <div style={cardWrapper}>
                <div style={tagStyle} className="premium-glow-card">
                    Sample Defect Documentation
                </div>

                <motion.div
                    style={bugCard}
                    className="premium-glow-card"
                    whileHover={{ scale: 1.01, boxShadow: "0 0 35px rgba(212, 175, 55, 0.2), 0 15px 35px rgba(0,0,0,0.3)", borderColor: "rgba(212, 175, 55, 0.45)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {/* Header Section */}
                    <div style={cardHeader}>
                        <div>
                            <span style={bugId}>Bug ID: QA-001</span>
                            <h2 style={bugTitle}>Login Button Not Responding</h2>
                            <p style={environmentText}>Environment: Web Application | Mobile</p>
                            <p style={{ ...environmentText, marginTop: "4px" }}>Type: FE</p>
                            <p style={{ ...environmentText, marginTop: "4px" }}>Assigned: Frontend Team</p>
                            <p style={{ ...environmentText, marginTop: "4px" }}>Reported By: Bala Subra Maniyan</p>
                        </div>
                        <div style={badgesContainer}>
                             <span style={{ ...badgeBase, background: "rgba(239, 68, 68, 0.2)", color: "#fca5a5", border: "1px solid rgba(239, 68, 68, 0.5)" }}>Severity: High</span>
                             <span style={{ ...badgeBase, background: "rgba(249, 115, 22, 0.2)", color: "#fdba74", border: "1px solid rgba(249, 115, 22, 0.5)" }}>Priority: High</span>
                             <span style={{ ...badgeBase, background: "rgba(212, 175, 55, 0.15)", color: "#D4AF37", border: "1px solid rgba(212, 175, 55, 0.4)" }}>Status: Open</span>
                        </div>
                    </div>

                    <hr style={divider} />

                    {/* Details Section */}
                    <div style={detailsGrid}>
                        <div style={detailColumn}>
                            <h3 style={sectionTitle}>Description</h3>
                            <p style={paragraphText}>
                                The login button on the login page does not respond after entering valid credentials. The application does not authenticate the user or redirect to the dashboard, and no error message is displayed.
                            </p>

                            <h3 style={sectionTitle}>Steps to Reproduce</h3>
                            <ol style={orderedList}>
                                <li style={listItem}>Open login page</li>
                                <li style={listItem}>Enter valid credentials</li>
                                <li style={listItem}>Click login button</li>
                            </ol>
                        </div>

                        <div style={detailColumn}>
                            <div style={resultBox}>
                                <h3 style={{ ...sectionTitle, color: "#D4AF37" }}>Expected Result</h3>
                                <p style={paragraphText}>
                                    User should be logged into the dashboard.
                                </p>
                            </div>

                            <div style={resultBox}>
                                <h3 style={{ ...sectionTitle, color: "#D4AF37" }}>Actual Result</h3>
                                <p style={paragraphText}>
                                    Login button does not respond.
                                </p>
                            </div>


                            <div style={{ ...resultBox, background: "transparent", border: "none", paddingLeft: 0 }}>
                                 <h3 style={{ ...sectionTitle, color: "#D4AF37" }}>Screenshot / Link</h3>
                                <p style={paragraphText}>
                                    <a href="#" onClick={(e) => e.preventDefault()} style={linkStyle}>🔗 Issue_recording_auth_flow.mp4</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div style={sectionDivider} />

            {/* Test Case Showcase Section */}
            <h1 style={{ ...mainTitle, marginTop: "20px" }}>Test Case Showcase</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    This section showcases sample test cases designed to validate key application functionalities. It includes structured test scenarios, detailed test steps, test data, and expected results to ensure proper functional and UI validation, reflecting a systematic approach to software quality assurance.
                </motion.div>
            </div>

            <div style={{ width: "100%", maxWidth: "1600px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>

                {/* Execution Details & Stats */}
                <div style={tagStyle} className="premium-glow-card">Test Execution Report Summary</div>
                <motion.div
                    style={executionSummaryContainer}
                    className="premium-glow-card"
                    whileHover={{ scale: 1.01, boxShadow: "0 0 35px rgba(212, 175, 55, 0.2), 0 15px 35px rgba(0,0,0,0.3)", borderColor: "rgba(212, 175, 55, 0.45)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div style={executionDetails}>
                        <p style={detailText}><strong>Execution Date :</strong> 15 Mar 2026</p>
                        <p style={detailText}><strong>Executed By :</strong> Bala Subra Maniyan</p>
                        <p style={detailText}><strong>Environment :</strong> Web | Mobile | Android | IOS</p>
                    </div>

                    <div style={executionDetails}>
                        <p style={{ ...detailText, color: "#D4AF37" }}><strong>Total Test Cases :</strong> 3</p>
                        <p style={{ ...detailText, color: "#4ade80" }}><strong>Passed :</strong> 3</p>
                        <p style={{ ...detailText, color: "#f87171" }}><strong>Failed :</strong> 0</p>
                        <p style={{ ...detailText, color: "#fb923c" }}><strong>Blocked :</strong> 0</p>
                        <p style={detailText}><strong>Execution Rate :</strong> 100%</p>
                    </div>
                </motion.div>

                <div style={{ ...tagStyle, marginTop: "40px" }} className="premium-glow-card">Test Case Execution Showcase</div>
                <motion.div
                    style={{ ...tableContainer, width: "100%", boxSizing: "border-box" }}
                    className="premium-glow-card"
                    whileHover={{ scale: 1.005, boxShadow: "0 0 35px rgba(212, 175, 55, 0.2), 0 15px 35px rgba(0,0,0,0.3)", borderColor: "rgba(212, 175, 55, 0.45)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <table style={{ ...tableStyle, minWidth: "1500px" }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>SL NO</th>
                                <th style={thStyle}>TEST SCENARIO ID</th>
                                <th style={thStyle}>SCREEN NAME</th>
                                <th style={thStyle}>TEST SCENARIO DESCRIPTION</th>
                                <th style={thStyle}>UI / FUNCTIONAL</th>
                                <th style={thStyle}>TEST CASE ID</th>
                                <th style={thStyle}>TEST CASE DESCRIPTION</th>
                                <th style={thStyle}>TEST STEPS</th>
                                <th style={thStyle}>TEST DATA</th>
                                <th style={thStyle}>EXPECTED RESULT</th>
                                <th style={thStyle}>RESULT</th>
                                <th style={thStyle}>COMMENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    sl: 1, tsId: "TS-LOGIN-01", screen: "Login Page", tsDesc: "Verify user can login with valid credentials", type: "Functional",
                                    tcId: "TC-LOGIN-01", tcDesc: "Validate login functionality with valid credentials",
                                    steps: ["1. Open login page", "2. Enter valid username", "3. Enter valid password", "4. Click Login"],
                                    data: ["Username: testuser", "Password: Password@123"],
                                    expected: "User should be redirected to dashboard", result: "Pass", comment: "Login working as expected"
                                },
                                {
                                    sl: 2, tsId: "TS-LOGIN-02", screen: "Login Page", tsDesc: "Verify error message for invalid credentials", type: "Functional",
                                    tcId: "TC-LOGIN-02", tcDesc: "Validate login with incorrect password",
                                    steps: ["1. Open login page", "2. Enter valid username", "3. Enter invalid password", "4. Click Login"],
                                    data: ["Username: testuser", "Password: wrong123"],
                                    expected: "Error message should appear", result: "Pass", comment: "Proper validation message displayed"
                                },
                                {
                                    sl: 3, tsId: "TS-LOGIN-03", screen: "Login Page", tsDesc: "Verify login button behaviour", type: "UI",
                                    tcId: "TC-LOGIN-03", tcDesc: "Validate login button is clickable",
                                    steps: ["1. Open login page", "2. Check login button visibility"],
                                    data: ["N/A"],
                                    expected: "Login button should be visible and clickable", result: "Pass", comment: "UI validation successful"
                                }
                            ].map((row, index) => (
                                <motion.tr
                                    key={index}
                                    style={tdRowStyle}
                                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)", scale: 1.01 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <td style={tdStyle}>{row.sl}</td>
                                    <td style={tdStyle}>{row.tsId}</td>
                                    <td style={tdStyle}>{row.screen}</td>
                                    <td style={tdStyle}>{row.tsDesc}</td>
                                    <td style={tdStyle}>{row.type}</td>
                                    <td style={tdStyle}>{row.tcId}</td>
                                    <td style={tdStyle}>{row.tcDesc}</td>
                                    <td style={tdStyle}>
                                        {row.steps.map((step, i) => <div key={i}>{step}</div>)}
                                    </td>
                                    <td style={tdStyle}>
                                        {row.data.map((d, i) => <div key={i}>{d}</div>)}
                                    </td>
                                    <td style={tdStyle}>{row.expected}</td>
                                    <td style={{ ...tdStyle, color: row.result === "Pass" ? "#4ade80" : "#fca5a5", fontWeight: "bold" }}>{row.result}</td>
                                    <td style={tdStyle}>{row.comment}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div style={sectionDivider} />

            {/* Automation & QA Tools Section */}
            <h1 style={{ ...mainTitle, marginTop: "20px" }}>Automation & QA Tools</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    This section highlights the tools and technologies I use for test automation, API validation, performance testing, and defect management to ensure application quality and reliability.
                </motion.div>
            </div>

            <div style={toolsGrid}>
                {[
                    { name: "Selenium", tag: "Test Automation", src: "/assets/logos/selenium.png", fit: "cover", desc: "Automates browser-based functional testing for web applications." },
                    { name: "TestNG", tag: "Test Framework", src: "/assets/logos/testng.png", fit: "cover", desc: "Testing framework used to organize test execution and generate detailed reports." },
                    { name: "Postman", tag: "API Testing", src: "/assets/logos/postman.jpg", fit: "cover", desc: "API testing tool used to validate request-response behavior and status codes." },
                    { name: "JMeter", tag: "Load & Performance Testing", src: "/assets/logos/jmeter.svg", fit: "contain", desc: "Performance testing tool used to evaluate system stability and load handling." },
                    { name: "JIRA", tag: "Defect Management", src: "/assets/logos/jira.jpg", fit: "cover", desc: "Defect tracking and agile project management tool used in development workflows." },
                    { name: "Azure DevOps", tag: "Test Management • Bug Tracking • CI/CD", src: "/assets/logos/azure.png", fit: "contain", desc: "Platform for test case management, bug tracking, sprint planning, and CI/CD integration." }
                ].map((tool, index) => (
                    <motion.div
                        key={index}
                        style={toolCard}
                        className="premium-glow-card"
                        whileHover={{ y: -8, boxShadow: "0 0 30px rgba(212, 175, 55, 0.25), 0 15px 35px rgba(0, 0, 0, 0.3)", borderColor: "rgba(212, 175, 55, 0.45)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div style={toolIconContainer}>
                            {tool.src ? (
                                <img
                                    src={tool.src}
                                    alt={tool.name}
                                    style={{
                                        width: tool.fit === "contain" ? "80%" : "100%",
                                        height: tool.fit === "contain" ? "80%" : "100%",
                                        objectFit: tool.fit || "cover"
                                    }}
                                />
                            ) : (
                                <span style={{ fontSize: "32px" }}>{tool.icon}</span>
                            )}
                        </div>
                        <h3 style={toolName}>{tool.name}</h3>
                        {tool.tag && <span style={toolBadge}>{tool.tag}</span>}
                        <p style={toolDescription}>{tool.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

/* ================= STYLES ================= */

const pageContainer = {
    paddingTop: "120px",
    background: "transparent",
    padding: "120px 40px 60px 40px",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const mainTitle = {
    fontSize: "42px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
    background: "linear-gradient(90deg, #F3E5AB, #D4AF37, #AA7C11)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0px 2px 10px rgba(0,0,0,0.2)"
};

const introSection = {
    maxWidth: "800px",
    textAlign: "center",
    marginBottom: "50px"
};

const introText = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#cbd5e1",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "25px",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
};

const sectionDivider = {
    width: "100%",
    maxWidth: "1200px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    margin: "80px auto 40px auto",
    opacity: 0.8
};

const dashboardGrid = {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "50px",
    flexWrap: "wrap",
    justifyContent: "center"
};

const dashboardCardBase = {
    background: "rgba(18, 18, 18, 0.75)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "16px",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "140px",
    flex: "1 1 140px",
    textAlign: "center"
};

const dashboardNumber = {
    fontSize: "38px",
    fontWeight: "bold",
    marginBottom: "5px"
};

const dashboardLabel = {
    fontSize: "14px",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontWeight: "600",
    textAlign: "center"
};

const cardWrapper = {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"
};

const tagStyle = {
    background: "#D4AF37",
    color: "#0A0A0A",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginBottom: "-15px", // Overlaps the card slightly
    zIndex: 10,
    textTransform: "uppercase",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)"
};

const bugCard = {
    background: "rgba(18, 18, 18, 0.75)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    position: "relative"
};

const cardHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "25px"
};

const bugId = {
    fontSize: "14px",
    color: "#94a3b8",
    fontFamily: "monospace",
    letterSpacing: "1px"
};

const bugTitle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "5px",
    color: "#f8fafc"
};

const environmentText = {
    fontSize: "14px",
    color: "#94a3b8",
    marginTop: "8px",
    fontWeight: "500",
    letterSpacing: "0.5px"
};

const badgesContainer = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
};

const badgeBase = {
    padding: "6px 14px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.5px"
};

const divider = {
    border: "none",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    margin: "30px 0"
};

const detailsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "clamp(20px, 4vw, 40px)"
};

const detailColumn = {
    display: "flex",
    flexDirection: "column",
    gap: "25px"
};

const sectionTitle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#e2e8f0",
    marginBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "8px"
};

const paragraphText = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#cbd5e1"
};

const orderedList = {
    margin: 0,
    paddingLeft: "25px",
    color: "#cbd5e1"
};

const listItem = {
    fontSize: "16px",
    marginBottom: "10px",
    lineHeight: "1.5"
};

const resultBox = {
    background: "rgba(255, 255, 255, 0.05)",
    padding: "15px 20px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
};

const linkStyle = {
    color: "#D4AF37",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
};

const tableContainer = {
    background: "rgba(18, 18, 18, 0.75)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "20px",
    padding: "30px",
    overflowX: "auto"
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1500px" // ensures it doesn't get too squished
};

const thStyle = {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#94a3b8",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "uppercase"
};

const tdRowStyle = {
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    cursor: "default"
};

const tdStyle = {
    padding: "15px",
    color: "#cbd5e1",
    fontSize: "14px",
    verticalAlign: "top",
    lineHeight: "1.5"
};

const executionSummaryContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    padding: "20px 30px",
    background: "rgba(18, 18, 18, 0.75)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "15px",
    marginBottom: "20px",
    gap: "20px"
};

const executionDetails = {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
};

const detailText = {
    margin: 0,
    fontSize: "15px",
    color: "#cbd5e1",
    fontFamily: "monospace"
};

const toolsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
    padding: "20px",
    marginBottom: "80px"
};

const toolCard = {
    background: "rgba(18, 18, 18, 0.75)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "20px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    cursor: "default"
};

const toolIconContainer = {
    width: "90px",
    height: "90px",
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    overflow: "hidden"
};

const toolName = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#f8fafc",
    marginBottom: "8px",
    textAlign: "center",
    width: "100%"
};

const toolBadge = {
    display: "inline-block",
    background: "rgba(212, 175, 55, 0.12)",
    color: "#D4AF37",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    border: "1px solid rgba(212, 175, 55, 0.3)",
    marginBottom: "15px"
};

const toolDescription = {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#94a3b8",
    margin: 0,
    textAlign: "center"
};
