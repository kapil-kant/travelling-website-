import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value }
      = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send this data to a backend endpoint
      console.log('Form Data Submitted:', formData);

      setStatus('Success! Your message has been sent. We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error! Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, use the form below.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        {status && (
          <div className={`status-message ${status.includes('Success') ? 'success' : status.includes('Error') ? 'error' : ''}`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
