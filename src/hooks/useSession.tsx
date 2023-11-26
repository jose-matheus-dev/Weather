import { useContext } from 'react';
import { WeatherContext } from '../utils/context';

export const useSession = () => {
  const session = useContext(WeatherContext);
  if (!session) {
    throw new Error('Session is undefined');
  }
  return session;
};
