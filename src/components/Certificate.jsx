import { certifData } from "../utils/data";
import { motion } from "framer-motion";

const Certificate = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-5 mb-10 md:mb-0">
      {certifData.map((certif, index) => {
        return (
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            key={index}
            className=" rounded-2xl pb-4 shadow-2xl border-2 border-gray-500 "
          >
            <img
              src={certif.img}
              alt=""
              width={500}
              height={500}
              className="rounded-t-2xl"
            />
            <div className="ps-2 py-2">
              <h1 className="text-sm font-bold tracking-wide pb-2">
                {certif.title}
              </h1>
              <p className="text-xs tracking-wide">{certif.body}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Certificate;
