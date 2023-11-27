import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, TooltipProps } from 'recharts';
import { openWeather } from '../utils/server';
import moment from 'moment';
import { Footer } from './Footer';
import { useSession } from '../hooks';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ForecastData, celsiusToFahrenheit, defaulForecast } from '../utils';

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
    <LineChart width={1070} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dtFormatted" stroke={info.isDarkMode ? '#ececec' : undefined} />
      <YAxis
        tickFormatter={(tick) => (info.isFahrenheit ? `${celsiusToFahrenheit(tick)}ºF` : `${tick}ºC`)}
        stroke={info.isDarkMode ? '#ececec' : undefined}
      />
      <Tooltip content={CustomTooltip} />
      <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
    </LineChart>
  );
};

export function Forecast() {
  const { weather } = useSession();
  const [forecast, setForecast] = useState(defaulForecast);

  useEffect(() => {
    if (Object.keys(weather).length !== 0 && weather.name !== 'Honolulu') {
      openWeather
        .getThreeHourForecastByCityId(weather.id)
        .then((forecast) => {
          console.log(forecast, 'forecast');
          setForecast(forecast);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [weather]);

  return (
    <ForecastMain>
      <WeatherChart
        data={forecast.list.map((w) => ({ ...w, dtFormatted: moment.utc(w.dt, 'X').format('DD/MM (ddd)') }))}
      />
      <Footer />
    </ForecastMain>
  );
}

const ForecastMain = styled.main`
  margin-top: 64px;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#000000 !important' : '#ffffff')};
  padding: 25px 0px;
  width: 1096.226px;
  height: 450px;
  flex-shrink: 0;
`;
