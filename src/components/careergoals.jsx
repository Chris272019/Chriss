import React from "react";
import "./Careergoals.css"; // Importing the CSS file

const CareerGoals = () => {
  return (
    <div id="career-goals" className="career-goals">
      <div className="career-goals-card">
        <div className="career-goals-card-front">
          <h2 className="aurora-text">Career Goals</h2>
        </div>
        <div className="career-goals-card-back">
          <p>
            I aim to become a highly skilled backend developer, specializing in scalable and efficient systems.
            My focus is on mastering cloud computing, database optimization, and contributing to open-source projects. 
            In the long run, I aspire to lead development teams and architect robust applications that solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerGoals;
