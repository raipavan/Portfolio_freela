import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Using Formspree as the recommended approach for static sites
      // User will need to create a form on formspree.io and replace 'YOUR_FORMSPREE_ENDPOINT'
      const response = await fetch('https://formsubmit.co/ajax/raipavan503@gmail.com', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Oops! There was a problem submitting your form. Please try again later.');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="fade-in">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Open to new opportunities and excited to collaborate!</p>
        
        <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {status.submitted ? (
            <div className="success-message" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I've received your message and will get back to you soon.</p>
              <button 
                className="btn btn-outline" 
                style={{ marginTop: '1.5rem' }}
                onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {status.error && (
                <p className="error-message" style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>
                  {status.error}
                </p>
              )}

              <button 
                type="submit" 
                className="btn" 
                disabled={status.submitting}
                style={{ width: '100%', opacity: status.submitting ? 0.7 : 1 }}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
