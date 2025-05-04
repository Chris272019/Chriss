import React from 'react';
import ParticleText from './ParticleText';
import SoundButton from './SoundButton';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-greeting">Hello, I'm</h2>
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
          <SoundButton as="a" href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </SoundButton>
          <SoundButton as="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </SoundButton>
          <SoundButton as="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </SoundButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;

