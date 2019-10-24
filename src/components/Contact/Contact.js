import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <header className="contact-me">Contact me!</header>
      <span onClick={() => window.open("https://github.com/xeroxfiend")}>
        GitHub: github.com/xeroxfiend
      </span>
      <span
        onClick={() => window.open("mailto:brianchristopherlowe@gmail.com")}
      >
        Email: brianchristopherlowe@gmail.com
      </span>
      <span
        onClick={() =>
          window.open("https://www.linkedin.com/in/brian-christopher-lowe/")
        }
      >
        LinkedIn: linkedin.com/in/brian-christopher-lowe
      </span>
      <a href="tel:8014490173">Phone: (801) 449-0173</a>
    </div>
  );
}

export default Contact;
