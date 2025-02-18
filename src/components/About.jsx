import "./About.css"

function About() {
  return (
    <section id="about" className="about">
      <div className="about-card">
        {/* Front of the card - About Me heading */}
        <div className="about-card-front">
          <h2 className="aurora-text">About Me</h2>
        </div>
        {/* Back of the card - Paragraph text */}
        <div className="about-card-back">
          <p>
          Hello! I'm a passionate backend developer with a strong foundation in creating scalable, efficient, and secure server-side applications. With expertise in modern backend technologies, databases, and APIs, I focus on optimizing performance and ensuring robust architecture. I strive to deliver clean, maintainable code while working to improve data processing, security, and overall system reliability. Outside of development, I enjoy exploring new technologies, contributing to open-source projects, and diving into books on software architecture to stay up-to-date with industry best practices.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

