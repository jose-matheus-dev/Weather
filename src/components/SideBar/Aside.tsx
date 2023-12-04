import styled from 'styled-components';
import casaco from '/casaco.svg';
import { Search } from './Search';
import { Weather } from './Weather';
import { aside } from '../../styles/Responsive/SideBar';

export function Aside() {

  return (
    <Container>
      <Header>
        <img src={casaco} alt="" />
        <h2>Levo um casaquinho?</h2>
      </Header>
      <Search />
      <Weather />
    </Container>
  );
}

const Header = styled.div`
  ${aside.Header}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  img {
    width: min(18.13%, 120px);
  }
  h2 {
    font-size: clamp(42.8px, 3.55vw, 64px);
    line-height: 0.75em;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
  }
`;

const Container = styled.aside`
  ${aside.Container}
  position: relative;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#000000' : '#ffffff')};
  min-height: max-content;

  @media (max-width: 576px) {
    width: 100%;
  }
`;
