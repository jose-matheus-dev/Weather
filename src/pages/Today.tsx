import styled from 'styled-components';
import { SideBar } from '../components/SideBar';
import { useEffect } from 'react';
import { useSession } from '../hooks';

export function TodayPage() {
  const { weather } = useSession();

  return (
    <TodayContainer>
      <SideBar />

    </TodayContainer>
  );
}

const TodayContainer = styled.div`
  background-color: #efefef;
  width: 1912px;
  /* height: 1772px; */
  border: 4px solid #d8d8d8;

  /* 
  width: 1912px;
  height: 1072px;
  border: 4px;

  width: 1250px;
  height: 1071px;
  */
`;
