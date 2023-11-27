import { createContext, useState } from 'react';
import { WeatherData } from './protocols';
import { defaultWeather } from './default';

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


interface WeatherProviderProps {
  children: React.ReactNode;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weather, setWeather] = useState<WeatherData>(defaultWeather);
  return <WeatherContext.Provider value={{ ...weather, setWeather }}>{children}</WeatherContext.Provider>;
}
