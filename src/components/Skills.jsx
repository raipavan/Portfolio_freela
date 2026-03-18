import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with to bring concepts to reality.</p>
        
        <div className="skills-grid">
          <div className="glass-card fade-in">
            <h3>💻 Frontend</h3>
            <p>React.js, HTML5, Vanilla CSS, Tailwind, JavaScript (ES6+), Framer Motion, Responsive Design.</p>
          </div>
          <div className="glass-card fade-in delay-1">
            <h3>⚙️ Backend</h3>
            <p>Node.js, Express.js, RESTful APIs, Authentication, Server-side Logic.</p>
          </div>
          <div className="glass-card fade-in delay-2">
            <h3>🗄️ Database</h3>
            <p>MongoDB, PostgreSQL, Mongoose, Data Modeling, Query Optimization.</p>
          </div>
          <div className="glass-card fade-in delay-3">
            <h3>🛠️ Tools</h3>
            <p>Git, GitHub, VS Code, Postman, Vite, Vercel, Figma.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
