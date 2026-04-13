import "./App.css"
import { useState,useEffect } from "react"
import { PacmanLoader } from "react-spinners"
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
 const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2700)
    return () => clearTimeout(timer)
  }, [])

  // show loader while loading is true
  if (loading) {
    return (
      <div className="loader-screen">
        <PacmanLoader color="#f7c948" size={20} />
        <p className="loader-text">LOADING...</p>
      </div>
    )
  }
    else{
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
}

export default App