import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Weather from "./components/Weather";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      description: "",
      temperature: "",
      tempHigh: "",
      tempLow: "",
      humidity: "",
      error: ""
    };
  }

  getWeather = async e => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=8f77ea73528fb49aa1fd3ee84d28f2b7&units=imperial`
    );
    const response = await api_call.json();
    console.log(response);
    this.setState({
      city: response.name,
      description: response.weather[0].main,
      temperature: Math.round(response.main.temp) + "°F",
      tempHigh: Math.round(response.main.temp_max) + "°F",
      tempLow: Math.round(response.main.temp_min) + "°F",
      humidity: "Humidity:" + response.main.humidity
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Input loadWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          description={this.state.description}
          temperature={this.state.temperature}
          tempHigh={this.state.tempHigh}
          tempLow={this.state.tempLow}
          humidity={this.state.humidity}
        />
      </div>
    );
  }
}

export default App;
