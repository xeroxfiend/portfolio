import React, {Component} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";

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
        <p>This is my portfolio!</p>
      </div>
    );
  }
}

export default App;
