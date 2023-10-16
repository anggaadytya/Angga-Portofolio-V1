import { projectData } from "../utils/data";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
      scale: [1, 1.1],
      transition: {},
    },
  };

  const handleOpenModal = (index) => {
    setSelectedImage(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10 md:mb-0 py-10 md:py-28 mx-1 md:mx-10 lg:mx-40">
        {projectData.map((project, index) => {
          return (
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              key={index}
              className=" rounded-2xl pb-4 shadow-2xl border-2 border-gray-500 relative mx-4 md:mx-0 h-[22em] md:h-[20em] lg:h-[19em] cursor-pointer"
            >
              <div className="absolute top-0 right-0 text-white bg-black px-4 py-1 rounded-bl-lg rounded-tr-xl text-xs tracking-widest">
                <p>{project.label}</p>
              </div>
              <img
                src={project.img}
                alt={project.title}
                onClick={() => handleOpenModal(index)}
                width={1000}
                height={1000}
                className="rounded-t-2xl h-[11em] w-full md:h-[12em] lg:h-[11em] object-cover"
              />
              <div className="ps-2 py-2">
                <h1 className="text-sm font-bold tracking-wide pb-2 dark:text-white">
                  {project.title}
                </h1>
                <p className="text-xs tracking-wide dark:text-white pr-1">
                  {project.subtitle}
                </p>
                <div className="absolute bottom-5 gap-4 md:gap-3 flex">
                  {project.tech.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt=""
                      width={30}
                      height={30}
                      className="w-8 h-8 md:h-6 md:w-6 lg: object-contain"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {modalOpen && (
        <div
          className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50"
          onClick={handleCloseModal}
        >
          <div className="bg-white py-2 px-2 md:py-[15px] md:px-[15px] rounded-lg max-w-[90%] h-[60%] md:max-w-[60%] md:h-[70%] relative">
            <img
              src={projectData[selectedImage].img}
              alt=""
              className="max-w-full max-h-full md:h-[70%] md:w-full object-contain rounded-t-lg"
            />
            <h1 className="pt-2 font-bold tracking-wider">
              {projectData[selectedImage].title}
            </h1>
            <p className="p-text">
              {projectData[selectedImage].subtitle}
            </p>
            <div className="absolute bottom-3 left-2 flex gap-5">
              <button className="bg-black text-white px-3 py-1 rounded-lg" onClick={() => window.open(projectData[selectedImage].demo)}>
                Demo
                </button>
              <button className="bg-black text-white px-3 py-1 rounded-lg" onClick={() => window.open(projectData[selectedImage].code)}>Github</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectPage;
