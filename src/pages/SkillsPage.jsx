import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";
import TechStack from "../components/TechStack";

const SkillsPage = () => {
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

  const [params, setParams] = useState("skills");
  const [active, setActive] = useState("techstack");

  const handleParams = (newParams) => {
    setParams(newParams);
  };

  return (
    <>
    <Helmet>
      <title>Skills - Angga Adytya</title>
      <meta name="description" content="Skills Angga Adytya" />
      <meta name="keywords" content="angga, adytya, portofolio, react, vite, tailwind, vercel" />
      <meta name="author" content="Angga Adytya" />
    </Helmet>
      <div className="container pt-4 md:py-20 mx-auto">
        <motion.ul
          variants={skillsVariants}
          whileInView={skillsVariants.whileInView}
          className="flex justify-center items-center gap-10 md:gap-20 md:pb-10"
        >
          <li className="text-center font-bold md:text-3xl py-4 link link-underline link-underline-black">
            {" "}
            <Link
              to="techstack"
              onClick={() =>
                handleParams("techstack") || setActive("techstack")
              }
              className={`${
                active === "techstack" ? "link-underline-active" : ""
              } dark:text-white `}
            >
              TECH STACK
            </Link>
          </li>
          <li className="text-center font-bold md:text-3xl py-4 link link-underline link-underline-black">
            {" "}
            <Link
              to="certificate"
              onClick={() =>
                handleParams("certificate") || setActive("certificate")
              }
              className={`${
                active === "certificate" ? "link-underline-active" : ""
              } dark:text-white`}
            >
              CERTIFICATE
            </Link>
          </li>
        </motion.ul>
        {params == "skills" ? <TechStack /> : <Outlet />}
      </div>
    </>
  );
};

export default SkillsPage;
