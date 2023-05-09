import React, { useState } from "react";
import "./Container.css";
import { NotFoundBox, WeatherBox, WeatherDetails } from "../index";
const Containner = () => {
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");
  const [imgSrc, setImgsrc] = useState("");
  const [details, setDetails] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind: "",
  });

  const handleSearch = (event) => {
    const APIKey = "176df7463cc2a2d6c181ac6d9593c768";

    if (value === "") return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === "404") {
          setLocation("not-found");
        } else {
          setLocation("found");
          setDetails({
            temperature: `${parseInt(json.main.temp)}<span>°C</span>`,
            description: `${json.weather[0].description}`,
            humidity: `${json.main.humidity}%`,
            wind: `${parseInt(json.wind.speed)}Km/h`,
          });
          switch (json.weather[0].main) {
            case "Clear":
              setImgsrc("images/clear.png");
              break;

            case "Rain":
              setImgsrc("images/rain.png");
              break;

            case "Snow":
              setImgsrc("images/snow.png");
              break;

            case "Clouds":
              setImgsrc("images/cloud.png");
              break;

            case "Haze":
              setImgsrc("images/mist.png");
              break;

            default:
              setImgsrc("");
          }
        }
      });
  };

  return (
    <div
      className="container"
      style={{
        height:
          location === "found"
            ? "590px"
            : location === "not-found"
            ? "400px"
            : "105px",
      }}
    >
      <div className="search-box">
        <i className="fa-solid fa-location-dot"></i>
        <input
          value={value}
          type="text"
          placeholder="Enter your location"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              handleSearch();
            }
          }}
        />
        <button
          className="fa-solid fa-magnifying-glass"
          onClick={handleSearch}
        ></button>
      </div>

      {location === "not-found" ? (
        <NotFoundBox />
      ) : (
        <>
          <WeatherBox
            imgSrc={imgSrc}
            temperature={details.temperature}
            description={details.description}
          />
          <WeatherDetails humidity={details.humidity} wind={details.wind} />
        </>
      )}
    </div>
  );
};

export default Containner;
