import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import casaco from '/casaco.svg';
import { Weather } from './Weather';
import { openWeather } from '../utils/server';
import { useSession } from '../hooks';
import { useEffect, useState } from 'react';
import { WeatherData, weatherError } from '../utils';
type LocationState = {
  latitude: number;
  longitude: number;
};

function Search() {
  const {
    weather: { setWeather },
  } = useSession();
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

export function SideBar() {
  return (
    <SideBarContainer>
      <Title>
        <img src={casaco} alt="" />
        <h2>Levo um casaquinho?</h2>
      </Title>
      <Search />
      <Weather />
      <h4>Todos os direitos reservados. 2023.</h4>
    </SideBarContainer>
  );
}

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  img {
    width: 120px;
    height: 120px;
  }
  h2 {
    width: 416px;
    height: 96px;
    font-size: 62px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
  }
  margin-bottom: 64px;
`;

const SearchForm = styled.form`
  position: relative;
  margin-left: 85px;

  input {
    width: 500px;
    height: 80px;
    border-radius: 24px;
    box-shadow: 0px 24px 48px 0px #314f7c14;
    background-color: ${({ theme }) => (theme.isDarkMode ? '#424242' : '#ededef')};
    color: ${({ theme }) => (theme.isDarkMode ? '#ededef' : '#424242')};

    padding-left: 67px;
    font-size: 22px;
    letter-spacing: 0em;
    &::placeholder {
      height: max-content;
      width: max-content;
      font-family: 'Montserrat', sans-serif;
      font-size: 22px;
      letter-spacing: 0em;
      color: ${({ theme }) => (theme.isDarkMode ? '#ededef' : '#424242')};
    }
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

const SideBarContainer = styled.aside`
  position: relative;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#000000' : '#ffffff')};
  padding-top: 40px;
  margin-right: 50px;
  width: 662px;
  min-height: max-content;
  > h4 {
    width: max-content;
    position: absolute;
    left: -20px;
    right: 0px;
    margin: auto;
    bottom: 23px;
    color: #222;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 200% */
  }
`;
