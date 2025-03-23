import "./About.css"
import profileImage from "../images/profile.png"

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <img src={profileImage || "/placeholder.svg?height=400&width=400"} alt="Profile" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hello! I'm a passionate backend developer with a strong foundation in creating scalable, efficient, and
              secure server-side applications. With expertise in modern backend technologies, databases, and APIs, I
              focus on optimizing performance and ensuring robust architecture.
            </p>
            <p>
              I strive to deliver clean, maintainable code while working to improve data processing, security, and
              overall system reliability. Outside of development, I enjoy exploring new technologies, contributing to
              open-source projects, and diving into books on software architecture to stay up-to-date with industry best
              practices.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span>Name:</span>
                <span>Chris</span>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <span>contact@example.com</span>
              </div>
              <div className="info-item">
                <span>Location:</span>
                <span>Philippines</span>
              </div>
              <div className="info-item">
                <span>Availability:</span>
                <span>Available for hire</span>
              </div>
            </div>
            <div className="about-buttons">
              <a href="#contact" className="btn">
                Contact Me
              </a>
              <a href="#" className="btn btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

