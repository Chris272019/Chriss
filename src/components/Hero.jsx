import "./Hero.css"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import SoundButton from "./SoundButton"
import { playRandomSound } from "../utils/soundEffects"
import ParticleText from "./ParticleText"

const Hero = () => {
  const handleLinkClick = (e, url) => {
    e.preventDefault()
    playRandomSound()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h3 className="hero-greeting">Hello, I'm</h3>
            <div className="particle-text-wrapper">
              <ParticleText />
            </div>
            <hr className="hero-divider" />
            <p className="description">
              I build robust, scalable server-side applications with a focus on performance and security.
            </p>
            <div className="cta-buttons">
              <SoundButton as="a" href="#projects" className="btn">
                View My Work
              </SoundButton>
              <SoundButton as="a" href="#contact" className="btn btn-outline">
                Contact Me
              </SoundButton>
            </div>
          </div>
          <div className="social-links">
            <SoundButton
              as="a"
              href="https://github.com/Chris272019"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onClick={(e) => handleLinkClick(e, "https://github.com/Chris272019")}
            >
              <FaGithub />
            </SoundButton>
            <SoundButton
              as="a"
              href="https://www.linkedin.com/in/christian-tan-403048302/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onClick={(e) => handleLinkClick(e, "https://www.linkedin.com/in/christian-tan-403048302/")}
            >
              <FaLinkedin />
            </SoundButton>
            <SoundButton
              as="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onClick={(e) => handleLinkClick(e, "https://twitter.com")}
            >
              <FaTwitter />
            </SoundButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
