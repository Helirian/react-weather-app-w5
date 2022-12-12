import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  // let [loaded, setLoaded] = useState(false);
  // let [weather, setWeather] = useState(null);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      coordinates: response.data.coord,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      // icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "81c95f81174bafa543a7ffc89b06ec2a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  let form = (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="search"
        onChange={updateCity}
        className="form-control"
        placeholder="Enter a city"
        aria-label="Search"
      />
      <a href="/" onClick={handleSubmit}>
        <button type="submit" className="btn btn-outline-success">
          Search
        </button>
      </a>
    </form>
  );

  if (weather.ready) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return form;
  }
}
