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
        <div className="about-icon">
          <img src={about} alt="about" className="about-image" />
          <a href="#about" className="about">
            A
          </a>
        </div>
        <div className="skills-icon">
          <img src={skills} alt="skills" className="skills-image" />
          <a href="#skills" className="skills">
            S
          </a>
        </div>
        <div className="projects-icon">
          <img src={projects} alt="projects" className="projects-image" />
          <a href="#projects" className="projects">
            P
          </a>
        </div>
        <div className="contact-icon">
          <img src={contact} alt="contact" className="contact-image" />
          <a href="#contact" className="contact">
            C
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
