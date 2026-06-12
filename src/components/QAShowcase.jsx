import { motion } from "framer-motion";

export default function QAShowcase() {
    return (
        <div style={pageContainer}>
            <h1 style={mainTitle} className="qa-title">Bug Report Showcase</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    className="qa-intro-card"
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    This section demonstrates a sample defect report created using standard QA documentation practices. It highlights how issues are clearly recorded with severity, priority, reproduction steps, and expected versus actual outcomes to help developers quickly identify and resolve defects.
                </motion.div>
            </div>

            {/* Bug Tracking Dashboard */}
            <div style={tagStyle} className="premium-glow-card qa-tag-badge">Defect Summary Dashboard</div>
            <div style={dashboardGrid}>
                <motion.div className="premium-glow-card qa-dashboard-card open-bugs" style={{ ...dashboardCardBase, borderTop: "4px solid var(--accent-gold)", "--glow-rgb": "var(--glow-rgb-val)" }} whileHover={{ y: -6, boxShadow: "0 0 25px var(--glow-gold), 0 12px 30px rgba(0,0,0,0.15)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div style={{ ...dashboardNumber, color: "var(--accent-gold-hover)" }} className="qa-dashboard-number">2</div>
                    <div style={dashboardLabel} className="qa-dashboard-label">Open Bugs</div>
                </motion.div>
                <motion.div className="premium-glow-card qa-dashboard-card closed-bugs" style={{ ...dashboardCardBase, borderTop: "4px solid #10b981", "--glow-rgb": "16 185 129" }} whileHover={{ y: -6, boxShadow: "0 0 25px rgba(16, 185, 129, 0.25), 0 12px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div style={{ ...dashboardNumber, color: "#6ee7b7" }} className="qa-dashboard-number">5</div>
                    <div style={dashboardLabel} className="qa-dashboard-label">Closed Bugs</div>
                </motion.div>
                <motion.div className="premium-glow-card qa-dashboard-card high-severity" style={{ ...dashboardCardBase, borderTop: "4px solid #ef4444", "--glow-rgb": "239 68 68" }} whileHover={{ y: -6, boxShadow: "0 0 25px rgba(239, 68, 68, 0.25), 0 12px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div style={{ ...dashboardNumber, color: "#fca5a5" }} className="qa-dashboard-number">1</div>
                    <div style={dashboardLabel} className="qa-dashboard-label">High Severity</div>
                </motion.div>
                <motion.div className="premium-glow-card qa-dashboard-card medium-severity" style={{ ...dashboardCardBase, borderTop: "4px solid #f59e0b", "--glow-rgb": "245 158 11" }} whileHover={{ y: -6, boxShadow: "0 0 25px rgba(245, 158, 11, 0.25), 0 12px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div style={{ ...dashboardNumber, color: "#fcd34d" }} className="qa-dashboard-number">2</div>
                    <div style={dashboardLabel} className="qa-dashboard-label">Medium Severity</div>
                </motion.div>
            </div>

            <div style={cardWrapper}>
                <div style={tagStyle} className="premium-glow-card">
                    Sample Defect Documentation
                </div>

                <motion.div
                    style={bugCard}
                    className="premium-glow-card qa-bug-card"
                    whileHover={{ scale: 1.01, boxShadow: "0 0 35px var(--glow-gold), 0 15px 35px rgba(0,0,0,0.3)", borderColor: "var(--border-gold-hover)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {/* Header Section */}
                    <div style={cardHeader}>
                        <div>
                            <span style={bugId}>Bug ID: QA-001</span>
                            <h2 style={bugTitle} className="qa-bug-title">Login Button Not Responding</h2>
                            <p style={environmentText} className="qa-env-text">Environment: Web Application | Mobile</p>
                            <p style={{ ...environmentText, marginTop: "4px" }} className="qa-env-text">Type: FE</p>
                            <p style={{ ...environmentText, marginTop: "4px" }} className="qa-env-text">Assigned: Frontend Team</p>
                            <p style={{ ...environmentText, marginTop: "4px" }} className="qa-env-text">Reported By: Bala Subra Maniyan</p>
                        </div>
                        <div style={badgesContainer}>
                             <span style={{ ...badgeBase, background: "rgba(239, 68, 68, 0.2)", color: "#fca5a5", border: "1px solid rgba(239, 68, 68, 0.5)" }} className="qa-badge-severity">Severity: High</span>
                             <span style={{ ...badgeBase, background: "rgba(249, 115, 22, 0.2)", color: "#fdba74", border: "1px solid rgba(249, 115, 22, 0.5)" }} className="qa-badge-priority">Priority: High</span>
                             <span style={{ ...badgeBase, background: "var(--tool-badge-bg)", color: "var(--accent-gold-text)", border: "1px solid var(--tool-badge-border)" }} className="qa-badge-status">Status: Open</span>
                        </div>
                    </div>

                    <hr style={divider} />

                    {/* Details Section */}
                    <div style={detailsGrid}>
                        <div style={detailColumn}>
                            <h3 style={sectionTitle}>Description</h3>
                            <p style={paragraphText} className="qa-bug-desc">
                                The login button on the login page does not respond after entering valid credentials. The application does not authenticate the user or redirect to the dashboard, and no error message is displayed.
                            </p>

                            <h3 style={sectionTitle}>Steps to Reproduce</h3>
                            <ol style={orderedList} className="qa-bug-desc">
                                <li style={listItem}>Open login page</li>
                                <li style={listItem}>Enter valid credentials</li>
                                <li style={listItem}>Click login button</li>
                            </ol>
                        </div>

                        <div style={detailColumn}>
                            <div style={resultBox} className="qa-result-card">
                                <h3 style={{ ...sectionTitle, color: "var(--accent-gold-text)" }}>Expected Result</h3>
                                <p style={paragraphText} className="qa-bug-desc">
                                    User should be logged into the dashboard.
                                </p>
                            </div>

                            <div style={resultBox} className="qa-result-card">
                                <h3 style={{ ...sectionTitle, color: "var(--accent-gold-text)" }}>Actual Result</h3>
                                <p style={paragraphText} className="qa-bug-desc">
                                    Login button does not respond.
                                </p>
                            </div>


                            <div style={{ ...resultBox, background: "transparent", border: "none", paddingLeft: 0 }}>
                                 <h3 style={{ ...sectionTitle, color: "var(--accent-gold-text)" }}>Screenshot / Link</h3>
                                <p style={paragraphText}>
                                    <a href="#" onClick={(e) => e.preventDefault()} style={linkStyle} className="qa-bug-link">🔗 Issue_recording_auth_flow.mp4</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div style={sectionDivider} />

            {/* Test Case Showcase Section */}
            <h1 style={{ ...mainTitle, marginTop: "20px" }} className="qa-title">Test Case Showcase</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    className="qa-intro-card"
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
                    className="premium-glow-card qa-execution-summary"
                    whileHover={{ scale: 1.01, boxShadow: "0 0 35px var(--glow-gold), 0 15px 35px rgba(0,0,0,0.3)", borderColor: "var(--border-gold-hover)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div style={executionDetails}>
                        <p style={detailText} className="qa-stat-detail"><strong>Execution Date :</strong> 15 Mar 2026</p>
                        <p style={detailText} className="qa-stat-detail"><strong>Executed By :</strong> Bala Subra Maniyan</p>
                        <p style={detailText} className="qa-stat-detail"><strong>Environment :</strong> Web | Mobile | Android | IOS</p>
                    </div>

                    <div style={executionDetails}>
                        <p style={{ ...detailText, color: "var(--accent-gold-text)" }} className="qa-stat-total"><strong>Total Test Cases :</strong> 3</p>
                        <p style={{ ...detailText, color: "#4ade80" }} className="qa-stat-passed"><strong>Passed :</strong> 3</p>
                        <p style={{ ...detailText, color: "#f87171" }} className="qa-stat-failed"><strong>Failed :</strong> 0</p>
                        <p style={{ ...detailText, color: "#fb923c" }} className="qa-stat-blocked"><strong>Blocked :</strong> 0</p>
                        <p style={detailText} className="qa-stat-detail"><strong>Execution Rate :</strong> 100%</p>
                    </div>
                </motion.div>

                <div style={{ ...tagStyle, marginTop: "40px" }} className="premium-glow-card">Test Case Execution Showcase</div>
                <motion.div
                    style={{ ...tableContainer, width: "100%", boxSizing: "border-box" }}
                    className="premium-glow-card qa-table-container"
                    whileHover={{ scale: 1.005, boxShadow: "0 0 35px var(--glow-gold), 0 15px 35px rgba(0,0,0,0.3)", borderColor: "var(--border-gold-hover)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <table style={{ ...tableStyle, minWidth: "1500px" }}>
                        <thead>
                            <tr>
                                <th style={thStyle} className="qa-th">SL NO</th>
                                <th style={thStyle} className="qa-th">TEST SCENARIO ID</th>
                                <th style={thStyle} className="qa-th">SCREEN NAME</th>
                                <th style={thStyle} className="qa-th">TEST SCENARIO DESCRIPTION</th>
                                <th style={thStyle} className="qa-th">UI / FUNCTIONAL</th>
                                <th style={thStyle} className="qa-th">TEST CASE ID</th>
                                <th style={thStyle} className="qa-th">TEST CASE DESCRIPTION</th>
                                <th style={thStyle} className="qa-th">TEST STEPS</th>
                                <th style={thStyle} className="qa-th">TEST DATA</th>
                                <th style={thStyle} className="qa-th">EXPECTED RESULT</th>
                                <th style={thStyle} className="qa-th">RESULT</th>
                                <th style={thStyle} className="qa-th">COMMENT</th>
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
                                    className="qa-table-row"
                                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)", scale: 1.01 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <td style={tdStyle} className="qa-td">{row.sl}</td>
                                    <td style={tdStyle} className="qa-td">{row.tsId}</td>
                                    <td style={tdStyle} className="qa-td">{row.screen}</td>
                                    <td style={tdStyle} className="qa-td">{row.tsDesc}</td>
                                    <td style={tdStyle} className="qa-td">{row.type}</td>
                                    <td style={tdStyle} className="qa-td">{row.tcId}</td>
                                    <td style={tdStyle} className="qa-td">{row.tcDesc}</td>
                                    <td style={tdStyle} className="qa-td">
                                        {row.steps.map((step, i) => <div key={i}>{step}</div>)}
                                    </td>
                                    <td style={tdStyle} className="qa-td">
                                        {row.data.map((d, i) => <div key={i}>{d}</div>)}
                                    </td>
                                    <td style={tdStyle} className="qa-td">{row.expected}</td>
                                    <td style={{ ...tdStyle, color: row.result === "Pass" ? "#4ade80" : "#fca5a5", fontWeight: "bold" }} className={row.result === "Pass" ? "qa-td qa-status-pass" : row.result === "Fail" ? "qa-td qa-status-fail" : "qa-td qa-status-blocked"}>{row.result}</td>
                                    <td style={tdStyle} className="qa-td">{row.comment}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div style={sectionDivider} />

            {/* Automation & QA Tools Section */}
            <h1 style={{ ...mainTitle, marginTop: "20px" }} className="qa-title">Automation & QA Tools</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    className="qa-intro-card"
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
                        className="premium-glow-card qa-tool-card"
                        whileHover={{ y: -8, boxShadow: "0 0 30px rgba(var(--glow-rgb-val), 0.25), 0 15px 35px rgba(0, 0, 0, 0.3)", borderColor: "var(--border-gold-hover)" }}
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
                        <h3 style={toolName} className="qa-tool-name">{tool.name}</h3>
                        {tool.tag && <span style={toolBadge}>{tool.tag}</span>}
                        <p style={toolDescription} className="qa-tool-desc">{tool.desc}</p>
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
    color: "var(--text-white)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const mainTitle = {
    fontSize: "42px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
    color: "var(--text-white)"
};

const introSection = {
    maxWidth: "800px",
    textAlign: "center",
    marginBottom: "50px"
};

const introText = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "var(--text-gray)",
    background: "var(--bg-card)",
    padding: "25px",
    borderRadius: "15px",
    border: "1px solid var(--border-gold)"
};

const sectionDivider = {
    width: "100%",
    maxWidth: "1200px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(var(--glow-rgb-val), 0.25), transparent)",
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
    background: "var(--bg-card)",
    border: "1px solid var(--border-gold)",
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
    color: "var(--text-muted)",
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
    background: "var(--accent-gold)",
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
    background: "var(--bg-card)",
    border: "1px solid var(--border-gold)",
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
    color: "var(--text-muted)",
    fontFamily: "monospace",
    letterSpacing: "1px"
};

const bugTitle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "5px",
    color: "var(--text-white)"
};

const environmentText = {
    fontSize: "14px",
    color: "var(--text-muted)",
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
    background: "linear-gradient(90deg, transparent, rgba(var(--glow-rgb-val), 0.25), transparent)",
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
    color: "var(--text-white)",
    marginBottom: "10px",
    borderBottom: "1px solid var(--border-gold)",
    paddingBottom: "8px"
};

const paragraphText = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "var(--text-gray)"
};

const orderedList = {
    margin: 0,
    paddingLeft: "25px",
    color: "var(--text-gray)"
};

const listItem = {
    fontSize: "16px",
    marginBottom: "10px",
    lineHeight: "1.5"
};

const resultBox = {
    background: "var(--result-box-bg)",
    padding: "15px 20px",
    borderRadius: "12px",
    border: "1px solid var(--border-gold)"
};

const linkStyle = {
    color: "var(--accent-gold-text)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
};

const tableContainer = {
    background: "var(--bg-card)",
    border: "1px solid var(--border-gold)",
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
    borderBottom: "1px solid var(--border-gold)",
    color: "var(--text-muted)",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "uppercase"
};

const tdRowStyle = {
    borderBottom: "1px solid var(--border-gold)",
    cursor: "default"
};

const tdStyle = {
    padding: "15px",
    color: "var(--text-gray)",
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
    background: "var(--bg-card)",
    border: "1px solid var(--border-gold)",
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
    color: "var(--text-gray)",
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
    background: "var(--bg-card)",
    border: "1px solid var(--border-gold)",
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
    background: "rgba(var(--glow-rgb-val), 0.04)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    border: "1px solid var(--border-gold)",
    overflow: "hidden"
};

const toolName = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "var(--text-white)",
    marginBottom: "8px",
    textAlign: "center",
    width: "100%"
};

const toolBadge = {
    display: "inline-block",
    background: "var(--tool-badge-bg)",
    color: "var(--accent-gold-text)",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    border: "1px solid var(--tool-badge-border)",
    marginBottom: "15px"
};

const toolDescription = {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "var(--text-gray)",
    margin: 0,
    textAlign: "center"
};
