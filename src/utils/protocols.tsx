interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  temp_kf?: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Rain {
  '1h': number;
  '3h'?: number;
}
interface Snow {
  '1h'?: number;
  '3h'?: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population?: number;
  sunrise?: number;
  sunset?: number;
  timezone: number;
}

interface ForecastItem {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: 0;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
  snow?: Snow;
}

export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  rain?: Rain;
  snow?: Snow;
}

export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}
