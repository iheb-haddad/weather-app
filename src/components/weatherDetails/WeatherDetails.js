import React from 'react'
import "./WeatherDetails.css"
const WeatherDetails = (props) => {
  return (
    <div className="weather-details fadeIn">
    <div className="humidity">
      <i className="fa-solid fa-water"></i>
      <div className="text">
        <span>{props.humidity}</span>
        <p>Humidity</p>
      </div>
    </div>
    <div className="wind">
      <i className="fa-solid fa-wind"></i>
      <div className="text">
        <span>{props.wind}</span>
        <p>Wind Speed</p>
      </div>
    </div>
  </div>
  )
}

export default WeatherDetails