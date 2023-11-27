import styled from 'styled-components';
import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { Forecast } from '../components/Forecast';
import { Footer } from '../components/Footer';

export function UpcomingDaysPage() {
  return (
    <UpcomingDaysContainer>
      <div>
        <Header />
        <Forecast />
      </div>
      <SideBar />
    </UpcomingDaysContainer>
  );
}

const UpcomingDaysContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  background-color: #efefef;
  /* background-color: skyblue; */
  width: 1912px;
  height: max-content;
  border: 4px solid #d8d8d8;
`;
