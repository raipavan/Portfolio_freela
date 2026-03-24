import React from 'react';

const About = () => {
  return (
    <section id="about" className="fade-in delay-1">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Dedicated to crafting seamless user experiences from front to back.</p>
        
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            As a Software Engineer currently working at <strong>CIEL-Hfactor</strong>, I bridge the gap between robust Full Stack Development and the analytical world of Data Science & Machine Learning.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            I specialize in crafting high-performance web applications while leveraging Data Science to derive meaningful insights. My journey through internships at Parrophins and Internshala has solidified my expertise in modern JavaScript frameworks, and I am now deeply invested in building intelligent, data-driven systems that deliver exceptional user value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
