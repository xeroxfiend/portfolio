import React from "react";

function Nav() {
  return (
    <div className="nav-container">
      <header className="title">BL</header>
      <nav className="nav">
        <div className="about-icon">
          <img
            src="https://www.iconsdb.com/icons/preview/white/about-xxl.png"
            alt=""
            className="about-image"
          />
          <a href="#about" className="about">
            A
          </a>
        </div>
        <div className="skills-icon">
        <img
            src="https://www.iconsdb.com/icons/preview/white/about-xxl.png"
            alt=""
            className="skills-image"
          />
          <a href="#skills" className="skills">
            S
          </a>
        </div>
        <div className="projects-icon">  
        <img
            src="https://www.iconsdb.com/icons/preview/white/about-xxl.png"
            alt=""
            className="projects-image"
          />
          <a href="#projects" className="projects">
            P
          </a>
        </div>
        <div className="contact-icon">
        <img
            src="https://www.iconsdb.com/icons/preview/white/about-xxl.png"
            alt=""
            className="contact-image"
          />
          <a href="#contact" className="contact">
            C
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
