import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2 className="logo" style={{ marginBottom: '1rem' }}>Pavan rai<span>.</span></h2>
        <p>&copy; {new Date().getFullYear()} Pavan rai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
