import React from 'react';

const TechMarquee = () => {
  const techStack = [
    "React.js", "Node.js", "Express", "MongoDB", "PostgreSQL", 
    "Vite", "JavaScript", "HTML5", "CSS3", "Tailwind", 
    "Python", "TensorFlow", "PyTorch", "Git", "GitHub", 
    "Framer Motion", "Vercel", "REST APIs"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Double array for infinite scroll illusion */}
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="marquee-item">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
