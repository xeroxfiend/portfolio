import React, {Component} from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="sections">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
