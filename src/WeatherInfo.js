import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          Description: {props.data.description}
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={52} />

          <span className="temperature">{props.data.temperature}</span>
          <span className="unit"> C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Pressure: {props.data.pressure}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      <ul>
        <li>Temperature: {props.data.temperature} C</li>
        <li>Description: {props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
        <li>
          <img src={props.data.icon} alt={props.data.description} />
        </li>
      </ul>
    </div>
  );
}
