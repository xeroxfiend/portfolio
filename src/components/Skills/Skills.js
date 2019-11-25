import React from "react";

function Skills() {
  return (
    <div id="skills" className="skills-container">
      <span className='skills-title'>Skills</span>
      <div className="icons">
        <div className="icon-container">
          <i className="devicon-react-original colored">
            <p className="title">React</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-javascript-plain colored">
            <p className="title">JavaScript</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-nodejs-plain colored">
            <p className="title">Node.js</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-express-original colored">
            <p className="title">Express</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-typescript-plain colored">
            <p className="title">TypeScript</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-css3-plain colored">
            <p className="title">CSS3</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-git-plain colored">
            <p className="title">Git</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-github-plain colored">
            <p className="title">GitHub</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-html5-plain colored">
            <p className="title">HTML5</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-heroku-plain colored">
            <p className="title">Heroku</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-postgresql-plain colored">
            <p className="title-postgres">PostgreSQL</p>
          </i>
        </div>
        <div className="icon-container">
          <i className="devicon-sass-original colored">
            <p className="title">Sass</p>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
