import Swal from 'sweetalert2';
import { ForecastData, WeatherData } from './protocols';

export const defaulForecast: ForecastData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1701021600,
      main: {
        temp: 22.82,
        feels_like: 23.38,
        temp_min: 22.82,
        temp_max: 24.12,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 85,
        temp_kf: -1.3,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'algumas nuvens',
          icon: '02d',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 5.96,
        deg: 61,
        gust: 8.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-26 18:00:00',
    },
    {
      dt: 1701032400,
      main: {
        temp: 23.66,
        feels_like: 24.17,
        temp_min: 23.66,
        temp_max: 25.34,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 80,
        temp_kf: -1.68,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nuvens dispersas',
          icon: '03d',
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 7.05,
        deg: 66,
        gust: 8.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-26 21:00:00',
    },
    {
      dt: 1701043200,
      main: {
        temp: 24.55,
        feels_like: 25.02,
        temp_min: 24.55,
        temp_max: 25.42,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 75,
        temp_kf: -0.87,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 6.75,
        deg: 60,
        gust: 7.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-27 00:00:00',
    },
    {
      dt: 1701054000,
      main: {
        temp: 24.72,
        feels_like: 25.15,
        temp_min: 24.72,
        temp_max: 24.72,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.83,
        deg: 55,
        gust: 7.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-27 03:00:00',
    },
    {
      dt: 1701064800,
      main: {
        temp: 24.28,
        feels_like: 24.77,
        temp_min: 24.28,
        temp_max: 24.28,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.88,
        deg: 58,
        gust: 8.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-27 06:00:00',
    },
    {
      dt: 1701075600,
      main: {
        temp: 24.01,
        feels_like: 24.53,
        temp_min: 24.01,
        temp_max: 24.01,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.47,
        deg: 62,
        gust: 7.73,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '3h': 0.32,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-27 09:00:00',
    },
    {
      dt: 1701086400,
      main: {
        temp: 23.71,
        feels_like: 24.23,
        temp_min: 23.71,
        temp_max: 23.71,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.44,
        deg: 71,
        gust: 8.32,
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        '3h': 0.42,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-27 12:00:00',
    },
    {
      dt: 1701097200,
      main: {
        temp: 23.88,
        feels_like: 24.36,
        temp_min: 23.88,
        temp_max: 23.88,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.48,
        deg: 73,
        gust: 9.33,
      },
      visibility: 10000,
      pop: 0.76,
      rain: {
        '3h': 1.26,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-27 15:00:00',
    },
    {
      dt: 1701108000,
      main: {
        temp: 24.15,
        feels_like: 24.58,
        temp_min: 24.15,
        temp_max: 24.15,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.43,
        deg: 67,
        gust: 8.23,
      },
      visibility: 10000,
      pop: 0.8,
      rain: {
        '3h': 0.17,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-27 18:00:00',
    },
    {
      dt: 1701118800,
      main: {
        temp: 25.13,
        feels_like: 25.53,
        temp_min: 25.13,
        temp_max: 25.13,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 6.16,
        deg: 79,
        gust: 6.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-27 21:00:00',
    },
    {
      dt: 1701129600,
      main: {
        temp: 25.25,
        feels_like: 25.63,
        temp_min: 25.25,
        temp_max: 25.25,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 4.78,
        deg: 94,
        gust: 4.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-28 00:00:00',
    },
    {
      dt: 1701140400,
      main: {
        temp: 24.69,
        feels_like: 25.12,
        temp_min: 24.69,
        temp_max: 24.69,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 3.48,
        deg: 94,
        gust: 3.67,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.14,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-28 03:00:00',
    },
    {
      dt: 1701151200,
      main: {
        temp: 23.85,
        feels_like: 24.28,
        temp_min: 23.85,
        temp_max: 23.85,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 1.33,
        deg: 94,
        gust: 1.74,
      },
      visibility: 10000,
      pop: 0.25,
      rain: {
        '3h': 0.21,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-28 06:00:00',
    },
    {
      dt: 1701162000,
      main: {
        temp: 23.48,
        feels_like: 23.89,
        temp_min: 23.48,
        temp_max: 23.48,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 1.52,
        deg: 149,
        gust: 2.09,
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        '3h': 0.11,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-28 09:00:00',
    },
    {
      dt: 1701172800,
      main: {
        temp: 23.53,
        feels_like: 23.92,
        temp_min: 23.53,
        temp_max: 23.53,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 2.57,
        deg: 165,
        gust: 3.49,
      },
      visibility: 10000,
      pop: 0.73,
      rain: {
        '3h': 0.13,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-28 12:00:00',
    },
    {
      dt: 1701183600,
      main: {
        temp: 23.1,
        feels_like: 23.55,
        temp_min: 23.1,
        temp_max: 23.1,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 4.14,
        deg: 199,
        gust: 5.73,
      },
      visibility: 10000,
      pop: 0.79,
      rain: {
        '3h': 1.23,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-28 15:00:00',
    },
    {
      dt: 1701194400,
      main: {
        temp: 23.21,
        feels_like: 23.75,
        temp_min: 23.21,
        temp_max: 23.21,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 3.91,
        deg: 224,
        gust: 5.93,
      },
      visibility: 9275,
      pop: 0.87,
      rain: {
        '3h': 2.39,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-28 18:00:00',
    },
    {
      dt: 1701205200,
      main: {
        temp: 24.37,
        feels_like: 24.85,
        temp_min: 24.37,
        temp_max: 24.37,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'chuva moderada',
          icon: '10d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.59,
        deg: 195,
        gust: 4.6,
      },
      visibility: 10000,
      pop: 0.76,
      rain: {
        '3h': 3.45,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-28 21:00:00',
    },
    {
      dt: 1701216000,
      main: {
        temp: 25.04,
        feels_like: 25.48,
        temp_min: 25.04,
        temp_max: 25.04,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 5.37,
        deg: 152,
        gust: 6.58,
      },
      visibility: 10000,
      pop: 0.64,
      rain: {
        '3h': 0.71,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-29 00:00:00',
    },
    {
      dt: 1701226800,
      main: {
        temp: 24.42,
        feels_like: 24.93,
        temp_min: 24.42,
        temp_max: 24.42,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.02,
        deg: 168,
        gust: 6.15,
      },
      visibility: 10000,
      pop: 0.69,
      rain: {
        '3h': 0.43,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-29 03:00:00',
    },
    {
      dt: 1701237600,
      main: {
        temp: 23.59,
        feels_like: 24.17,
        temp_min: 23.59,
        temp_max: 23.59,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'chuva moderada',
          icon: '10n',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 4.28,
        deg: 179,
        gust: 6.44,
      },
      visibility: 10000,
      pop: 0.96,
      rain: {
        '3h': 3.13,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-29 06:00:00',
    },
    {
      dt: 1701248400,
      main: {
        temp: 23.43,
        feels_like: 24.05,
        temp_min: 23.43,
        temp_max: 23.43,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 4.45,
        deg: 176,
        gust: 6.67,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        '3h': 2.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-29 09:00:00',
    },
    {
      dt: 1701259200,
      main: {
        temp: 23.52,
        feels_like: 24.15,
        temp_min: 23.52,
        temp_max: 23.52,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 4.51,
        deg: 174,
        gust: 6.69,
      },
      visibility: 10000,
      pop: 0.95,
      rain: {
        '3h': 1.02,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-29 12:00:00',
    },
    {
      dt: 1701270000,
      main: {
        temp: 23.37,
        feels_like: 23.96,
        temp_min: 23.37,
        temp_max: 23.37,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 4.89,
        deg: 185,
        gust: 7.02,
      },
      visibility: 10000,
      pop: 0.83,
      rain: {
        '3h': 1.14,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-29 15:00:00',
    },
    {
      dt: 1701280800,
      main: {
        temp: 24.04,
        feels_like: 24.54,
        temp_min: 24.04,
        temp_max: 24.04,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 4.52,
        deg: 177,
        gust: 6.57,
      },
      visibility: 10000,
      pop: 0.65,
      rain: {
        '3h': 0.86,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-29 18:00:00',
    },
    {
      dt: 1701291600,
      main: {
        temp: 25.23,
        feels_like: 25.71,
        temp_min: 25.23,
        temp_max: 25.23,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 4.65,
        deg: 180,
        gust: 6.49,
      },
      visibility: 10000,
      pop: 0.17,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-29 21:00:00',
    },
    {
      dt: 1701302400,
      main: {
        temp: 24.96,
        feels_like: 25.39,
        temp_min: 24.96,
        temp_max: 24.96,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 4.42,
        deg: 161,
        gust: 5.39,
      },
      visibility: 10000,
      pop: 0.13,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-30 00:00:00',
    },
    {
      dt: 1701313200,
      main: {
        temp: 24.18,
        feels_like: 24.72,
        temp_min: 24.18,
        temp_max: 24.18,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 3.39,
        deg: 154,
        gust: 4.45,
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.15,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-30 03:00:00',
    },
    {
      dt: 1701324000,
      main: {
        temp: 24.12,
        feels_like: 24.7,
        temp_min: 24.12,
        temp_max: 24.12,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 3.35,
        deg: 126,
        gust: 4.04,
      },
      visibility: 10000,
      pop: 0.43,
      rain: {
        '3h': 0.21,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-30 06:00:00',
    },
    {
      dt: 1701334800,
      main: {
        temp: 23.69,
        feels_like: 24.28,
        temp_min: 23.69,
        temp_max: 23.69,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.5,
        deg: 132,
        gust: 1.85,
      },
      visibility: 10000,
      pop: 0.39,
      rain: {
        '3h': 0.31,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-30 09:00:00',
    },
    {
      dt: 1701345600,
      main: {
        temp: 23.9,
        feels_like: 24.46,
        temp_min: 23.9,
        temp_max: 23.9,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.09,
        deg: 58,
        gust: 1.9,
      },
      visibility: 10000,
      pop: 0.76,
      rain: {
        '3h': 1.39,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-30 12:00:00',
    },
    {
      dt: 1701356400,
      main: {
        temp: 24.05,
        feels_like: 24.6,
        temp_min: 24.05,
        temp_max: 24.05,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.36,
        deg: 129,
        gust: 1.94,
      },
      visibility: 10000,
      pop: 0.8,
      rain: {
        '3h': 0.18,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-11-30 15:00:00',
    },
    {
      dt: 1701367200,
      main: {
        temp: 23.58,
        feels_like: 24.24,
        temp_min: 23.58,
        temp_max: 23.58,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.33,
        deg: 142,
        gust: 3.97,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 1.52,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-30 18:00:00',
    },
    {
      dt: 1701378000,
      main: {
        temp: 24.2,
        feels_like: 24.74,
        temp_min: 24.2,
        temp_max: 24.2,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.59,
        deg: 138,
        gust: 3.48,
      },
      visibility: 10000,
      pop: 0.5,
      rain: {
        '3h': 0.22,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-11-30 21:00:00',
    },
    {
      dt: 1701388800,
      main: {
        temp: 23.8,
        feels_like: 24.38,
        temp_min: 23.8,
        temp_max: 23.8,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1012,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5,
        deg: 115,
        gust: 5.79,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        '3h': 0.97,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-12-01 00:00:00',
    },
    {
      dt: 1701399600,
      main: {
        temp: 23.28,
        feels_like: 23.83,
        temp_min: 23.28,
        temp_max: 23.28,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.86,
        deg: 128,
        gust: 5.19,
      },
      visibility: 10000,
      pop: 0.9,
      rain: {
        '3h': 1.06,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-12-01 03:00:00',
    },
    {
      dt: 1701410400,
      main: {
        temp: 23.47,
        feels_like: 24.04,
        temp_min: 23.47,
        temp_max: 23.47,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.33,
        deg: 101,
        gust: 4.66,
      },
      visibility: 10000,
      pop: 0.81,
      rain: {
        '3h': 0.15,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-12-01 06:00:00',
    },
    {
      dt: 1701421200,
      main: {
        temp: 23.14,
        feels_like: 23.68,
        temp_min: 23.14,
        temp_max: 23.14,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.14,
        deg: 33,
        gust: 2.73,
      },
      visibility: 10000,
      pop: 0.46,
      rain: {
        '3h': 0.27,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-12-01 09:00:00',
    },
    {
      dt: 1701432000,
      main: {
        temp: 22.85,
        feels_like: 23.41,
        temp_min: 22.85,
        temp_max: 22.85,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.42,
        deg: 45,
        gust: 2.04,
      },
      visibility: 10000,
      pop: 0.7,
      rain: {
        '3h': 0.42,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-12-01 12:00:00',
    },
    {
      dt: 1701442800,
      main: {
        temp: 22.81,
        feels_like: 23.34,
        temp_min: 22.81,
        temp_max: 22.81,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.54,
        deg: 301,
        gust: 1.72,
      },
      visibility: 10000,
      pop: 0.6,
      rain: {
        '3h': 0.98,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-12-01 15:00:00',
    },
  ],
  city: {
    id: 5856195,
    name: 'Honolulu',
    coord: {
      lat: 21.3069,
      lon: -157.8583,
    },
    country: 'US',
    population: 0,
    timezone: -36000,
    sunrise: 1701017367,
    sunset: 1701056905,
  },
};

export const defaultWeather: WeatherData = {
  coord: { lon: -157.8583, lat: 21.3069 },
  weather: [{ id: 200, main: 'Clouds', description: 'nuvens dispersas', icon: '04d' }],
  base: 'stations',
  main: { temp: 25, feels_like: 25.34, temp_min: 23.26, temp_max: 26.9, pressure: 1014, humidity: 77 },
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

export const defaultColors: { [key: string]: string } = {
  Clear: '#FFA500',
  Clouds: '#808080',
  Rain: '#0000FF',
  Snow: '#D3D3D3',
  Thunderstorm: '#800080',
  Drizzle: '#ADD8E6',
  Mist: '#D3D3D3',
};

export const defaultErrors: { [key: string]: string } = {
  "401": "Não autorizado. Por favor, verifique sua chave de API.",
  "404": "Cidade não encontrada. Por favor, verifique o nome da cidade.",
  "429": "Muitas solicitações. Por favor, tente novamente mais tarde.",
  "500": "Erro interno do servidor. Por favor, tente novamente mais tarde.",
  "502": "Erro de gateway ruim. Por favor, tente novamente mais tarde.",
  "503": "Serviço indisponível. Por favor, tente novamente mais tarde.",
  "504": "Tempo limite do gateway. Por favor, tente novamente mais tarde."
}

export const weatherError = (text: string = 'weather error') =>
  Swal.fire({
    title: 'Erro!',
    text,
    icon: 'error',
    confirmButtonText: 'Ok',
    background: '#333',
    color: '#fff',
  });
