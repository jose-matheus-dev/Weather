import styled from 'styled-components';
import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { WeatherDetails } from '../components/Weather';

export function TodayPage() {
  return (
    <TodayContainer>
      <div>
        <Header />
        <WeatherDetails />
      </div>
      <SideBar />
    </TodayContainer>
  );
}

const TodayContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  /* width: 1912px; */
  min-height: 100svh;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#494949' : '#efefef')};
  border: 4px solid ${({ theme }) => (theme.isDarkMode ? '#272727' : '#d8d8d8')};
  `;
