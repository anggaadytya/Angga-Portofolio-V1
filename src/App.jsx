import NavigasiBar from "./components/NavigasiBar";
import TechStack from "./components/TechStack";
import Certificate from "./components/Certificate";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import { ThemeContext } from "./context/ThemeContext";
import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/skills",
    element: <SkillsPage />,
    children: [
      {
        path: "techstack",
        element: <TechStack />,
      },
      {
        path: "certificate",
        element: <Certificate />,
      },
    ],
  },
  {
    path: "/project",
    element: <ProjectPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App() {

  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`${theme} ${theme == "dark" ? "bg-[#121212]": null} relative min-h-[100vh]`}>
      <header className="py-2 px-2 md:px-12 md:py-5 fixed left-[50%] translate-x-[-50%] w-full z-40 ">
        <NavigasiBar />
      </header>
      <main className="pt-10">
        <RouterProvider router={router} />
      </main>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
