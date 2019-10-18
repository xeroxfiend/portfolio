import React, {Component} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

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
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
