import { useState } from "react";
import { createPortal } from "react-dom";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [clickOrigin, setClickOrigin] = useState({ rect: null, type: 'pro' });

  const handleProjectClick = (e, project, type) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickOrigin({ rect, type });
    setSelectedProject(project);
  };

  const projects = [
    {
      title: "APSS – Aircraft Protection Security Services",
      domain: "Aviation Security Management",
      image: "/apss.jpg",
      points: [
        "Executed multiple levels of testing including Functional, Smoke, Sanity, Usability, and Regression testing to maintain high-quality release standards.",
        "Collaborated with clients during System Integration Testing (SIT) and User Acceptance Testing (UAT) phases, ensuring business workflows were validated and all critical issues were resolved before production release.",
        "Managed the end-to-end defect lifecycle in Azure DevOps, improving traceability, prioritization, and communication between cross-functional teams."
      ]
    },
    {
      title: "MAGP – Malaysia Airports Group Procurement",
      domain: "Centralized Procurement System",
      image: "/clm.jpg",
      points: [
        "Delivered end-to-end functional and regression testing for web and mobile applications, enhancing release reliability and reducing production defects.",
        "Conducted multi-level testing (Smoke, Sanity, Usability, and Regression) to maintain application quality across iterative release cycles.",
        "Implemented automation using Selenium WebDriver and TestNG, optimizing regression cycles and improving overall testing efficiency.",
        "Actively participated in System Integration Testing (SIT) and User Acceptance Testing (UAT) with client coordination, ensuring business requirements were thoroughly validated before go-live.",
        "Maintained structured defect tracking and reporting using Azure DevOps and Jira, improving transparency and cross-team collaboration."
      ]
    },
    {
      title: "SPA – Single Paper Approval",
      domain: "Digital Workflow Management",
      image: "/magp.jpg",
      points: [
        "Developed and executed comprehensive manual test cases for workflow-based applications, ensuring seamless approval process validation.",
        "Conducted structured multi-level testing across multiple releases, improving system reliability and reducing defect leakage.",
        "Automated regression scenarios using Selenium WebDriver and TestNG, accelerating testing cycles and minimizing repetitive manual effort.",
        "Actively coordinated with clients during System Integration Testing (SIT) and User Acceptance Testing (UAT), validating end-to-end business processes and ensuring production readiness through timely resolution of critical defects.",
        "Maintained accurate defect documentation and tracking in Azure DevOps and Jira, enhancing transparency and cross-functional collaboration."
      ]
    },
    {
      title: "CLM – Contract Lifecycle Management",
      domain: "Contract & Digital Signing Platform",
      image: "/spa.jpg",
      points: [
        "Designed and executed detailed manual test cases for contract and approval workflows, ensuring seamless validation of complex business processes.",
        "Performed comprehensive testing across iterative releases, improving application stability and reducing production defects.",
        "Partnered with stakeholders during System Integration Testing (SIT) and User Acceptance Testing (UAT) cycles to validate business objectives and ensure successful go-live.",
        "Managed defect reporting and tracking in Azure DevOps, enabling efficient collaboration and faster issue resolution."
      ]
    },
    {
      title: "ECMS – Enterprise Content Management System",
      domain: "Digital Content Management",
      image: "/ecms.jpg",
      points: [
        "Developed and executed comprehensive manual test cases for workflow-based applications, ensuring seamless approval process validation.",
        "Delivered end-to-end functional validation through multi-level testing strategies, maintaining consistent application quality across releases.",
        "Collaborated closely with clients during System Integration Testing (SIT) and User Acceptance Testing (UAT) phases to validate business workflows and ensure production readiness.",
        "Maintained structured defect tracking in Azure DevOps and Jira, enhancing transparency and cross-team communication."
      ]
    },
    {
      title: "Eraman – Airport Retail E-Commerce Platform",
      domain: "Airport Retail & E-Commerce",
      image: "/eraman.jpg",
      points: [
        "Conducted multi-level testing to maintain application reliability across iterative release cycles.",
        "Developed structured test cases aligned with business and functional requirements.",
        "Partnered with clients during SIT and UAT phases to validate workflows and ensure a smooth go-live.",
        "Maintained transparent defect tracking and reporting in Azure DevOps to support cross-team collaboration."
      ]
    }
  ];

  const internProjects = [
    {
      title: "SaaSPe – AI SaaS Management Platform",
      domain: "AI-driven SaaS management platform for optimizing business operations",
      image: "/saaspe.jpg",
      imgStyle: { objectPosition: "center top", transform: "scale(1.35) translateY(-9%)" },
      points: [
        "Contributed to requirement analysis and structured test planning, ensuring complete coverage through Regression and Sanity testing across iterative releases.",
        "Developed and maintained comprehensive test suites, achieving improved defect detection and enhanced application reliability.",
        "Implemented automation using TestNG framework, accelerating regression cycles and minimizing repetitive manual testing efforts.",
        "Validated REST APIs and backend data consistency through Postman and SQL queries, strengthening system integrity and reliability.",
        "Managed the end-to-end defect lifecycle in Taiga, facilitating transparent communication and faster issue resolution."
      ]
    },
    {
      title: "TMS – Talent Management System",
      domain: "Employee Lifecycle Optimization System",
      image: "/tms.jpg",
      points: [
        "Contributed to requirement analysis and comprehensive test strategy planning to enhance release quality and coverage.",
        "Performed multi-level testing across releases, improving application stability and reducing production risks.",
        "Designed detailed test cases to validate HR workflows including onboarding, offboarding, and project allocation processes.",
        "Managed defect lifecycle in Taiga, ensuring clear communication and faster resolution through collaboration with stakeholders."
      ]
    }
  ];

  return (
    <div style={pageContainer}>
      <h1 style={mainTitle}>Professional Projects</h1>

      {/* Company Text */}
      <div style={companySection}>
        <p style={companyText}>
          All enterprise projects delivered under
          <strong> Malaysia Airports Holdings Berhad (MAHB)</strong>
        </p>
        <p style={{ ...companyText, marginTop: "15px", color: "var(--text-description)", lineHeight: "1.6", maxWidth: "100%" }}>
          Maintained 100% client satisfaction across the MAHB ecosystem by facilitating transparent communication and conducting collaborative UAT sessions directly with stakeholders to guarantee seamless deployment.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            style={card}
            className="reveal"
            onClick={(e) => handleProjectClick(e, project, 'pro')}
          >
            {project.image && (
              <div className="project-image-container">
                <div className="project-image-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.02)", ...(project.imgStyle || {}) }}
                  />
                </div>
              </div>
            )}
            <div style={cardContent}>
              <h2 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-white)", lineHeight: "1.3", margin: "0" }}>{project.title}</h2>
              <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-description)", margin: "0" }}>{project.domain}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Internship Section */}
      <h2 style={{ ...mainTitle, marginTop: "60px", marginBottom: "10px" }}>Internship Projects</h2>

      <div className="projects-grid intern-grid" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px" }}>
        {internProjects.map((project, index) => (
          <div
            key={index}
            style={card}
            className="reveal"
            onClick={(e) => handleProjectClick(e, project, 'intern')}
          >
            {project.image && (
              <div className="project-image-container">
                <div className="project-image-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.02)", ...(project.imgStyle || {}) }}
                  />
                </div>
              </div>
            )}
            <div style={cardContent}>
              <h2 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-white)", lineHeight: "1.3", margin: "0" }}>{project.title}</h2>
              <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-description)", margin: "0" }}>{project.domain}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal via Portal to escape stacking contexts */}
      {selectedProject && createPortal(
        <div style={modalOverlay} onClick={() => setSelectedProject(null)}>
          <div
            style={{
              ...modalContent,
              margin: "auto",
              zIndex: 1001,
              animation: "modalZoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards"
            }}
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button style={modalCloseBtn} className="project-modal-close-btn" onClick={() => setSelectedProject(null)}>×</button>
            {selectedProject.image && (
              <div style={modalImageContainer}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.02)", ...(selectedProject.imgStyle || {}) }}
                />
              </div>
            )}
            <h2 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "700", lineHeight: "1.3", color: "var(--text-white)" }}>{selectedProject.title}</h2>
            <p style={{ fontWeight: "600", marginBottom: "25px", color: "var(--accent-gold-text)" }}>{selectedProject.domain}</p>
            <ul style={{ ...bulletList, marginTop: "0" }} className="project-modal-list">
              {selectedProject.points.map((point, i) => (
                <li key={i} style={{ marginBottom: "15px", lineHeight: "1.9", color: "var(--text-description)", fontWeight: "500" }}>{point}</li>
              ))}
            </ul>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  paddingTop: "120px",
  padding: "120px 40px 40px 40px",
  background: "transparent",
  color: "var(--text-white)",
  minHeight: "100vh"
};

