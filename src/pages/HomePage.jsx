import { motion } from "framer-motion";
import { imagesHome } from "../utils/images";
import { HiOutlineDownload } from "react-icons/hi";
import CV from "../assets/resume/CV-ANGGA-ADYTYA.pdf";

const HomePage = () => {
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

  return (
    <div className="app__header flex justify-center items-center ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge md:py-20">
          <div className="badge-cmp app__flex ">
            <span className="animate-waving-hand">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Angga Adytya</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex dark:shadow-xl">
            <p className="p-text">FullStack Web Developer</p>
            <p className="p-text">React JS</p>
          </div>

          <button className="tag-cmp app__flex transition-all ">
            <a
              href={CV}
              className="p-text tracking-wide flex items-center gap-2"
              download={true}
            >
              RESUME <HiOutlineDownload className="animate-bounce h-5 w-5 " />
            </a>
          </button>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img "
      >
        <img
          src={imagesHome.imagesSide}
          alt="profile_bg"
          width={1000}
          height={1000}
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={imagesHome.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles "
      >
        {[imagesHome.node, imagesHome.react, imagesHome.tailwind].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default HomePage;
