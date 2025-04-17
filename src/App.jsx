import Skills from "./components/Skills"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  )
}

export default App
