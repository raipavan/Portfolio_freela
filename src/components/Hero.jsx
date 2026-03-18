import React, { useState, useEffect } from 'react';
import resume from '../assets/Deeksha_Resume .pdf';

const useTypewriter = (words, loop = true) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
};

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Creative Coder",
    "Problem Solver"
  ];
  
  const typedText = useTypewriter(roles);

  return (
    <section id="home" className="hero fade-in">
      <div className="container">
        <h1>Hi, I'm Deeksha</h1>
        <div className="typewriter">
          <span>I am a {typedText}</span><span className="cursor"></span>
        </div>
        <p>A Fresh & Passionate Developer building dynamic, modern, and engaging web experiences from design to deployment.</p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn">View My Work</a>
          <a href={resume} download="Deeksha_Resume.pdf" className="btn btn-outline">Download Resume</a>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
