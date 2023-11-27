import styled from 'styled-components';
import { SideBar } from '../components/SideBar';
import { useSession } from '../hooks';
import { Header } from '../components/Header';

export function TodayPage() {
  const { weather } = useSession();

  return (
    <TodayContainer>
      <div>
        <Header />
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
  background-color: ${({ theme }) => (theme.isDarkMode ? '#3c3c3c' : '#efefef')};
  border: 4px solid ${({ theme }) => (theme.isDarkMode ? '#272727' : '#d8d8d8')};

  /* 
  width: 1912px;
  height: 1072px;
  border: 4px;

  width: 1250px;
  height: 1071px;
  */
`;
