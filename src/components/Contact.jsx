import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="fade-in">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Open to new opportunities and excited to collaborate!</p>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
