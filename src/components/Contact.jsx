import React from 'react';

import { Tooltip } from "@nextui-org/tooltip";

import ContactForm from './ContactForm';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileIcon from '../assets/dp_cartoon.jpeg';

const Contact = () => {

  return (
    <div className="contact" id="contact">
      <div className="mylinks">
        <div className="icon linkedin-icon">
          <Tooltip content="LinkedIn" placement="bottom" color="success">
            <a href="https://www.linkedin.com/in/iamakshayrajan/">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
            </a>
          </Tooltip>
        </div>
        <div className="icon github-icon">
          <Tooltip content="Github" placement="bottom" color="success">
            <a href="https://github.com/akshay-rajan" >
              <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="github" />
            </a>
          </Tooltip>
        </div>
        <div className="icon leetcode-icon">
          <Tooltip content="LeetCode" placement="bottom" color="success">
            <a href="https://leetcode.com/u/akshayrajan/" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3Ir9453MFZjzGK8jeX9en0kjW8igj-FTNg&s" alt="leetcode" />
            </a>
          </Tooltip>
        </div>
        <div className="icon myicon">
          <Tooltip content="Resume" placement="bottom" color="success">
            <a href="https://akshay-rajan.github.io/static/akshayrajan-resume.pdf">
              <img src={ProfileIcon} alt="DP" />
            </a>
          </Tooltip>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-title">Contact Me</div>
        <div className="contact-row">
          <div className="contact-col-1">
          </div>
          <div className="contact-col-2">
        </div>
            <address className="contact-info">
              <div>
                <a href="https://www.linkedin.com/in/iamakshayrajan/">
                  <LinkedInIcon />
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
