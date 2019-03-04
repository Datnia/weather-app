import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Weather from "./components/Weather";
import "./App.css";
import rain from "./icons/rain.svg";
import sunny from "./icons/sunny.svg";
import partlycloudy from "./icons/partlycloudy.svg";
import cloudy from "./icons/cloudy.svg";
import snow from "./icons/snow.svg";
import tstorm from "./icons/tstorm.svg";
import windy from "./icons/windy.svg";

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
      scale: "",
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
    let f = "°F";
    if (response.cod === "400" || response.cod === "404") {
      this.setState({
        city: "",
        description: "",
        temperature: "",
        tempHigh: "",
        tempLow: "",
        humidity: "",
        scale: "",
        error: "Please enter a valid zip code"
      });
    } else {
      this.setState({
        city: response.name,
        description: response.weather[0].main,
        temperature: Math.round(response.main.temp),
        tempHigh: "Hi: " + Math.round(response.main.temp_max) + "°F |",
        tempLow: "Low: " + Math.round(response.main.temp_min) + "°F",
        humidity: "Humidity: " + response.main.humidity + "%",
        scale: f,
        error: ""
      });
    }
  };

  render() {
    let background;

    if (this.state.description === "Clear") {
      background = sunny;
    } else if (this.state.description === "Rain") {
      background = rain;
    } else if (this.state.description === "Clouds") {
      background = cloudy;
    } else if (this.state.description === "Snow") {
      background = snow;
    } else {
      background =
        "http://probablyprogramming.com/wp-content/uploads/2009/03/handtinywhite.gif";
    }

    return (
      <div className="App">
        <Header />
        <Input loadWeather={this.getWeather} />
        <img src={background} alt="weather-icon" />
        <Weather
          city={this.state.city}
          description={this.state.description}
          temperature={this.state.temperature}
          tempHigh={this.state.tempHigh}
          tempLow={this.state.tempLow}
          humidity={this.state.humidity}
          scale={this.state.scale}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
