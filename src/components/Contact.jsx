import React, { useRef, useEffect } from 'react';

const Contact = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzks4jFjaFkVQEuvAHol0hJmw86jni2yFubSw-wmSZtgIViK-Kb7VwTFXWA0bfBXng/exec';
  const formRef = useRef(null);
  const alertRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const alert = alertRef.current;

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          alert.innerHTML = 'Message Sent Successfully!';
          setTimeout(() => {
            alert.innerHTML = '';
          }, 5000);
          form.reset();
        })
        .catch(error => console.error('Error!', error.message));
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup the event listener on component unmount
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-row">
          <div className="contact-col-1">
          </div>
          <div className="contact-col-2">
            <div className="contact-info">
              <p><i className="fas fa-phone-alt"></i> +91 8156945862</p>
              <p><i className="fas fa-envelope"></i> akshayrajan@outlook.in</p>
              <p><i className="fas fa-map-marker-alt"></i> Trivandrum, Kerala, India</p>
            </div>
            <div className="contact-form">
              <form ref={formRef} action={scriptURL} method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
              <div id="alert" ref={alertRef}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
