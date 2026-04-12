import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <p className="title-link">&gt; ASHISH<span className="cursor">_</span></p>
        </Link>
      </div>

      <div className="navbar-right">

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar