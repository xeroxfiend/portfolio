import React from "react";
import watchon from '../../assets/watchon.JPG'

function Projects() {
  return <div id='projects' className="projects-container">
      <span className="projects-title-watchon">WatchOn</span>
      <img onClick={() => window.open('http://watch-on.com')} src={watchon} alt="watch-on" className="watch-on"/>
  </div>;
}

export default Projects;
