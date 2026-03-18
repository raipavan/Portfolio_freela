import React, { useEffect, useState } from 'react';

const IntroLoader = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 800);
    }, 1600); 
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  const text = "Hi, I'm Deeksha";
  
  return (
    <div className={`intro-loader ${!isAnimating ? 'fade-out-loader' : ''}`}>
      <div className="falling-text">
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className="falling-letter"
            style={{ 
              animationDelay: `${index * 0.05}s`,
              marginLeft: char === ' ' ? '1rem' : '0' 
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IntroLoader;
