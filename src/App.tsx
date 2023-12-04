import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { WeatherProvider } from './utils';
import { GlobalStyle } from './styles';
import { Weather } from './pages/Weather';
import { ForecastDetails, WeatherDetails } from './components/Details';

function App() {
  return (
    <WeatherProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/weather" replace />} />
          <Route path="/weather" element={<Weather details={ <WeatherDetails /> } />}></Route>
          <Route path="/forecast" element={<Weather details={ <ForecastDetails /> } />}></Route>
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
