import { motion } from "framer-motion";
import { imagesData } from "../utils/images";
import { Tooltip } from "@material-tailwind/react";

const TechStack = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    whileHover: {
      scale: [1, 1.2],
    },
  };

  return (
    <motion.div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-2 md:gap-[5rem] mx-auto">
      {imagesData.map((circle, index) => (
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          // whileHover={scaleVariants.whileHover}
          key={`circle-${index}`}
          className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full bg-white shadow-2xl cursor-pointer mx-auto"
        >
          <div className="flex my-3 md:my-4 justify-center items-center relative">
            <Tooltip
              content={circle.name}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 45 },
                DelayNode: 0.5,
              }}
              className="bg-white shadow-xl text-black tracking-widest text-md font-normal absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              placement="top"
            >
              <img
                src={circle.img}
                alt="profile_bg"
                className="flex w-[60%] h-[60%]"
              />
            </Tooltip>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
