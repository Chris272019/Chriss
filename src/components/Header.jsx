import React, { useState, useEffect } from "react";
import "./Header.css";
import profileImage from "../images/profile.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse enter (show modal)
  const handleMouseEnter = () => {
    setShowModal(true);
    setFadeOut(false);
  };

  // Handle mouse leave (fade out first, then remove)
  const handleMouseLeave = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowModal(false);
    }, 300); // Delay matches fadeOut animation duration
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div
          className="profile-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="profile-picture"
            src={profileImage || "/placeholder.svg"}
            alt="Profile"
          />
        </div>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contests">Contests</a>
          <a href="#career-goals">Career Goals</a>
          <a href="#call-to-action">Get Involved</a>
          <a href="#personal-touch">Personal Touch</a>
        </nav>
      </header>

      {/* Profile Image Modal with Fade-in & Fade-out Effect */}
      {showModal && (
        <div className={`modal ${fadeOut ? "fade-out" : ""}`}>
          <div className="modal-content">
            <img src={profileImage || "/placeholder.svg"} alt="Full Profile" />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
