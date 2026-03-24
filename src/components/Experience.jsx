import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Journey</h2>
        <p className="section-subtitle">My educational and professional milestones.</p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Current</span>
              <h3>Software Engineer</h3>
              <p>Working at <strong>CIEL-Hfactor</strong>, developing enterprise-grade solutions and optimizing application performance.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024 - 2025</span>
              <h3>Software Engineer</h3>
              <p>Spent 6 months at <strong>Parrophins Pvt Ltd</strong>, focusing on robust software architectural patterns and scalable codebases.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024</span>
              <h3>Full Stack Intern</h3>
              <p>3-month internship at <strong>Internshala</strong>, building dynamic web applications and mastering the MERN stack.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2023 - 2024</span>
              <h3>First Internship</h3>
              <p>Worked as a FULL STACK DEVELOPER intern at UnifyCX, gaining hands-on experience in building scalable REST APIs and reactive frontends.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
