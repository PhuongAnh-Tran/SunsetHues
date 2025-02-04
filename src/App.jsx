import React, { useState } from 'react';
import { getCoordinates, getWeatherData } from './api/weatherApi';
import { predictSunset } from './utils/sunsetPrediction';
import Form from './components/Form';
import SunsetDisplay from './components/SunsetDisplay';
import './index.css';

const App = () => {
  const [sunsetPrediction, setSunsetPrediction] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (location, selectedDate) => {
    setLoading(true); // start spinner when form is submitted
    try {
      // Get coordinates and weather data 
      const geoData = await getCoordinates(location);
      const { lat, lon } = geoData;
      const weatherData = await getWeatherData(lat, lon);
  
      // Find the forecast for the selected date
      const selectedForecast = weatherData.daily.find(
        (day) => new Date(day.dt * 1000).toISOString().split('T')[0] === selectedDate
      );
  
      if (!selectedForecast) {
        throw new Error('The sky keeps its secrets today. Try again soon—perhaps the sun will speak.');
      }
  
      // Get base prediction details (color, time, gradient)
      const basePrediction = predictSunset(selectedForecast);
  
      // Call the backend endpoint for an AI-generated description
      const response = await fetch('https://sunsethues.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedForecast),
      });
      const data = await response.json();
      const aiDescription = data.description;
  
      // Combine base prediction with AI description
      const prediction = { ...basePrediction, description: aiDescription };
  
      setSunsetPrediction(prediction);
      setError('');
    } catch (err) {
      console.error(err.message);
      setError('The sky keeps its secrets today. Try again soon—perhaps the sun will speak.');
    } finally {
      setLoading(false); //stop spinner when API call is finished
    }
  };  

  return (
    <div className="app-container">
      <h1 class="sacramento-regular">Sunset Hues</h1>
      {loading && <div className="spinner"></div>}
      {error && <p className="error-message">{error}</p>}
      {sunsetPrediction && <SunsetDisplay prediction={sunsetPrediction} />}
      <p class="alice-regular">A sunset forecaster powered by AI so you never miss the sky's next masterpiece.</p>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
