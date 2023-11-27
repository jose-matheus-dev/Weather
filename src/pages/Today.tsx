import styled from 'styled-components';
import { SideBar } from '../components/SideBar';
import { useSession } from '../hooks';
import { Header } from '../components/Header';

export function TodayPage() {
  const { weather } = useSession();

  return (
    <TodayContainer>
      <SideBar />
      <Header />
    </TodayContainer>
  );
}

const TodayContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #efefef;
  width: 1912px;
  height: max-content;
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
