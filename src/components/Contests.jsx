import React from "react";
import "./Contests.css"; // Import the CSS file for styles

const EnteredContests = () => {
  return (
    <div id="contests" className="contests">
      <div className="contests-card">
        {/* Front Side - Title */}
        <div className="contests-card-front">
          <h2 className="aurora-text">🏆 Entered Contests</h2>
        </div>

        {/* Back Side - Contest Details */}
        <div className="contests-card-back">
          <ul>
            <li>
              <strong>🚀 Hackathon X</strong> (2023) - 🥇 1st Place
              <p>Built an AI-powered solution for real-time data analysis.</p>
            </li>
            <li>
              <strong>🎨 UI/UX Challenge</strong> (2024) - 🎖 Finalist
              <p>Designed an intuitive healthcare mobile app prototype.</p>
            </li>
            <li>
              <strong>📜 Writing Contest</strong> (2022) - 🏅 Honorable Mention
              <p>Published a technical article on cybersecurity.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnteredContests;
