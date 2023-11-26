import axios from 'axios';
import OpenWeatherMap from 'openweathermap-ts';

export const openWeatherAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    appid: import.meta.env.VITE_API_KEY,
    units: 'metrics',
    lang: 'pt_br',
  }
});

export const openWeather = new OpenWeatherMap({
  apiKey: import.meta.env.VITE_API_KEY,
  language: 'pt_br',
  units: 'metric',
});