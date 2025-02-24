import React from "react";
import "./personaltouch.css"; // Import the CSS file

const PersonalTouch = () => {
  return (
    <div id="personal-touch" className="personal-touch">
      <div className="personal-card">
        <div className="personal-card-front">
          <h2 className="aurora-text">A Little About Me</h2>
        </div>
        <div className="personal-card-back">
          <ul>
            <li>🎨 <strong>Hobbies</strong>: I enjoy coding, photography, and gaming.</li>
            <li>✈️ <strong>Trips in Life</strong>: I once took a spontaneous road trip with no set destination!</li>
            <li>🤔 <strong>Fun Fact</strong>: I can type over 100 words per minute. Yes, I checked! 😆</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalTouch;
