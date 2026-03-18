import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2 className="logo" style={{ marginBottom: '1rem' }}>Deeksha<span>.</span></h2>
        <p>&copy; {new Date().getFullYear()} Deeksha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
