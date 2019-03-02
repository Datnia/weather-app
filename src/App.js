import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Weather from "./components/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Input />
        <Weather />
      </div>
    );
  }
}

export default App;
