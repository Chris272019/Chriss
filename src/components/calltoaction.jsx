"use client"

import { useState } from "react"
import "./calltoaction.css"
import emailjs from "@emailjs/browser"
import SoundButton from "./SoundButton"
import { playRandomSound, playSentSound } from "../utils/soundEffects"

// Initialize EmailJS with your public key
emailjs.init("Ejdp3wZN6QUwoua2Y")

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "christiantan2719@gmail.com"
      }

      const response = await emailjs.send(
        "service_q5vz1zk", // Your service ID
        "template_67opfg2", // Your new template ID
        templateParams
      )

      if (response.status === 200) {
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        // Play sent sound when email is successfully sent
        playSentSound()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: "Failed to send message. Please try again or contact me directly at christiantan2719@gmail.com" 
      })
    }
  }

  const handleLinkedInClick = (e) => {
    e.preventDefault()
    playRandomSound()
    window.open("https://www.linkedin.com/in/christian-tan-403048302/", "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="call-to-action">
      <div className="container">
        <div className="cta-container">
          <h2>Let's Collaborate!</h2>
          <p>
            Are you looking for a skilled backend developer to work on exciting projects? Let's connect and build
            something amazing together.
          </p>
          <div className="cta-buttons">
            <SoundButton as="a" href="mailto:christiantan2719@gmail.com" className="btn">
              <i className="fas fa-envelope"></i> Email Me
            </SoundButton>
            <SoundButton as="a" href="https://www.linkedin.com/in/christian-tan-403048302/" onClick={handleLinkedInClick} className="btn btn-outline">
              <i className="fab fa-linkedin"></i> Connect on LinkedIn
            </SoundButton>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <SoundButton 
                type="submit" 
                className="form-submit"
                disabled={status.submitting}
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </SoundButton>
              {status.submitted && (
                <div className="success-message">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status.error && (
                <div className="error-message">
                  {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

