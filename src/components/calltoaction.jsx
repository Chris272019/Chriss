import React from "react";
import "./calltoaction.css"; // Import the CSS file

const CallToAction = () => {
  return (
    <div id="call-to-action" className="call-to-action">
      <div className="cta-card">
        <div className="cta-card-front">
          <h2 className="aurora-text">Let's Collaborate!</h2>
        </div>
        <div className="cta-card-back">
          <p>
            Are you looking for a skilled backend developer to work on exciting projects?  
            Let’s connect and build something amazing together.  
          </p>
          <a href="mailto:your.email@example.com" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
