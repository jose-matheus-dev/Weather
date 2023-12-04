import Swal from 'sweetalert2';
import { useContext } from 'react';
import { WeatherContext, InfoContext } from '../utils/context';

export const useSession = () => {
  const context = useContext(WeatherContext);
  const { weather, setWeather, info } = {
    weather: { ...context },
    setWeather: context?.setWeather,
    info: useContext(InfoContext),
  };

  if (!weather) {
  Swal.fire({
    title: 'Erro!',
    text: 'O contexto do clima é necessário, mas setWeather não está definido!',
    icon: 'error',
    confirmButtonText: 'Ok',
    background: '#333',
    color: '#fff',
  });
  throw new Error('O contexto do clima é necessário, mas não está definido!');
}
  if (!setWeather) {
    Swal.fire({
      title: 'Erro!',
      text: 'O contexto do clima é necessário, mas setWeather não está definido!',
      icon: 'error',
      confirmButtonText: 'Ok',
      background: '#333',
      color: '#fff',
    });
    throw new Error('O contexto do clima é necessário, mas não está definido!');
  }

  if (!info) {
    Swal.fire({
      title: 'Erro!',
      text: 'O contexto de informações é necessário, mas não está definido!',
      icon: 'error',
      confirmButtonText: 'Ok',
      background: '#333',
      color: '#fff',
    });
    throw new Error('O contexto de informações é necessário, mas não está definido!');
  }

  return { weather, setWeather, info };
};
