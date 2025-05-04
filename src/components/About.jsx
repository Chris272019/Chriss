import "./About.css"
import SoundButton from "./SoundButton"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <img src="src/images/Profile.png" alt="About Me" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I'm a passionate backend developer with a strong foundation in building scalable and efficient server-side applications. My expertise lies in creating robust APIs, optimizing database performance, and implementing secure authentication systems.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span>Name:</span>
                <span>Chris</span>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <span>christiantan2719@gmail.com</span>
              </div>
              <div className="info-item">
                <span>Location:</span>
                <span>Philippines</span>
              </div>
              <div className="info-item">
                <span>Availability:</span>
                <span>Open to Opportunities</span>
              </div>
            </div>
            <div className="about-buttons">
              <SoundButton as="a" href="#contact" className="btn">
                Contact Me
              </SoundButton>
              <SoundButton as="a" href="#" className="btn btn-outline">
                Download CV
              </SoundButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

