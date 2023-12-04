import { createContext, useEffect, useState } from 'react';
import { WeatherData } from './protocols';
import { ThemeProvider } from 'styled-components';
import useGeolocation from '../hooks/useGeoLocation';

export type WeatherContextType = WeatherData | null & {
  setWeather?: React.Dispatch<React.SetStateAction<WeatherData | undefined>>;
};

interface ProviderProps {
  children: React.ReactNode;
}

interface InfoContextType {
  isDarkMode: boolean;
  isFahrenheit: boolean;
  setIsFahrenheit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WeatherContext = createContext<WeatherContextType | null>(null);
export const InfoContext = createContext<InfoContextType | null>(null);

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const location = useGeolocation();
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);

  useEffect(() => {
    if (location) console.log(location);
    
  }, []);
  return (
    <WeatherContext.Provider value={{ ...weather, setWeather }}>
      <InfoProvider>{children}</InfoProvider>
    </WeatherContext.Provider>
  );
}

export function InfoProvider({ children }: ProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  return (
    <InfoContext.Provider value={{ isDarkMode, isFahrenheit, setIsDarkMode, setIsFahrenheit }}>
      <ThemeProvider theme={{ isDarkMode }}>{children}</ThemeProvider>
    </InfoContext.Provider>
  );
}
