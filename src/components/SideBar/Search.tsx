import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { openWeather } from '../../utils/server';
import { useSession } from '../../hooks';
import { useEffect, useState } from 'react';
import { WeatherData, weatherError } from '../../utils';
import { aside } from '../../styles/Responsive/SideBar';

type LocationState = {
  latitude: number;
  longitude: number;
};

export function Search() {
  const { weather: { setWeather } } = useSession();
  const [value, setValue] = useState('');
  const [location, setLocation] = useState<LocationState | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      weatherError('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (location)
      openWeather
        .getCurrentWeatherByGeoCoordinates(location.latitude, location.longitude)
        .then((weather: WeatherData) => {
          if ([401, 404, 429, 500, 502, 503, 504].includes(Number(weather.cod))) weatherError(weather.message);
          else setWeather(weather);
        })
        .catch((err: Error) => weatherError(err.message || 'Houve um problema ao se conectar à API weather.'));
  }, [location]);
  const press = (e: React.FormEvent) => {
    e.preventDefault();
    openWeather
      .getCurrentWeatherByCityName({
        cityName: value,
      })
      .then((weather: WeatherData) => {
        if ([401, 404, 429, 500, 502, 503, 504].includes(Number(weather.cod))) weatherError(weather.message);
        else setWeather(weather);
      })
      .catch((err: Error) => weatherError(err.message || 'Houve um problema ao se conectar à API weather.'));
  };
  return (
    <SearchForm onSubmit={press}>
      <StyledBiSearchAlt2 />
      <input
        type="text"
        placeholder="Procure por uma cidade"
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        required
      />
    </SearchForm>
  );
}
const SearchForm = styled.form`
  position: relative;
  text-align: center;

  input {
    ${aside.Search};
    border-radius: 24px;
    box-shadow: 0px 24px 48px 0px #314f7c14;
    background-color: ${({ theme }) => (theme.isDarkMode ? '#424242' : '#ededef')};
    color: ${({ theme }) => (theme.isDarkMode ? '#ededef' : '#424242')};

    font-size: 22px;
    letter-spacing: 0em;
    &::placeholder {
      height: max-content;
      width: max-content;
      font-family: 'Montserrat', sans-serif;
      font-size: 22px;
      padding-left: 72px;
      letter-spacing: 0em;
      color: ${({ theme }) => (theme.isDarkMode ? '#ededef' : '#424242')};
    }
  }
  @media (min-width: 768px) {
    margin: auto;
  
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const StyledBiSearchAlt2 = styled(BiSearchAlt2)`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  color: #8b9caf;
  width: 36.7px;
  height: 40px;
  border-radius: 16px;
  z-index: 1;
  margin-left: 18.35px;
`;
