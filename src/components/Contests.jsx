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
              <strong>Have not  joined any Contest due to School works</strong>
            </li> 
          </ul> 
        </div>
      </div>
    </div>
  );
};

export default EnteredContests;
