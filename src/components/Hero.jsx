import "./Hero.css"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import SoundButton from "./SoundButton"
import { playRandomSound } from "../utils/soundEffects"

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
          <h1>Hi, I'm Chris</h1>
          <h2>Backend Developer</h2>
          <p>Building robust and scalable server-side applications</p>
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
