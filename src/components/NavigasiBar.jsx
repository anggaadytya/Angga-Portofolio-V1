import { useEffect, useState, useContext } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

const NavigasiBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal link link-underline link-underline-black py-2"
        onClick={() => setOpenNav(false)}
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal link link-underline link-underline-black py-2 "
        onClick={() => setOpenNav(false)}
      >
        <a href="/skills" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal link link-underline link-underline-black py-2"
        onClick={() => setOpenNav(false)}
      >
        <a href="/project" className="flex items-center">
          Project
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal link link-underline link-underline-black py-2"
        onClick={() => setOpenNav(false)}
      >
        <a href="/about" className="flex items-center link-underline-active">
          Abouts
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
          Angga Adytya
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          {theme == "light" ? (
            <HiMoon
              className="text-[25px] bg-slate-200 text-white rounded-full p-1 cursor-pointer"
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            />
          ) : (
            <HiSun
              className="text-[25px] bg-slate-200 text-white rounded-full p-1 cursor-pointer"
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
          )}
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2 flex justify-center items-center">
            {theme == "light" ? (
              <HiMoon
                className="text-[25px] bg-slate-200 text-white rounded-full p-1 cursor-pointer"
                onClick={() => {
                  setTheme("dark");
                  localStorage.setItem("theme", "dark");
                }}
              />
            ) : (
              <HiSun
                className="text-[25px] bg-slate-200 text-white rounded-full p-1 cursor-pointer"
                onClick={() => {
                  setTheme("light");
                  localStorage.setItem("theme", "light");
                }}
              />
            )}
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavigasiBar;
