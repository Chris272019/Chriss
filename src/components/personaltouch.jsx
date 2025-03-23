import "./personaltouch.css"

const PersonalTouch = () => {
  return (
    <section id="personal-touch" className="personal-touch">
      <div className="container">
        <div className="section-title">
          <h2>A Little About Me</h2>
        </div>

        <div className="personal-touch-container">
          <div className="personal-card">
            <div className="personal-card-icon">🎨</div>
            <h3>Hobbies & Interests</h3>
            <ul>
              <li>💻 Coding side projects</li>
              <li>📷 Photography</li>
              <li>🎮 Gaming</li>
              <li>📚 Reading tech books</li>
              <li>🧩 Solving algorithmic puzzles</li>
            </ul>
          </div>

          <div className="personal-card">
            <div className="personal-card-icon">✈️</div>
            <h3>Travel Goals</h3>
            <p>
              I'm planning to travel throughout the Philippines to experience its diverse cultures and beautiful
              landscapes. My goal is to visit all major islands while working remotely and connecting with local tech
              communities.
            </p>
          </div>

          <div className="personal-card">
            <div className="personal-card-icon">💡</div>
            <h3>Fun Facts</h3>
            <ul>
              <li>🤔 I'm more proficient in backend development than frontend</li>
              <li>☕ I can't start coding without a cup of coffee</li>
              <li>🌙 I'm a night owl - most productive after midnight</li>
              <li>🎵 I listen to lo-fi music while coding</li>
              <li>🐱 I have a cat who likes to sit on my keyboard</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalTouch

