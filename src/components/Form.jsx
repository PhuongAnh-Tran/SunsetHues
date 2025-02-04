import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '4d8d946562c68ed0413d9d60bb6b6569';
const GEO_API_URL = 'https://api.openweathermap.org/geo/1.0/direct';

const Form = ({ onSubmit }) => {
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(GEO_API_URL, {
        params: {
          q: query,
          limit: 5,
          appid: API_KEY,
        },
      });
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    fetchSuggestions(value);
  };

  const handleSelectSuggestion = (suggestion) => {
    setLocation(suggestion.name);
    setSuggestions([]);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location && selectedDate) {
      onSubmit(location, selectedDate);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="location-field">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={handleLocationChange}
          className="form-input"
          required
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion.name}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="date-field">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="form-button">
        Predict
      </button>
    </form>
  );
};

export default Form;
