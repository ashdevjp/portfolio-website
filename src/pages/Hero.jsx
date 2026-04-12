import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="name">
          <h1>Hi, I'm</h1>
          <h1 className="name-highlight nameTypewriter">
            Ashish John Paul
          </h1>
        </div>
        <div className="title">
          <h2 className="typewriter">Frontend Developer</h2>
        </div>
      </div>

      <div className="hero-buttons">
        <Link to="/about" className="btn btn-outline">About</Link>
        <Link to="/skills" className="btn btn-outline">Skills</Link>
        <Link to="/projects" className="btn btn-primary">Projects</Link>
        <Link to="/contact" className="btn btn-outline">Contact</Link>
      </div>
    </div>
  )
}

export default Hero