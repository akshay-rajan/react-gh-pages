import React, { useEffect } from 'react';

export default function Experience(props) {
  useEffect(() => {
    const exp = document.querySelector("#experience");
    if (exp) {
      let jobTitles = exp.querySelectorAll(".job-title");
      exp.addEventListener("mouseover", () => {
        jobTitles.forEach((jobTitle) => {
          jobTitle.style.color = "wheat";
        }
      )});
      exp.addEventListener("mouseout", () => {
        jobTitles.forEach((jobTitle) => {
          jobTitle.style.color = "white";
        }
      )});
    }
  });

  return (
    <div className="exp" id="experience">
      <div className="exp-title">Experience</div>
      <ul className="exp-timeline">
        <li className="exp-timeline-event">
          <label className="exp-timeline-event-icon"></label>
          <div className="exp-timeline-event-copy">
            <p className="exp-timeline-event-thumbnail">May 2024 - Present</p>
            <h3 className="job-title">Software Engineer Intern</h3>
            <h4>
              XTG Technologies, Kochi, Kerala 
              (Remote)
            </h4>
            <p>
              <strong>Smart Contracts: Internet Computer</strong><br/>
              Entwickeln von anspruchsvollen, animierten, responsive und adaptive Webseiten mit HTML5, SCSS, jQuery; für alle Browser, optimiert für Desktop, Notebook, Smartphones und Tablets (iOS, Android, Windows).
            </p>
            <p>
              <strong>Smart Contracts: Solana</strong><br/>
              Ständiges Verbessern des agilen Entwicklungsprozesses beispielsweise durch Grunt, Yeoman, GIT, JIRA und BrowserStack.
            </p>
          </div>
        </li>
      </ul>  
    </div>
  );
}
