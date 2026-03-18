import React from 'react';

const About = () => {
  return (
    <section id="about" className="fade-in delay-1">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Dedicated to crafting seamless user experiences from front to back.</p>
        
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            As a recent graduate stepping into the world of full stack development, I am incredibly passionate about bringing ideas to life through code.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            I specialize in modern JavaScript frameworks, creating responsive, animated user interfaces on the frontend, while designing robust, scalable architectures on the backend. My goal is to build digital products that are not just functional, but genuinely "wow" the users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
