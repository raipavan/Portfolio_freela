import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Journey</h2>
        <p className="section-subtitle">My educational and professional milestones.</p>

        <div className="timeline">
          <div className="timeline-item fade-in">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2025</span>
              <h3>Graduation</h3>
              <p>Completed my degree in Computer Science, mastering software engineering principles and full-stack development.</p>
            </div>
          </div>
          <div className="timeline-item fade-in delay-1">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2025</span>
              <h3>First Internship</h3>
              <p>Worked as a FULL STACK DEVELOPER intern at UnifyCX, gaining hands-on experience in building scalable REST APIs and reactive frontends.</p>
            </div>
          </div>
          <div className="timeline-item fade-in delay-2">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024</span>
              <h3>Built First Full App</h3>
              <p>Developed my first full-scale database-backed web application, solidifying my passion for backend architecture.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
