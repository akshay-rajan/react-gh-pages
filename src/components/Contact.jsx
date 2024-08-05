import React from 'react';

import ContactForm from './ContactForm';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const Contact = () => {

  return (
    <div className="contact" id="contact">
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
                <a href="">
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
