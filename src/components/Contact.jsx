import React from 'react';

import ContactForm from './ContactForm';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const Contact = () => {

  return (
    <div className="contact" id="contact">
      <div className="mylinks"></div>
      <div className="contact-container">
        <div className="contact-title">Contact Me</div>
        <div className="contact-row">
          <div className="contact-col-1">
          </div>
          <div className="contact-col-2">
        </div>
            <address className="contact-info">
              <div>
                <a href="tel:+919446739185">
                  <LocalPhoneIcon />
                </a>
              </div>
              <div>
                <a href="mailto:akshayrajan345@gmail.com">
                  <EmailIcon />
                </a>
              </div>
              <div>
                <a href="https://www.google.com/maps/place/Thiruvananthapuram,+Kerala/@8.4996983,76.7593538,11z/data=!3m1!4b1!4m6!3m5!1s0x3b05bbb805bbcd47:0x15439fab5c5c81cb!8m2!3d8.5241391!4d76.9366376!16zL20vMGZrOTg?entry=ttu">
                  <HomeIcon />
                </a>
              </div>
            </address>
          </div>
          <ContactForm />
        </div>
      </div>
    );
  };

export default Contact;
