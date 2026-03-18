import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav>
      <div className="container">
        <a href="#" className="logo">Deeksha<span>.</span></a>
        <div className="nav-actions">
          <div className="links" style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
