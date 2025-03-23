import "./Projects.css"

function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce API",
      description:
        "A RESTful API for e-commerce platforms with authentication, product management, and order processing.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Real-time Chat System",
      description: "A scalable real-time chat application with private messaging, group chats, and notifications.",
      technologies: ["Socket.io", "React", "Node.js", "Redis"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Content Management System",
      description: "A headless CMS with a GraphQL API for managing and delivering content to multiple platforms.",
      technologies: ["GraphQL", "Node.js", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
  ]

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
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-code"></i> Code
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn">
            View More on GitHub <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

