import {useState } from "react";
import './App.css';

function App() {
const apiKey = "202129129fac50b32afdaf1cf5be080d"

const [weatherData, setWeatherData] = useState([{}]);
const [city, setCity] = useState("")

  
const getWeather = (event) => {
  if (event.key === 'Enter') {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
        }
      )
  }
}

  return (
    <div className="App">
      <div className="Card">
        <div>
          <input
      className="Search"
      placeholder="Enter City..."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      /></div>
    
    {typeof weatherData.main === "undefined" ? (
      <div>
        <p>Welcome to the weather app!</p>
      </div>
    ) : (
      <div>
        <p>{weatherData.name}</p>
        <p>{Math.round(weatherData.main.temp)} °C</p>
        <p>{weatherData.weather[0].main}</p>
      </div>
    )
    }
    </div>
    </div>
  );
}

export default App;
