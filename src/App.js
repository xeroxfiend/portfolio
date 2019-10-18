import React, {Component} from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: ""
    };
  }
  render() {
    return <div className="App">This is my portfolio!</div>;
  }
}

export default App;