const modalKeyframes = `
  @keyframes modalZoomIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .project-image-container {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 14px;
    perspective: 1000px; /* Essential for 3D effect */
  }

  .project-image-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease;
    transform-style: preserve-3d;
  }

  .reveal:hover .project-image-inner {
    transform: scale(1.08) rotateX(8deg) translateY(-5px);
    filter: brightness(1.1) drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.4));
  }
  .reveal {
    transition: all 0.3s ease;
    border: 1px solid var(--border-gold);
  }

  .reveal:hover {
    transform: translateY(-8px);
    border-color: var(--border-gold-hover) !important;
    box-shadow: var(--card-shadow-hover) !important;
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${modalKeyframes}</style>`);

const mainTitle = {
  fontSize: "40px",
  marginBottom: "10px",
  textAlign: "center",
  color: "var(--text-white)",
  fontWeight: "bold"
};

const companySection = {
  marginBottom: "40px",
  textAlign: "center"
};

const companyText = {
  fontSize: "18px"
};

const card = {
  background: "linear-gradient(180deg, #151515 0%, #0B0B0B 100%)",
  border: "1px solid var(--border-gold)",
  padding: "24px",
  borderRadius: "20px",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  height: "auto",
  minHeight: "unset",
  width: "100%",
  maxWidth: "600px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.35)"
};

const cardContent = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "0"
};

const bulletList = {
  marginTop: "20px",
  paddingLeft: "20px",
  color: "var(--text-gray)",
  animation: "fadeIn 0.3s ease-in-out"
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "var(--modal-overlay-bg)",
  backdropFilter: "blur(10px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000,
  padding: "clamp(10px, 3vw, 20px)"
};

const modalContent = {
  background: "var(--bg-card)",
  padding: "clamp(20px, 5vw, 40px)",
  borderRadius: "20px",
  maxWidth: "800px",
  width: "95%",
  position: "relative",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 25px var(--glow-gold)",
  border: "1px solid var(--border-gold)",
  boxSizing: "border-box",
  maxHeight: "90vh",
  overflowY: "auto"
};

const modalCloseBtn = {
  position: "absolute",
  top: "15px",
  right: "15px",
  background: "var(--bg-dark)",
  border: "1px solid var(--accent-gold-text)",
  color: "var(--accent-gold-text)",
  fontSize: "24px",
  cursor: "pointer",
  lineHeight: "36px",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  zIndex: 10,
  backdropFilter: "blur(4px)",
  transition: "all 0.2s"
};

const modalImageContainer = {
  width: "100%",
  height: "250px",
  borderRadius: "10px",
  overflow: "hidden",
  marginBottom: "25px",
  position: "relative"
};
