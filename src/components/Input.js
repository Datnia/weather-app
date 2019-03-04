import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="entry">
        <form onSubmit={this.props.loadWeather}>
          <input type="text" name="zip" placeholder="Enter Zip Code" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Input;
