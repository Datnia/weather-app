import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.loadWeather}>
          <input type="text" name="zip" placeholder="Enter Zip code" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Input;
