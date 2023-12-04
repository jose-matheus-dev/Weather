import styled from 'styled-components';
import { useSession } from '../../hooks';
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import Switch from '@mui/material/Switch';
import { captalize, celsiusToFahrenheit, defaultColors } from '../../utils';
import { aside } from '../../styles/Responsive/SideBar';
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
          <Temp $bg={defaultColors[weather.weather[0].main]} $isFahrenheit={info.isFahrenheit}>
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
  margin-top: min(8vh, 70px);
  position: relative;
  width: 426px;
  flex-shrink: 0;
  @media (min-width: 1201px) {
    &::after {
      content: '';
      position: absolute;
      width: 395px;
      border-bottom: 5px solid #ededed;
      left: 15.5px;
      right: 0;
      bottom: -5px;
    }
  }
  h4 {
    margin: min(2.78vh, 30px) auto min(3.15vh, 34px);
    font-size: clamp(25.6px, 2.595vw, 32px);
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const Temp = styled.h3<TempProps>`
  display: flex;
  align-items: center;
  width: max-content;
  margin: auto;
  img {
    width: min(22.66%, 150px);
    filter: drop-shadow(0px 0px 1px) drop-shadow(0px 0px 5px);
  }
  color: ${({ $bg }) => ($bg && $bg) || 'black'};
  font-size: clamp(110px, 7.88vw, 150px);
  font-weight: 300;
  line-height: 0.32em;
  letter-spacing: 0em;
  text-align: left;
  &::after {
    content: '${({ $isFahrenheit }) => ($isFahrenheit ? 'ºF' : 'ºC')}';
    position: relative;
    top: -35px;
    font-size: clamp(90px, 5.02vw, 120px);
    font-weight: 300;
    line-height: 0.4em;
    letter-spacing: 0em;
  }
`;

const LocalTime = styled.div`
  margin: min(4.26%, 46px) auto min(4.26%, 46px);

  p {
    color: #222222;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5em;
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
  ${aside.Weather}
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;
