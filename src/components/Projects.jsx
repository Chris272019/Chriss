import "./Projects.css"
import bloodbankImage from "../assets/img/bloodbank.jpg"
import scicalImage from "../assets/img/scical.jpg"
import pokemonImage from "../assets/img/pokemon.jpg"
import ecommerceImage from "../assets/img/E-commerce.jpg"
import SoundButton from "./SoundButton"
import { playRandomSound } from "../utils/soundEffects"
import pageImage from "../assets/img/page.png"
import fashionImage from "../assets/img/fashion.png"
import realImage from "../assets/img/real.png"

function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Pokemon Web App",
      description: "An interactive Pokemon web application that allows users to explore and learn about different Pokemon characters with a modern and engaging interface.",
      technologies: ["React", "CSS", "JavaScript", "Netlify", "Node.js"],
      image: pokemonImage,
      github: "https://github.com/Chris272019/Pokemon",
      demo: "https://pokemaine.netlify.app/",
    },
    {
      id: 2,
      title: "Scientific Calculator",
      description: "A modern scientific calculator web application with advanced mathematical functions and a clean, intuitive interface.",
      technologies: ["React", "CSS", "JavaScript", "Netlify"],
      image: scicalImage,
      github: "https://github.com/Chris272019/SCI_CAL",
      demo: "https://scicalcu.netlify.app/",
    },
    {
      id: 3,
      title: "Blood Bank Management System",
      description: "A comprehensive blood bank management system with admin dashboard for managing blood donations, inventory, and donor records.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: bloodbankImage,
      github: "https://github.com/Chris272019/Capstone-Websites",
      demo: "https://wh1438978.ispot.cc/admin_capstone/admin_login.php",
    },
    {
      id: 4,
      title: "Dungeon Loots E-Commerce",
      description: "A fantasy-themed e-commerce platform for gaming and adventure gear, featuring product browsing, shopping cart, and secure checkout.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: ecommerceImage,
      github: "#",
      demo: "https://wh1438978.ispot.cc/dunngeonloots/Index.html",
    }, // Fixed: Added closing brace and comma
    {
      id: 5,
      title: "Property Page",
      description: "A bespoke digital showcase designed for the ultra-luxury real estate market. This template merges cinematic visuals with a minimalist 'light-mode' aesthetic, utilizing fluid typography and gold accents to mirror the exclusivity of high-end estates.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: pageImage, // Fixed: Updated to pageImage
      github: "#",
      demo: "https://property-pafe.netlify.app/",
    },
    {
      id: 6,
      title: "Real-Estate",
      description: "A premier dark-themed luxury real estate landing page that blends cinematic architectural visuals with high-end typography to create an immersive, gallery-like experience for elite property listings.", // Fixed: Added closing quote
      technologies: ["HTML", "CSS", "JavaScript"],
      image: realImage, // Fixed: Updated to realImage
      github: "#",
      demo: "https://estate142019.netlify.app/",
    },
    {
      id: 7,
      title: "Vissual-Fashion",
      description: "VISSUAL is a contemporary fashion house defined by structural minimalism and a monochromatic soul. Borrowing from the clean lines of modern architecture, the brand focuses on 'permanent collections' rather than seasonal trends—offering high-contrast, silhouette-driven pieces designed for the modern minimalist.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: fashionImage, // Fixed: Updated to fashionImage
      github: "#",
      demo: "https://fashion1419.netlify.app/",
    }
  ]

  const handleLinkClick = (e, url) => {
    e.preventDefault()
    playRandomSound()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-links">
                  <SoundButton 
                    as="a" 
                    href={project.github} 
                    className="project-link" 
                    onClick={(e) => handleLinkClick(e, project.github)}
                  >
                    <i className="fas fa-code"></i> Code
                  </SoundButton>
                  <SoundButton 
                    as="a" 
                    href={project.demo} 
                    className="project-link" 
                    onClick={(e) => handleLinkClick(e, project.demo)}
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
                  </SoundButton>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <SoundButton 
            as="a" 
            href="https://github.com/Chris272019" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
            onClick={(e) => handleLinkClick(e, "https://github.com/Chris272019")}
          >
            View More on GitHub <i className="fas fa-arrow-right"></i>
          </SoundButton>
        </div>
      </div>
    </section>
  )
}

export default Projects
