import React from "react";
import './nav.css'

function Nav() {
  return <div className="nav-container">
      <a href="about" className="about">About</a>
      <a href="skills" className="skills">Skills</a>
      <a href="projects" className="projects">Projects</a>
      <a href="contact" className="contact">Contact</a>
  </div>;
}

export default Nav;
