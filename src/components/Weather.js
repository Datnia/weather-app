import React, { Component } from "react";

class Weather extends Component {
  render() {
    const temp = {
      fontSize: 110,
      fontWeight: 400
    };

    const scale = {
      fontSize: 55,
      fontWeight: 400
    };

    return (
      <div>
        <p style={temp}>
          {this.props.temperature}
          <sup style={scale}>{this.props.scale}</sup>
        </p>
        <h2>{this.props.city}</h2>
        <p>{this.props.description}</p>
        <p className="tempHiLow">
          {this.props.tempHigh} {this.props.tempLow}
        </p>
        <br />
        <p>{this.props.humidity}</p>
        <h2>{this.props.error}</h2>
      </div>
    );
  }
}

export default Weather;
