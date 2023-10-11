import { motion } from "framer-motion";
import { imagesData } from "../utils/images";

const SkillsPage = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const skillsVariants = {
    whileInView: {
      y: [-100, 0],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="container py-20 mx-auto">
      <motion.h1
        variants={skillsVariants}
        whileInView={skillsVariants.whileInView}
        className="text-center font-bold text-4xl py-8"
      >
        TECH STACK
      </motion.h1>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="skills__header-circles container mx-auto"
      >
        {[
          imagesData.node,
          imagesData.react,
          imagesData.mu5,
          imagesData.html,
          imagesData.css,
          imagesData.figma,
        ].map((circle, index) => (
          <div
            className="skills__flex container mx-auto"
            key={`circle-${index}`}
          >
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPage;
