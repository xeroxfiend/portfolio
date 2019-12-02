import React from "react";
import headshot from '../../assets/headshot.jpg'

function About() {
  return (
    <div id="about" className="about-container">
      <p className="bio">
        Hello, my name is Brian! You can say that I’m one of those classic
        examples of people who go to college and jump around with their majors,
        trying to find a career path that sticks. I explored music and
        astronomy, dabbled in computer science, and excelled in math. However,
        nothing I studied compelled me enough to continue exploring until I
        discovered web development. Once I immersed myself in the work, I knew
        immediately that this was my calling. My years of QA experience prepared
        me to be precise, meticulous, and creative in the coding process. I love
        being presented with complicated problems, and I find flow in digging in
        my toes to find the solution, no matter how long it takes. I have a
        passion for building clean, beautifully styled, and efficient apps. When
        I’m not coding as a hobby (seriously), my other passions include
        audiobooks & puzzles with my wife, rock climbing, and all things Star
        Trek. If you have any questions, please don’t hesitate to contact me!
      </p>
      <img src={headshot} alt='headshot' className="head-shot"/>
    </div>
  );
}

export default About;
