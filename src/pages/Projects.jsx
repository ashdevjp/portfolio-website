import "./Projects.css"
import weatherImg from "../assets/weather-app.png"
import movieImg from "../assets/movie-finder.png"

const projects = [
  {
    title: "Pixel Weather App",
    description:
      "A retro pixel art themed weather app that shows real-time weather data for any city. Features dynamic gradient backgrounds that change based on weather conditions, pixel art icons, and Enter key search support.",
    image: weatherImg,
    tech: ["React", "Vite", "OpenWeatherMap API", "CSS3"],
    live: "https://ashish-pixelweather.vercel.app",
    github: "https://github.com/ashdevjp/weather-app",
    tag: "FEATURED",
  },
  {
    title: "MovieFinder",
    description:
      "A full featured movie and TV show discovery platform. Search, browse trending and top rated content, view full detail pages with embedded trailers, cast sections, and pagination. Fully mobile responsive.",
    image: movieImg,
    tech: ["React", "React Router", "TMDB API", "CSS3"],
    live: "https://ashish-moviefinder.vercel.app",
    github: "https://github.com/ashdevjp/movie-finder",
    tag: "FEATURED",
  },
]

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* image */}
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="overlay-btn"
          >
            Live App ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="overlay-btn outline"
           >
            GitHub ↗
          </a>
        </div>
        {project.tag && (
          <span className="project-tag">{project.tag}</span>
        )}
      </div>

      {/* info */}
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            >
            Live App ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section className="projects-page">
      <h2 className="section-title">&gt; PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="more-projects">
        <p className="more-text">More projects coming soon...</p>
        <a
          href="https://github.com/ashdevjp"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
          >
          View GitHub ↗
        </a>
      </div>
    </section>
  )
}

export default Projects