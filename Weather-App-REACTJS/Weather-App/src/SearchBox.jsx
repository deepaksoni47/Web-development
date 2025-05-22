import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBox({ onWeatherUpdate }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeatherInfo = async (city) => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      if (data.cod !== 200) throw new Error(data.message);

      const result = {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        description: data.weather[0].description,
        feelsLike: data.main.feels_like,
        icon: data.weather[0].icon,
      };

      onWeatherUpdate(result); // send result to parent
    } catch (error) {
      console.error("Error fetching weather:", error);
      onWeatherUpdate(null);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() !== "") {
      getWeatherInfo(city);
      setCity("");
    }
  };

  return (
    <div>
      <h3>Search for the City</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" startIcon={<SearchIcon />} type='submit'>
          Search
        </Button>
      </form>
    </div>
  );
}
