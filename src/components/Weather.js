import React, { Component } from "react";

class Weather extends Component {
  render() {
    const temp = {
      fontSize: 100,
      marginTop: 40
    };
    return (
      <div>
        <h2>{this.props.city}</h2>
        <p>{this.props.description}</p>
        <p style={temp}>{this.props.temperature}</p>
        {this.props.tempHigh} {this.props.tempLow} {this.props.humidity}
      </div>
    );
  }
}

export default Weather;
