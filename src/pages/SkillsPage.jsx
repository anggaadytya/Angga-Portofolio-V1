import { motion } from "framer-motion";
import { imagesData } from "../utils/images";
import { Tooltip } from "@material-tailwind/react";

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
        {imagesData.map((circle, index) => (
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            key={`circle-${index}`}
            className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-white shadow-2xl mx-auto cursor-pointer"
          >
            <div className="flex my-3 md:my-4 justify-center items-center">
              <Tooltip
                content={circle.name}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 45 },
                }}
                className="bg-white shadow-xl text-black tracking-widest text-md font-normal py-2 px-3"
                placement="top"
              >
                <img
                  src={circle.img}
                  alt="profile_bg"
                  className="flex w-[70%] h-[70%]"
                />
              </Tooltip>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPage;
