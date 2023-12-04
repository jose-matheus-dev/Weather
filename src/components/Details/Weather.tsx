import styled from 'styled-components';
import { useSession } from '../../hooks';
import { celsiusToFahrenheit, mpsToMph } from '../../utils';

export function WeatherDetails() {
  const { weather, info } = useSession();
  return (
    <WeatherMain>
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
    </WeatherMain>
  );
}

const WeatherMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: min(4.66vh, 100px);
  padding-top: min(4.63vh, 50px);
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: min(5.23vw, 100px);
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
    width: 26.15vw;
    height: 16.79vh;
    flex-shrink: 0;

    p {
      color: #fff;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.09em; 
    }
    h3 {
      color: #fff;
      font-size: 48px;
      font-size: clamp(22px, 3.55vw, 48px);
      font-style: normal;
      font-weight: 600;
      line-height: 0.75em;
    }
  }
  > h4 {
    margin-top: -20px;
    color: #afadad;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
  }

  @media (max-width: 1200px) {
    > div > div {
      margin: auto;
      width: 35%;
    }
    > h4 {
      margin-left: 50px;
    }
  }

  @media (max-width: 768px) {
    > div > div {
      margin: auto;
      width: 45%;
    }
  }
`;
