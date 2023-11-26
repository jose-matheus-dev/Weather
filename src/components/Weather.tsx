import styled from 'styled-components';
import { useSession } from '../hooks';
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import Switch from '@mui/material/Switch';
import { captalize } from '../utils/utils';
import { useState } from 'react';
moment.locale('pt-br');


type StyledSwitchProps = {
  isFahrenheit: boolean;
  isDarkMode: boolean;
  setters: {
    setIsFahrenheit: React.Dispatch<React.SetStateAction<boolean>>;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

type TempProps = {
  $isFahrenheit: boolean;
};

const StyledSwitch = ({ isFahrenheit, isDarkMode, setters }: StyledSwitchProps) => {
  const handleDarkModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setters.setIsDarkMode(event.target.checked);
  };

  const handleTempChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setters.setIsFahrenheit(event.target.checked);
  };
  return (
    <Toggles>
      <div>
        <Switch id="sf" className="switch" checked={isFahrenheit} onChange={handleTempChange} size="medium" />
        <label htmlFor="sf">ºF</label>
      </div>
      <div>
        <Switch id="sd" className="switch" checked={isDarkMode} onChange={handleDarkModeChange} size="medium" />
        <label htmlFor="sd">Dark Mode</label>
      </div>
    </Toggles>
  );
};
export function Weather() {
  const { ...weather } = useSession();
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <WeatherDiv>
      <Wrapper>
        <div>
          <img src={`https://openweathermap.org/img/wn/01n@2x.png`} alt="weather icon" />
          <Temp $isFahrenheit={isFahrenheit}>
            {weather && Math.round(isFahrenheit ? (weather.main.temp * 9) / 5 + 32 : weather.main.temp)}
          </Temp>
        </div>
        <h4>{weather && captalize(weather?.weather[0].description)}</h4>
      </Wrapper>
      <LocalTime>
        <p>{moment.utc(weather?.dt, 'X').add(weather?.timezone, 'seconds').format('DD/MM/YYYY')}</p>
        <p>{captalize(moment.utc(weather?.dt, 'X').add(weather?.timezone, 'seconds').format('dddd, HH:mm'))}</p>
      </LocalTime>
      <StyledSwitch isFahrenheit={isFahrenheit} isDarkMode={isDarkMode} setters={{ setIsFahrenheit, setIsDarkMode }} />
      <p>Todos os direitos reservados. 2023.</p>
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
  div {
    display: flex;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
    }
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
  width: 100%;

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

  > p {
    margin-top: 83px;
    margin-bottom: 23px;
    color: #222;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 200% */
  }
`;
