import React from "react";

function Nav() {
  return (
    <div className="nav-container">
      <header className="title">BL</header>
      <nav className="nav">
        <a href="#about" className="about">
          A
        </a>
        <a href="#skills" className="skills">
          S
        </a>
        <a href="#projects" className="projects">
          P
        </a>
        <a href="#contact" className="contact">
          C
        </a>
      </nav>
    </div>
  );
}

export default Nav;
