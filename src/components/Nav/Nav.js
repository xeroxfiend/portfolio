import React from "react";

function Nav() {
  return (
    <div className="nav-container">
      <header className="title">Brian Lowe</header>
      <nav className="nav">
        <a href="#about" className="about">
          About
        </a>
        <a href="#skills" className="skills">
          Skills
        </a>
        <a href="#projects" className="projects">
          Projects
        </a>
        <a href="#contact" className="contact">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Nav;
