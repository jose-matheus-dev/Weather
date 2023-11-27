import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ForecastData, defaulForecast } from '../utils/default';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { openWeather } from '../utils/server';
import moment, { Moment } from 'moment';
import { Footer } from './Footer';
import { useSession } from '../hooks';

type ForecastItem = ForecastData['list'][0] & { dtFormatted: string };

type WeatherChartProps = {
  data: Array<ForecastData['list'][0] & { dtFormatted: string }>;
};

const WeatherChart = ({ data }: WeatherChartProps) => {
  return (
    <LineChart width={1096} height={450} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dtFormatted" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="main.temp" name="Temperatura (°C)" stroke="#8884d8" />
    </LineChart>
  );
};

export function Forecast() {
  const { ...weather } = useSession();
  const [forecast, setForecast] = useState(defaulForecast);

  useEffect(() => {
    if (Object.keys(weather).length !== 0) {
      openWeather
        .getThreeHourForecastByCityId(weather.id)
        .then((forecast) => {
          console.log(forecast);
          setForecast(forecast);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [weather]);

  return (
    <ForecastDiv>
      <WeatherChart
        data={forecast.list.map((w) => ({ ...w, dtFormatted: moment.utc(w.dt, 'X').format('DD/MM (ddd)') }))}
      />
      <Footer />
    </ForecastDiv>
  );
}

const ForecastDiv = styled.div`
  /* background-color: red; */
  width: 1096px;
  height: 100%;
  flex-shrink: 0;
`;
