import styled from 'styled-components';
import { SideBar } from '../components/SideBar';
import { useSession } from '../hooks';
import { Header } from '../components/Header';
import { WeatherDetails } from '../components/Weather';

export function TodayPage() {
  const { weather } = useSession();

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
  width: 1912px;
  height: max-content;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#494949' : '#efefef')};
  border: 4px solid ${({ theme }) => (theme.isDarkMode ? '#272727' : '#d8d8d8')};

  /* 
  width: 1912px;
  height: 1072px;
  border: 4px;

  width: 1250px;
  height: 1071px;
  */
`;
