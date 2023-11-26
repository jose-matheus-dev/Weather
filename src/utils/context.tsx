import { createContext, useState } from 'react';
import { WeatherData } from './protocols';

export interface WeatherContextType extends WeatherData {
  setWeather: React.Dispatch<React.SetStateAction<WeatherData>>;
}

/* const defaultWeather: WeatherData = {
  coord: { lon: -35.79, lat: -6.6417 },
  weather: [{ id: 801, main: 'Clouds', description: 'algumas nuvens', icon: '02n' }],
  base: 'stations',
  main: {
    temp: 19.96,
    feels_like: 20.15,
    temp_min: 19.96,
    temp_max: 19.96,
    pressure: 1013,
    humidity: 82,
    sea_level: 1013,
    grnd_level: 952,
  },
  visibility: 10000,
  wind: { speed: 5.48, deg: 138, gust: 10.67 },
  clouds: { all: 14 },
  dt: 1700970605,
  sys: { country: 'BR', sunrise: 1700985407, sunset: 1701030260 },
  timezone: -10800,
  id: 3404306,
  name: 'Cacimba de Dentro',
  cod: 200,
}; */

const defaultWeather = {
  coord: { lon: -157.8583, lat: 21.3069 },
  weather: [{ id: 802, main: 'Clouds', description: 'nuvens dispersas', icon: '03n' }],
  base: 'stations',
  main: { temp: 31, feels_like: 25.34, temp_min: 23.26, temp_max: 26.9, pressure: 1014, humidity: 77 },
  visibility: 10000,
  wind: { speed: 3.09, deg: 60 },
  clouds: { all: 40 },
  dt: 1700971944,
  sys: { type: 2, id: 2010198, country: 'US', sunrise: 1700930928, sunset: 1700970507 },
  timezone: -36000,
  id: 5856195,
  name: 'Honolulu',
  cod: 200,
};

interface WeatherProviderProps {
  children: React.ReactNode;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weather, setWeather] = useState<WeatherData>(defaultWeather);
  return <WeatherContext.Provider value={{ ...weather, setWeather }}>{children}</WeatherContext.Provider>;
}
