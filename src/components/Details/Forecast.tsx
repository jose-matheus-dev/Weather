import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, TooltipProps, ResponsiveContainer } from 'recharts';
import { openWeather } from '../../utils/server';
import moment from 'moment';
import { useSession } from '../../hooks';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ForecastData, celsiusToFahrenheit, defaulForecast, weatherError } from '../../utils';

type WeatherChartProps = {
  data: Array<ForecastData['list'][0] & { dtFormatted: string }>;
};

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
  const { info } = useSession();
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <h3>{payload[0].payload.dtFormatted}</h3>
        <p>
          {info.isFahrenheit
            ? `${celsiusToFahrenheit(Number(payload[0].value))?.toFixed(2)}ºF`
            : `${payload[0].value}ºC`}
        </p>
      </TooltipContainer>
    );
  }

  return null;
};

const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#494949' : '#efefef')};
  padding: 5px;
  border-radius: 15px;
  height: 87px;
  gap: 10px;
  > h3 {
    margin-top: 10px;
  }
  > p {
    margin-bottom: 15px;

    align-self: start;
    color: #554494;
  }
`;

const WeatherChart = ({ data }: WeatherChartProps) => {
  const { info } = useSession();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dtFormatted" stroke={info.isDarkMode ? '#ececec' : undefined} />
        <YAxis
          tickFormatter={(tick: string) => (info.isFahrenheit ? `${celsiusToFahrenheit(Number(tick))}ºF` : `${tick}ºC`)}
          stroke={info.isDarkMode ? '#ececec' : undefined}
        />
        <Tooltip content={CustomTooltip} />
        <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export function ForecastDetails() {
  const { weather } = useSession();
  const [forecast, setForecast] = useState(defaulForecast);

  useEffect(() => {
    if (Object.keys(weather).length !== 0) {
      openWeather
        .getThreeHourForecastByCityId(weather.id)
        .then((forecast) => {
          if ([401, 404, 429, 500, 502, 503, 504].includes(Number(weather.cod))) weatherError(weather.message);
          else setForecast(forecast);
        })
        .catch((err: Error) => weatherError(err.message || 'Houve um problema ao se conectar à API weather forecast.'));
    }
  }, [weather]);

  return (
    <ForecastMain>
      <WeatherChart
        data={forecast.list.map((w) => ({ ...w, dtFormatted: moment.utc(w.dt, 'X').format('DD/MM (ddd)') }))}
      />
    </ForecastMain>
  );
}

const ForecastMain = styled.main`
  margin-top: min(5.93vh, 64px);
  background-color: ${({ theme }) => (theme.isDarkMode ? '#000000 !important' : '#ffffff')};
  padding: min(5vh, 25px) 0px;
  width: 57.56vw;
  height: 41.67vh;
  flex-shrink: 0;
  max-width: 1096px;
  max-height: 450px;
`;
