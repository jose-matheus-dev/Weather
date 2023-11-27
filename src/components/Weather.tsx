import styled from 'styled-components';
import { useSession } from '../hooks';
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import Switch from '@mui/material/Switch';
import { captalize, celsiusToFahrenheit } from '../utils';
moment.locale('pt-br');

type TempProps = {
  $isFahrenheit: boolean;
  $bg: string;
};

const colors: { [key: string]: string } = {
  '200': 'purple', // thunderstorm with light rain
  '201': 'purple', // thunderstorm with rain
  '202': 'purple', // thunderstorm with heavy rain
  '210': 'purple', // light thunderstorm
  '211': 'purple', // thunderstorm
  '212': 'purple', // heavy thunderstorm
  '221': 'purple', // ragged thunderstorm
  '230': 'purple', // thunderstorm with light drizzle
  '231': 'purple', // thunderstorm with drizzle
  '232': 'purple', // thunderstorm with heavy drizzle
  '300': 'lightblue', // light intensity drizzle
  '301': 'lightblue', // drizzle
  '302': 'lightblue', // heavy intensity drizzle
  '310': 'lightblue', // light intensity drizzle rain
  '311': 'lightblue', // drizzle rain
  '312': 'lightblue', // heavy intensity drizzle rain
  '313': 'lightblue', // shower rain and drizzle
  '314': 'lightblue', // heavy shower rain and drizzle
  '321': 'lightblue', // shower drizzle
  '500': 'blue', // light rain
  '501': 'blue', // moderate rain
  '502': 'blue', // heavy intensity rain
  '503': 'blue', // very heavy rain
  '504': 'blue', // extreme rain
  '511': 'lightgray', // freezing rain
  '520': 'lightblue', // light intensity shower rain
  '521': 'lightblue', // shower rain
  '522': 'lightblue', // heavy intensity shower rain
  '531': 'lightblue', // ragged shower rain
  '600': 'lightgray', // light snow
  '601': 'lightgray', // snow
  '602': 'lightgray', // heavy snow
  '611': 'lightgray', // sleet
  '612': 'lightgray', // light shower sleet
  '613': 'lightgray', // shower sleet
  '615': 'lightgray', // light rain and snow
  '616': 'lightgray', // rain and snow
  '620': 'lightgray', // light shower snow
  '621': 'lightgray', // shower snow
  '622': 'lightgray', // heavy shower snow
  '701': 'lightgray', // mist
  '711': 'lightgray', // smoke
  '721': 'lightgray', // haze
  '731': 'lightgray', // sand/dust whirls
  '741': 'lightgray', // fog
  '751': 'lightgray', // sand
  '761': 'lightgray', // dust
  '762': 'lightgray', // volcanic ash
  '771': 'lightgray', // squalls
  '781': 'lightgray', // tornado
  '800': 'orange', // clear sky
  '801': 'gray', // few clouds: 11-25%
  '802': 'gray', // scattered clouds: 25-50%
  '803': 'gray', // broken clouds: 51-84%
  '804': 'gray', // overcast clouds: 85-100%
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
          <Temp $bg={colors[weather.weather[0].id]} $isFahrenheit={info.isFahrenheit}>
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
