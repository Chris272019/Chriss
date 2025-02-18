import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-card">
        {/* Front of the card - About Me heading */}
        <div className="about-card-front">
          <h2>About Me</h2>
        </div>
        {/* Back of the card - Paragraph text */}
        <div className="about-card-back">
          <p>
            Hello! I'm a passionate developer with a knack for creating beautiful and functional web applications. With a
            strong foundation in modern web technologies and a keen eye for design, I strive to build intuitive and engaging
            user experiences. When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or enjoying a good book on software architecture.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
