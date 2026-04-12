import { useState } from "react"
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, 
  FaGithub, FaBootstrap  , FaCode
} from "react-icons/fa"
import { 
  SiVite, SiVercel 
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import "./Skills.css"

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: 85, color: "#e34f26" },
  { name: "CSS3", icon: <FaCss3Alt />, level: 80, color: "#264de4" },
  { name: "JavaScript", icon: <FaJs />, level: 70, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, level: 65, color: "#61dafb" },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 65, color: "#7952b3" },
  { name: "Git", icon: <FaGitAlt />, level: 70, color: "#f05032" },
  { name: "GitHub", icon: <FaGithub />, level: 70, color: "#ffffff" },
  { name: "Vite", icon: <SiVite />, level: 65, color: "#646cff" },
  { name: "REST APIs", icon: <TbApi />, level: 65, color: "#ab5bec" },
  { name: "Vercel", icon: <SiVercel />, level: 70, color: "#ffffff" },
  { name: "VS Code", icon: <FaCode />, level: 90, color: "#007acc" },
]

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`skill-card ${hovered ? "active" : ""}`}
      onClick={() => setHovered(!hovered)}
    >
      <div className="skill-icon" style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <p className="skill-name">{skill.name}</p>

      <div className={`skill-bar-wrapper ${hovered ? "open" : ""}`}>
        <div className="skill-bar-bg">
          <div
            className="skill-bar-fill"
            style={{
              width: hovered ? `${skill.level}%` : "0%",
              backgroundColor: skill.color
            }}
          />
        </div>
        <span className="skill-percent">{skill.level}%</span>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section className="skills-page">
      <h2 className="section-title">&gt; SKILL_TREE</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      <div className="currently-learning">
        <h3 className="learning-title">&gt; CURRENTLY LEARNING</h3>
        <div className="learning-tags">
          <span className="tag done">React Router ✓</span>
          <span className="tag progress">TypeScript →</span>
          <span className="tag next">Tailwind CSS ↓</span>
        </div>
      </div>
    </section>
  )
}

export default Skills