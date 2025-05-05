import "./Certificates.css"
import { FaCertificate } from "react-icons/fa"
import certImage from "../assets/img/certs.jpg"

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Data Analysis with Python",
      issuer: "FreeCodeCamp",
      date: "2024",
      description: "Comprehensive data analysis certification covering Python, pandas, NumPy, and data visualization techniques for effective data analysis and interpretation.",
      link: "https://www.freecodecamp.org/certification/Chrissssy/data-analysis-with-python-v7",
      image: certImage
    }
  ]

  const handleLinkClick = (e, url) => {
    e.preventDefault()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-title">
          <h2>Certificates</h2>
        </div>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert.id}>
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <div className="certificate-details">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="date">{cert.date}</span>
                </div>
                <p>{cert.description}</p>
                <a 
                  href={cert.link} 
                  className="view-certificate"
                  onClick={(e) => handleLinkClick(e, cert.link)}
                >
                  View Certificate <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates 