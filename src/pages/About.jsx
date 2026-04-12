import "./About.css"
import photo from "../assets/profile.jpeg"

const About = () => {
  return (
    <section className="about-page">
      <h2 className="section-title">&gt; ABOUT_ME</h2>

      <div className="about-container">

        
        <div className="about-left">
          <div className="photo-frame">
            <img src={photo} alt="Ashish John Paul" />
            <div className="photo-decoration">
              <span>Developer</span>
            </div>
          </div>
        </div>

        
        <div className="about-right">

          <div className="rpg-stats">
            <div className="stat-row">
              <span className="stat-label">NAME</span>
              <span className="stat-value">Ashish John Paul V</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">TITLE</span>
              <span className="stat-value">Frontend Developer  <span className="gold">Junior</span></span>
            </div>
            <div className="stat-row">
              <span className="stat-label">LOCATION</span>
              <span className="stat-value">Tamilnadu, India 🇮🇳</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">SKILLS</span>
              <span className="stat-value"> React , JavaScript , CSS , HTML , Bootstrap , Git/Github</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">STATUS</span>
              <span className="stat-value status-open">● Open to Work</span>
            </div>
          </div>

          
          <div className="about-text">
            <p>
              Hey! I'm Ashish , a self-taught frontend developer from Chennai .
              I have a BSc in Electronics but found my passion in building things people can actually
              see and use on the web.
            </p>
            <br />
            <p>
              I completed Angela Yu's Full-Stack Bootcamp on Udemy 
              and have hands-on experience building dynamic, 
              responsive web applications using HTML, CSS, 
              JavaScript and React , all deployed and live on Vercel.
            </p>
            <br />
            <p>
              When I'm not coding, I'm watching movies, drawing or 
              playing games , which honestly influences how 
              I design. I love clean UI, aesthetics and 
              projects that feel like real products.
            </p>
            <br />
            <p>
              Currently looking for a frontend role or internship 
              in Chennai where I can contribute, learn fast and grow.
            </p>
          </div>

          
          <div className="about-buttons">
            <a
              href="https://github.com/ashdevjp"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/Ashishjp24/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
            <a
              href="./Ashish-John-Paul-resume.pdf"
              download
              className="btn btn-primary"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About