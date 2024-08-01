import React from 'react';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-row">
        <div className="contact-col-1">
          <div className="contact-img">
            {/* <img src="static/contact.jpg" alt="Contact" /> */}
          </div>
        </div>
        <div className="contact-col-2">
          <div className="contact-info">
            <p><i className="fas fa-phone-alt"></i> +91 8156945862</p>
            <p><i className="fas fa-envelope"></i> akshayrajan@outlook.in</p>
            <p><i className="fas fa-map-marker-alt"></i> Trivandrum, Kerala, India</p>
          </div>
          <div className="contact-form">
            <form action="https://formspree.io/f/xzbleagq" method="POST">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
