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
  };

  return (
    <div className="container py-20 mx-auto">
      <motion.h1
        variants={skillsVariants}
        whileInView={skillsVariants.whileInView}
        className="text-center font-bold text-4xl py-8"
      >
        TECH STACK
      </motion.h1>
      <motion.div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 px-2">
        {[
          imagesData.node,
          imagesData.react,
          imagesData.mu5,
          imagesData.html,
          imagesData.css,
          imagesData.figma,
          imagesData.git,
          imagesData.python,
          imagesData.flutter,
          imagesData.graphql,
          imagesData.javascript,
          imagesData.sass,
        ].map((circle, index) => (
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            key={`circle-${index}`}
            className="w-[100px] h-[100px] rounded-full bg-white shadow-2xl mx-auto"
          >
            <div className="flex my-4 justify-center items-center">
              <img
                src={circle}
                alt="profile_bg"
                className="flex w-[70%] h-[70%]"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPage;
