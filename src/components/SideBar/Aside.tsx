import styled from 'styled-components';
import { Search } from './Search';
import { Weather } from './Weather';
import { aside } from '../../styles/Responsive/SideBar';
import { Header } from './Header';

export function Aside() {

  return (
    <Container>
      <Header />
      <Search />
      <Weather />
    </Container>
  );
}


const Container = styled.aside`
  ${aside.Container}
  position: relative;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#000000' : '#ffffff')};
  min-height: max-content;

  @media (max-width: 576px) {
    width: 100%;
  }
`;
