import React, { useState } from 'react';


const WeatherDashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState('Yaoundé');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const locations = [
    'Yaoundé', 'Douala', 'Bamenda', 'Buea', 'Garoua',
    'Maroua', 'Ngaoundéré', 'Bertoua', 'Ebolowa', 'Limbe', 
    'Mamfe', 'Edea', 'Sagmalema', ''
  ];

  const fetchWeatherData = async () => {
    const apiKey = "f1df449b7bb1441395f155215252507 ";
    const apiUrl = "http://api.weatherapi.com/v1/current.json";

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(
        `${apiUrl}?key=${apiKey}&q=${encodeURIComponent(selectedLocation)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Cameroon Weather Dashboard</h1>
      <div className="controls">
        <label htmlFor="locationSelect">Select Location:</label>
        <select 
          id="locationSelect"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
        <button 
          onClick={fetchWeatherData}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Get Weather Data'}
        </button>
      </div>

      <div className="weather-results">
        {isLoading && <p>Fetching weather data...</p>}
        {error && <p className="error">Error: {error}</p>}
        {weatherData && <WeatherCard weatherData={weatherData} />}
        {!weatherData && !isLoading && !error && (
          <p>Select a location and click "Get Weather Data"</p>
        )}
      </div>
    </div>
  );
};

const WeatherCard = ({ weatherData }) => {
  if (!weatherData?.location) return <p>No weather data available.</p>;

  const { current: weather, location } = weatherData;

  return (
    <div className="weather-card">
      <h3>{location.name}, {location.country}</h3>
      <div className="weather-info">
        <p><strong>Temperature:</strong> {weather.temp_c}°C ({weather.temp_f}°F)</p>
        <p><strong>Condition:</strong> {weather.condition.text}</p>
        <p><strong>Humidity:</strong> {weather.humidity}%</p>
        <p><strong>Wind:</strong> {weather.wind_kph} kph ({weather.wind_mph} mph)</p>
        <p><strong>Local Time:</strong> {location.localtime}</p>
      </div>
      <img src={weather.condition.icon} alt={weather.condition.text} />
    </div>
  );
};

export default WeatherDashboard