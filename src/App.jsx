import NavigasiBar from "./components/NavigasiBar"
import HomePage from "./pages/HomePage"
import SkillsPage from "./pages/SkillsPage"
import "./App.scss"


function App() {

  return (
    <div className="relative">
      <header className="py-4 px-2 md:px-12 md:py-6 fixed left-[50%] translate-x-[-50%] w-full z-50 ">
        <NavigasiBar/>
      </header>
      <main className="pt-10">
        <HomePage/>
        <SkillsPage/>
      </main>
    </div>
  )
}

export default App
