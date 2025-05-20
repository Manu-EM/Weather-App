import React from "react";
import "./Weather.css";

import searchIcon from "../assets/search.png";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";
import humidityIcon from "../assets/humidity.png";

const Weather = () => {
  const search = async(city) =>{
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`
    } 
    catch (error){

    }
  }
  return (
    <div>
      <div className="weather">
        <div className="search-bar">
          <input type="text" placeholder="search" />
          <img src={searchIcon} alt="" />
        </div>
        <img className="weather-icon" src={clearIcon} alt="" />
        <p className="temperature">16</p>
        <p className="location">Delhi</p>

        <div className="weather-data">
          <div className="col">
            <img src={humidityIcon} alt="" />
            <div>
              <p>91%</p>
              <span>Humidity</span>
            </div>
          </div>

          <div className="col">
            <img src={windIcon} alt="" />
            <div>
              <p>2.6</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
