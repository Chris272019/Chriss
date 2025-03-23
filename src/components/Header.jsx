"use client"

import { useState, useEffect } from "react"
import "./Header.css"
import profileImage from "../images/profile.png"

function Header() {
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
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
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
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#career-goals" onClick={(e) => handleNavClick(e, 'career-goals')}>Goals</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <button className="close-menu" onClick={toggleMobileMenu}>
          ✕
        </button>
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
        <a href="#career-goals" onClick={(e) => handleNavClick(e, 'career-goals')}>Goals</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
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

