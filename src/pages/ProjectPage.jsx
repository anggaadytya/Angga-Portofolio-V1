import { projectData } from "../utils/data";
import { motion } from "framer-motion";

const ProjectPage = () => {
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
    <>
 
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10 md:mb-0 py-10 md:py-28 mx-1 md:mx-10 lg:mx-20">
      {projectData.map((project, index) => {
        return (
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            key={index}
            className=" rounded-2xl pb-4 shadow-2xl border-2 border-gray-500 relative mx-4 md:mx-0 h-[22em] md:h-[27em] lg:h-[28em]"
          >
            <div className="absolute top-0 right-0 text-white bg-cyan-600 px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs tracking-widest">
              <p>{project.label}</p>
            </div>
            <img
              src={project.img}
              alt=""
              width={1000}
              height={1000}
              className="rounded-t-2xl h-[200px] w-full md:h-[300px] object-cover"
            />
            <div className="ps-2 py-2">
              <h1 className="text-sm font-bold tracking-wide pb-2">
                {project.title}
              </h1>
              <p className="text-xs tracking-wide">{project.subtitle}</p>
              <div className="absolute bottom-5 gap-4 flex">
                {project.tech.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    alt=""
                    width={30}
                    height={30}
                    className=""
                  />
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
      <h1 className="text-center font-semibold tracking-widest text-2xl ">MASIH PROSES</h1>
    </>
  );
};

export default ProjectPage;
