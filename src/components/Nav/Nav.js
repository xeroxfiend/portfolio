import React from "react";

import about from "../../assets/about.png";
import skills from "../../assets/skills.png";
import projects from "../../assets/projects.png";
import contact from "../../assets/contact.png";

function Nav() {
  return (
    <div className="nav-container">
      <header className="title">BL</header>
      <nav className="nav">
        <a href='#about' className="about-icon">
          <img src={about} alt="about" className="about-image" />
          <p className="about">
            A
          </p>
        </a>
        <a href='#skills' className="skills-icon">
          <img src={skills} alt="skills" className="skills-image" />
          <p className="skills">
            S
          </p>
        </a>
        <a href='#projects' className="projects-icon">
          <img src={projects} alt="projects" className="projects-image" />
          <p className="projects">
            P
          </p>
        </a>
        <a href='#contact' className="contact-icon">
          <img src={contact} alt="contact" className="contact-image" />
          <p className="contact">
            C
          </p>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
