import styled from 'styled-components';
import { SideBar } from '../components/SideBar';

export function UpcomingDaysPage() {
  return (
    <UpcomingDaysContainer>
      <SideBar />
    </UpcomingDaysContainer>
  );
}

const UpcomingDaysContainer = styled.div`
  background-color: #efefef;
  width: 1912px;
  /* height: 1772px; */
  border: 4px solid #d8d8d8;
`;
