import { useContext } from 'react';
import { WeatherContext, InfoContext } from '../utils/context';

export const useSession = () => {
  const { weather, info } = { weather: useContext(WeatherContext), info: useContext(InfoContext) };
  if (!weather) throw 'weather is required, but is not defined!';
  if (!info) throw 'info is required, but is not defined!';

  return { weather, info };
};
