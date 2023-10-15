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
                <h1 className="text-sm font-bold tracking-wide pb-2">
                  {project.title}
                </h1>
                <p className="text-xs tracking-wide">{project.subtitle}</p>
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
        <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
          <div className="bg-white py-[30px] px-[15px] rounded-lg max-w-[80%] max-h-[80%] relative">
            <img
              src={projectData[selectedImage].img}
              alt=""
              className="max-w-full max-h-full object-cover"
            />
            <h1>{projectData[selectedImage].title}</h1>
            <p>{projectData[selectedImage].subtitle}</p>
            <button className="close-button absolute top-[2px] right-[2px] cursor-pointer text-sm font-bold ring-2 ring-black rounded-md px-1" onClick={handleCloseModal}>
              X
            </button>
          </div>
        </div>
      )}
    
    </>
  );
};

export default ProjectPage;
