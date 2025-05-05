import "./Experience.css"
import SoundButton from "./SoundButton"

const Experience = () => {
  const experiences = [
    {
      role: "Software Tester / Quality Assurance",
      company: "Software Engineering",
      period: "2023",
      responsibilities: [
        "Conduct comprehensive testing of software applications to ensure quality and reliability",
        "Develop and execute test plans, test cases, and test scripts",
        "Identify, document, and track software defects and issues",
        "Collaborate with development teams to resolve identified issues",
        "Perform regression testing to verify bug fixes and new features"
      ]
    },
    {
      role: "Backend Support",
      company: "Software Engineering",
      period: "2023",
      responsibilities: [
        "Provide technical support for backend systems and applications",
        "Troubleshoot and resolve backend-related issues",
        "Monitor system performance and implement optimizations",
        "Assist in database maintenance and optimization",
        "Collaborate with development team on backend improvements"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-container">
          <h2>Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div className="experience-item" key={index}>
                <div className="experience-header">
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 