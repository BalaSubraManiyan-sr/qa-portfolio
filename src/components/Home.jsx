import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={heroContainer}>
      <div className="hero-glow-orb"></div>

      <div style={content}>
        <p style={smallTag}>QUALITY ASSURANCE ENGINEER</p>

        <h1 style={heading}>
          Delivering
          <span style={gradientText}> Reliable & Bug-Free </span>
          Software Experiences
        </h1>

        <p style={description}>
          Hi, I’m <strong>Bala Subra Maniyan S R</strong>, a Quality Assurance Engineer focused on delivering reliable, scalable, and defect-free software through automation and strategic testing.
        </p>

        <button
          className="home-explore-btn"
          onClick={() => navigate("/projects")}
          style={{ opacity: 0, animation: "fadeUp 1s ease forwards", animationDelay: "0.8s" }}
        >
          Explore My Work <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}

const heroContainer = {
  height: "100vh",
  background: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
  color: "white",
  overflow: "hidden"
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  opacity: 0.3
};

const content = {
  maxWidth: "900px",
  zIndex: 1,
  padding: "20px"
};

const smallTag = {
  fontSize: "14px",
  letterSpacing: "2px",
  marginBottom: "20px",
  opacity: 0,
  color: "#D4AF37",
  fontWeight: "600",
  animation: "fadeUp 1s ease forwards",
  animationDelay: "0.2s"
};

const heading = {
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  fontWeight: "bold",
  lineHeight: "1.2",
  opacity: 0,
  animation: "fadeUp 1s ease forwards",
  animationDelay: "0.4s"
};

const gradientText = {
  background: "linear-gradient(90deg, #F3E5AB, #D4AF37, #AA7C11, #F3E5AB)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
  animation: "gradientShift 4s linear infinite, float 4s ease-in-out infinite"
};

const description = {
  marginTop: "30px",
  fontSize: "18px",
  lineHeight: "1.7",
  opacity: 0,
  animation: "fadeUp 1s ease forwards",
  animationDelay: "0.6s"
};

