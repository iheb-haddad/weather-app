import React from 'react'
import "./WeatherBox.css"
const WeatherBox = (props) => {
  return (
    <div className="weather-box fadeIn">
    <img alt="" src={props.imgSrc} />
    <p
      className="temperature"
      dangerouslySetInnerHTML={{ __html: props.temperature }}
    ></p>
    <p className="description">{props.description}</p>
  </div>
  )
}

export default WeatherBox