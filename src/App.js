import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = React.useState();
  const [search, setSearch] = React.useState("");
  const [location, setLocation] = React.useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bf18d1e1ab9cadf23a3111411b0ca0bf`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [location]);

  function test(event) {
    if (event.key === "Enter") {
      setLocation(search);
      setSearch("");
    }
  }
  console.log(data);
  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <input
            className="searchBtn"
            type="text"
            placeholder="Enter Location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={test}
          />
        </div>
        <div className="top">
          <div className="main-info-left-section">
            <p>{data && data.name}</p>
            <p className="temp">
              {data && (data.main.temp - 272.15).toFixed()}°C
            </p>
          </div>
          <div className="main-info-right-section">
            <p>{data && data.weather[0].main}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="">
            <p>{data && (data.main.feels_like - 272.15).toFixed()}°C</p>
            <p>Feels Like</p>
          </div>
          <div className="">
            <p>{data && data.main.humidity}</p>
            <p>humidity</p>
          </div>
          <div className="">
            <p>{data && data.wind.speed}MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
