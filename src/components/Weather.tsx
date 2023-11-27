import styled from 'styled-components';
import { useSession } from '../hooks';
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import Switch from '@mui/material/Switch';
import { captalize, celsiusToFahrenheit, defaultColors } from '../utils';
import { mpsToMph } from '../utils/utils';
import { Footer } from './Footer';
moment.locale('pt-br');

type TempProps = {
  $isFahrenheit: boolean;
  $bg: string;
};

const StyledSwitch = () => {
  const { info } = useSession();

  const handleDarkModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    info.setIsDarkMode(event.target.checked);
  };

  const handleTempChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    info.setIsFahrenheit(event.target.checked);
  };
  return (
    <Toggles>
      <div>
        <Switch id="sf" className="switch" checked={info.isFahrenheit} onChange={handleTempChange} size="medium" />
        <label htmlFor="sf">ºF</label>
      </div>
      <div>
        <Switch id="sd" className="switch" checked={info.isDarkMode} onChange={handleDarkModeChange} size="medium" />
        <label htmlFor="sd">Dark Mode</label>
      </div>
    </Toggles>
  );
};
export function Weather() {
  const { weather, info } = useSession();

  return (
    <WeatherDiv>
      <Wrapper>
        <div>
          <Temp $bg={defaultColors[weather.weather[0].id]} $isFahrenheit={info.isFahrenheit}>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            {weather && Math.round(info.isFahrenheit ? celsiusToFahrenheit(weather.main.temp) : weather?.main.temp)}
          </Temp>
        </div>
        <h4>{weather?.weather && captalize(weather.weather[0].description)}</h4>
      </Wrapper>
      <LocalTime>
        <p>{moment.utc(weather?.dt, 'X').add(weather?.timezone, 'seconds').format('DD/MM/YYYY')}</p>
        <p>{captalize(moment.utc(weather?.dt, 'X').add(weather?.timezone, 'seconds').format('dddd, HH:mm'))}</p>
      </LocalTime>
      <StyledSwitch />
    </WeatherDiv>
  );
}

const Wrapper = styled.div`
  margin: auto;
  margin-top: 70px;
  position: relative;
  width: 426px;
  flex-shrink: 0;
  &::after {
    content: '';
    position: absolute;
    width: 395px;
    border-bottom: 5px solid #ededed;
    left: 15.5px;
    right: 0;
    bottom: -5px;
  }
  h4 {
    margin: 30px auto 34px;
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const Temp = styled.h3<TempProps>`
  display: flex;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
  }
  width: 100%;
  color: ${({ $bg }) => ($bg && $bg) || 'black'};
  font-size: 150px;
  font-weight: 300;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  &::after {
    content: '${({ $isFahrenheit }) => ($isFahrenheit ? 'ºF' : 'ºC')}';
    position: relative;
    top: -35px;
    height: 95px;
    width: 144px;
    font-size: 120px;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 0em;
  }
`;

const LocalTime = styled.div`
  margin-top: 46px;
  margin-bottom: 46px;
  p {
    color: #222222;
    font-size: 24px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const Toggles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: max-content;
  height: max-content;
  margin: auto;
  > div {
    display: flex;
    align-items: center;
    gap: 40px;
    label {
      width: 100%;
      text-align: left;
    }
  }

  .switch {
    padding: 10px;
    color: #e9e9ea;
  }
`;

const WeatherDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;

export function WeatherDetails() {
  const { weather, info } = useSession();

  return (
    <WeatherDetailsDiv>
      <div>
        <div>
          <p>Mínima</p>
          <h3>
            {Math.round(info.isFahrenheit ? celsiusToFahrenheit(weather.main.temp_min) : weather.main.temp_min)}º
            {info.isFahrenheit ? 'F' : 'C'}
          </h3>
        </div>
        <div>
          <p>Máxima</p>
          <h3>
            {Math.round(info.isFahrenheit ? celsiusToFahrenheit(weather.main.temp_max) : weather.main.temp_max)}º
            {info.isFahrenheit ? 'F' : 'C'}
          </h3>
        </div>
      </div>
      <div>
        <div>
          <p>Umidade</p>
          <h3>{weather.main.humidity}%</h3>
        </div>
        <div>
          <p>Velocidade do vento</p>
          <h3>{info.isFahrenheit ? `${mpsToMph(weather.wind.speed).toFixed(2)} mph` : `${weather.wind.speed} m/s`}</h3>
        </div>
      </div>
      <h4>
        {weather.main.temp < 17 || weather.main.temp_min < 17 || weather.main.temp_max < 17
          ? 'Sim, você deve levar um casaquinho!'
          : 'Não, você não deve levar um casaquinho!'}
      </h4>
      <Footer />
    </WeatherDetailsDiv>
  );
}

const WeatherDetailsDiv = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 50px;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 100px;
  }
  > div > div {
    display: flex;
    gap: 13px;
    justify-content: center;
    flex-direction: column;
    padding-left: 45px;
    border-radius: 32px;
    background: linear-gradient(117deg, #4d4494 22.83%, #4f43ae 90.03%);
    box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);
    width: 500px;
    height: 180px;
    flex-shrink: 0;

    p {
      color: #fff;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 109.091% */
    }
    h3 {
      color: #fff;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 36px; /* 75% */
    }
  }
  h4 {
    color: #afadad;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px; /* 200% */
  }
`;
