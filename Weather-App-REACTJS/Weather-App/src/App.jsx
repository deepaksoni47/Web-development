import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './App.css'; // Assuming you have some styles in App.css

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherUpdate = (data) => {
    setWeatherData(data);
  };

  return (
    <div >
      <h1>Weather App</h1>
      <SearchBox onWeatherUpdate={handleWeatherUpdate} />
      <InfoBox weatherData={weatherData} />
    </div>
  );
}
