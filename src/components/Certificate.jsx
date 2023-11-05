import { certifData } from "../utils/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";

const Certificate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedImage(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-4 mb-10 md:mb-0">
      {certifData.map((certif, index) => {
        return (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            key={index}
            className=" rounded-2xl pb-4 shadow-2xl border-2 border-gray-500"
          >
            <div className="relative">
              <img
                src={certif.img}
                alt={certif.title}
                onClick={() => handleOpenModal(index)}
                className="rounded-t-2xl h-[10rem] w-full object-cover md:h-[14rem] cursor-pointer"
              />
              <div
                className="overlay absolute inset-0 bg-black/30 rounded-t-lg cursor-pointer transition-all duration-75"
                style={{ opacity: selectedImage === index ? 1 : 0 }}
                onClick={() => handleOpenModal(index)}
                onMouseEnter={() => setSelectedImage(index)}
              >
                <h1 className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
                  <AiOutlineLink />
                </h1>
              </div>
            </div>
            <div className="ps-2 py-2">
              <h1 className="text-sm font-bold tracking-wide pb-2 dark:text-white">
                {certif.title}
              </h1>
              <p className="text-xs tracking-wide dark:text-white">
                {certif.body}
              </p>
            </div>
          </motion.div>
        );
      })}
      {modalOpen && (
        <div
          className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white py-2 px-2 rounded-lg max-w-[95%] max-h-[95%] md:max-w-[70%] md:max-h-full z-50">
            <img
              src={certifData[selectedImage].img}
              alt=""
              className="w-full h-full object-cover mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
