import React from 'react';
import './WeatherDisplay.css';
import sunIcon from './assets/sun.png';

const WeatherDisplay = ({ weatherData }) => {
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return currentDate.toLocaleString('en-US', options).replace(/\//g, '-');
  };

  return (
    <div className='parent-container'>
      <div className='weather-box'>
        {weatherData && (
          <div className='weather-content'>
            <img src={sunIcon} alt="Weather Icon" className="weather-image" />
            <p>Today's Weather</p>
            <h1 className='mainTemp'>{weatherData.main.temp}°</h1>
            <p className='high-low'>
              H: {weatherData.main.temp_max}°, L: {weatherData.main.temp_min}°
            </p>
            <div className='weather-info'>
            <span className='weather-data-name'>
              {weatherData.name}, {weatherData.sys.country}
            </span>
            <div className='weather-small-info'>

            <span>
              {getCurrentDateTime()} 
            </span>
            <span>
              Humidity:{' '}
              {weatherData.main.humidity}%
            </span>
            <span>{weatherData.weather[0].description}</span>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;