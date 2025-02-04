import axios from 'axios';

const API_KEY = '4d8d946562c68ed0413d9d60bb6b6569';
const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

/**
 * Fetch current weather and forecast data for a given location.
 * @param {number} lat - Latitude of the location.
 * @param {number} lon - Longitude of the location.
 * @returns {Promise<Object>} Weather data response from OpenWeather.
 */
export const getWeatherData = async (lat, lon) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric', 
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

/**
 * Fetch geolocation data for a given city name.
 * @param {string} city - City name.
 * @returns {Promise<Object>} Geolocation data including latitude and longitude.
 */
export const getCoordinates = async (city) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
            params: {
                q: city,
                limit: 1,
                appid: API_KEY,
            },
        });
        if (response.data.length === 0) {
            throw new Error('Invalid location.');
        }
        return response.data[0];
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
};
