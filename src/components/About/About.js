import React from "react";
import headshot from "../../assets/headshot.jpg";

function About() {
  return (
    <div id="about" className="about-container">
      <p className="bio">
        I'm ultimately a Web Developer, but you can say I'm one of those classic
        examples of people who jumped around with undergrad majors before
        finding my passion. I dabbled in anything ranging from music and
        astronomy, to computer science and math. Web Development was the career
        that brought my dabbling to a screeching halt; this was my calling in
        life. I am passionate about being presented with complicated problems,
        and I find flow in digging in my toes to find the solution, no matter
        how long it takes. I am meticulous, precise, and creative when it comes
        to building clean, beautifully styled, and efficient apps. When I’m not
        coding as a hobby (seriously), my other passions include audiobooks &
        puzzles with my wife, rock climbing, and all things Star Trek. If you
        have any questions, please don’t hesitate to contact me!
      </p>
      <img src={headshot} alt="headshot" className="head-shot" />
    </div>
  );
}

export default About;
