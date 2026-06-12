import { motion } from "framer-motion";
import { FaClipboardCheck, FaShieldAlt, FaRocket } from "react-icons/fa";

export default function Approach() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <div className="approach-container">
      {/* Background Dot Decoration */}
      <div className="approach-bg-dots"></div>

      <h1 className="approach-title">
        <span className="first-word">My</span> <span className="gradient-text">QA Approach</span>
      </h1>

      <motion.div 
        className="approach-cards-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Card 01 */}
        <motion.div 
          className="approach-card"
          variants={cardVariants}
        >
          <span className="approach-step-number">01</span>
          <div className="approach-icon-container">
            <FaClipboardCheck className="approach-icon" />
          </div>
          <h3 className="approach-card-title">Requirement Analysis & Planning</h3>
          <p className="approach-card-desc">
            Collaborate with stakeholders to understand business
            requirements, functional flows, and edge cases.
            Design detailed test scenarios, test data, and test plans
            aligned with release goals.
          </p>
        </motion.div>

        {/* Connector 1 */}
        <motion.div 
          className="approach-connector"
          variants={cardVariants}
        >
          <div className="approach-line"></div>
          <div className="approach-arrow-head"></div>
        </motion.div>

        {/* Card 02 */}
        <motion.div 
          className="approach-card"
          variants={cardVariants}
        >
          <span className="approach-step-number">02</span>
          <div className="approach-icon-container">
            <FaShieldAlt className="approach-icon" />
          </div>
          <h3 className="approach-card-title">Test Execution & Validation</h3>
          <p className="approach-card-desc">
            Execute functional, regression, integration,
            smoke, and API testing to validate system stability
            and reliability. Automate critical workflows
            using Selenium WebDriver and TestNG.
          </p>
        </motion.div>

        {/* Connector 2 */}
        <motion.div 
          className="approach-connector"
          variants={cardVariants}
        >
          <div className="approach-line"></div>
          <div className="approach-arrow-head"></div>
        </motion.div>

        {/* Card 03 */}
        <motion.div 
          className="approach-card"
          variants={cardVariants}
        >
          <span className="approach-step-number">03</span>
          <div className="approach-icon-container">
            <FaRocket className="approach-icon" />
          </div>
          <h3 className="approach-card-title">Release & Continuous Improvement</h3>
          <p className="approach-card-desc">
            Support SIT & UAT phases, track defects, and ensure
            production stability. Improve automation coverage,
            optimize QA processes, and enhance release confidence
            through continuous feedback.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}