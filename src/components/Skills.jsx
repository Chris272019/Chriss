import React from "react";
import "./Skills.css";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        {/* Front of the card */}
        <div className="skills-front">
          <h2>Skills</h2>
        </div>
        {/* Back of the card: Display skills list */}
        <div className="skills-back">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
