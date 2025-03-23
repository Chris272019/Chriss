"use client"

import { useEffect } from "react"
import "./Skills.css"

function Skills() {
  // Skills data organized by category
  const skillsData = {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Express", "RESTful APIs", "GraphQL"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    devOps: ["Git", "Docker", "CI/CD", "AWS"],
  }

  // Skill proficiency data
  const proficiencyData = [
    { skill: "JavaScript", level: 85 },
    { skill: "Node.js", level: 90 },
    { skill: "React", level: 75 },
    { skill: "Databases", level: 80 },
    { skill: "API Development", level: 85 },
  ]

  // Animate progress bars on scroll
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress")

    const animateProgressBars = () => {
      progressBars.forEach((bar) => {
        const level = bar.getAttribute("data-level")
        bar.style.width = `${level}%`
      })
    }

    // Initial animation
    setTimeout(animateProgressBars, 500)

    // Animate on scroll
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills")
      if (skillsSection) {
        const sectionTop = skillsSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (sectionTop < windowHeight * 0.75) {
          animateProgressBars()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skills-grid">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div className="skill-category" key={category}>
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="skill-list">
                  {skills.map((skill, index) => (
                    <span className="skill-item" key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skill-bars">
            {proficiencyData.map((item, index) => (
              <div className="skill-bar" key={index}>
                <div className="skill-info">
                  <span>{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" data-level={item.level} style={{ width: "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

