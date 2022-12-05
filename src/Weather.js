import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "81c95f81174bafa543a7ffc89b06ec2a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="d-flex">
      <input type="search" onChange={updateCity} className="form-control" />
      <a href="/" onClick={handleSubmit}>
        <button type="submit" className="btn btn-outline-success">
          Search
        </button>
      </a>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    return form;
  }
}
