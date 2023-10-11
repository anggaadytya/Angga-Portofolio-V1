import NavigasiBar from "./components/NavigasiBar"
import HomePage from "./pages/HomePage"
import SkillsPage from "./pages/SkillsPage"
import ProjectPage from "./pages/ProjectPage"
import AboutPage from "./pages/AboutPage"
import "./App.scss"

import { createBrowserRouter, RouterProvider,  } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/skills",
    element: <SkillsPage />,
  },
  {
    path: "/project",
    element: <ProjectPage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  }
])




function App() {

  return (
    <div className="relative">
      <header className="py-4 px-2 md:px-12 md:py-6 fixed left-[50%] translate-x-[-50%] w-full z-50 ">
        <NavigasiBar/>
      </header>
      <main className="pt-10">
        <RouterProvider router={router} />
      </main>
    </div>
  )
}

export default App
