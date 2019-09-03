import axios from 'axios';
const BASE_URL = 'https://www.metaweather.com/api/location';

export const fetchLocationId = async city => {
  const response = await axios.get(`${BASE_URL}/search/?query=${city}`)
  return response.data[0].woeid;
};

export const fetchWeather = async woeid => {
  const response = await axios.get(`${BASE_URL}/${woeid}/`);
  
  const { consolidated_weather, title } = response.data;
  const { the_temp, weather_state_name } = consolidated_weather[0];
  
  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  };
};
