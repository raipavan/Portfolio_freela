import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent creative works.</p>
        
        <div className="projects-grid">
          <div className="glass-card fade-in">
            <h3>E-Commerce Platform</h3>
            <p>A full-featured online store with dynamic cart management, user authentication, and secure payment gateway integration.</p>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">MongoDB</span>
            </div>
          </div>
          
          <div className="glass-card fade-in delay-1">
            <h3>Task Management Dashboard</h3>
            <p>A beautiful drag-and-drop task manager with real-time updates to help teams collaborate effectively and hit their milestones.</p>
            <div className="project-tags">
              <span className="project-tag">Vite</span>
              <span className="project-tag">Express</span>
              <span className="project-tag">PostgreSQL</span>
            </div>
          </div>

          <div className="glass-card fade-in delay-2">
            <h3>AI Data Analyzer</h3>
            <p>A sophisticated tool leveraging AI APIs to process data sets and present them visually using advanced charting libraries.</p>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Chart.js</span>
              <span className="project-tag">OpenAI API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
