import "./careergoals.css"

const CareerGoals = () => {
  // Career goals data
  const goals = [
    {
      icon: "🚀",
      title: "Backend Specialization",
      description:
        "Become an expert in scalable and efficient backend systems, focusing on performance optimization and security.",
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description:
        "Master cloud computing platforms and design distributed systems that can handle high traffic and data loads.",
    },
    {
      icon: "🔄",
      title: "DevOps Integration",
      description: "Integrate DevOps practices into development workflow to ensure continuous delivery and deployment.",
    },
    {
      icon: "👥",
      title: "Team Leadership",
      description: "Lead development teams and mentor junior developers while architecting robust applications.",
    },
  ]

  return (
    <section id="career-goals" className="career-goals">
      <div className="container">
        <div className="career-goals-container">
          <div className="career-goals-content">
            <h2>Career Goals</h2>
            <p>
              I aim to become a highly skilled backend developer, specializing in scalable and efficient systems. My
              focus is on mastering cloud computing, database optimization, and contributing to open-source projects.
            </p>
            <div className="goals-list">
              {goals.map((goal, index) => (
                <div className="goal-item" key={index}>
                  <div className="goal-icon">{goal.icon}</div>
                  <div className="goal-text">
                    <h4>{goal.title}</h4>
                    <p>{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="career-goals-image">
            <img src="/placeholder.svg?height=400&width=400" alt="Career Goals" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerGoals

