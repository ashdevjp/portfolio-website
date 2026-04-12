import "./App.css"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import bg from "./assets/omori-bg.JPG"


const App = () => {
  return (
    <BrowserRouter className="app" >
      <div className="app-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App