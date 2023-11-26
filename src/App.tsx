import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TodayPage, UpcomingDaysPage } from './pages';
import { WeatherProvider } from './utils/context';

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/weather" replace />} />
          <Route path="/weather" element={<TodayPage />}></Route>
          <Route path="/forecast" element={<UpcomingDaysPage />}></Route>
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
