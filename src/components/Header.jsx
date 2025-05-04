"use client"

import { useState, useEffect } from "react"
import "./Header.css"
import profileImage from "../images/profile.png"
import SoundButton from "./SoundButton"
import { playRandomSound } from "../utils/soundEffects"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle mouse enter (show modal)
  const handleMouseEnter = () => {
    setShowModal(true)
    setFadeOut(false)
  }

  // Handle mouse leave (fade out first, then remove)
  const handleMouseLeave = () => {
    setFadeOut(true)
    setTimeout(() => {
      setShowModal(false)
    }, 300) // Delay matches fadeOut animation duration
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    
    // Play sound first
    playRandomSound()
    
    // Then handle navigation
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setMobileMenuOpen(false)
  }

  const handleBlogClick = (e) => {
    e.preventDefault()
    playRandomSound()
    navigate('/blog')
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <div className="profile-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="profile-picture" src={profileImage || "/placeholder.svg"} alt="Profile" />
          </div>
          <div className="logo-text">
            <span>&lt;</span>Dev<span>/&gt;</span> Portfolio
          </div>
        </div>

        <nav>
          <SoundButton as="a" href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</SoundButton>
          <SoundButton as="a" href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</SoundButton>
          <SoundButton as="a" href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</SoundButton>
          <SoundButton as="a" href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</SoundButton>
          <SoundButton as="a" href="#career-goals" onClick={(e) => handleNavClick(e, 'career-goals')}>Goals</SoundButton>
          <SoundButton as="a" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</SoundButton>
          <SoundButton as="a" href="/blog" onClick={handleBlogClick}>Blog</SoundButton>
        </nav>

        <SoundButton className="mobile-menu-btn" onClick={toggleMobileMenu}>
          ☰
        </SoundButton>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <SoundButton className="close-menu" onClick={toggleMobileMenu}>
          ✕
        </SoundButton>
        <SoundButton as="a" href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</SoundButton>
        <SoundButton as="a" href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</SoundButton>
        <SoundButton as="a" href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</SoundButton>
        <SoundButton as="a" href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</SoundButton>
        <SoundButton as="a" href="#career-goals" onClick={(e) => handleNavClick(e, 'career-goals')}>Goals</SoundButton>
        <SoundButton as="a" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</SoundButton>
        <SoundButton as="a" href="/blog" onClick={handleBlogClick}>Blog</SoundButton>
      </div>

      {/* Profile Image Modal with Fade-in & Fade-out Effect */}
      {showModal && (
        <div className={`modal ${fadeOut ? "fade-out" : ""}`}>
          <div className="modal-content">
            <img src={profileImage || "/placeholder.svg"} alt="Full Profile" />
          </div>
        </div>
      )}
    </>
  )
}

export default Header

