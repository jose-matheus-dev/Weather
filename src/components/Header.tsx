import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSession } from '../hooks';

export function Header() {
  const location = useLocation();
  const { weather } = useSession();

  return (
    <HeaderContainer>
      <NavBar>
        <StyledLink $isActive={location.pathname === '/weather'} to="/weather">
          Hoje
        </StyledLink>
        <StyledLink $isActive={location.pathname === '/forecast'} to="/forecast">
          Próximos Dias
        </StyledLink>
      </NavBar>
      <Location>
        <h1>{weather.name}</h1>
        <p>
          Lat: <span>{weather?.coord.lat.toFixed(2)}</span> Long: <span>{weather?.coord.lon.toFixed(2)}</span>
        </p>
      </Location>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div``;

const NavBar = styled.nav`
  display: flex;
  gap: 72px;
  padding: 60px 0px;
`;

const Location = styled.div<{ children: { props: { children: string } }[] }>`
  width: 100%;

  h1 {
    margin-left: -9px;
    display: flex;
    width: 1200px;
    line-break: normal;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #222222;
    font-size: 120px;
    font-style: normal;
    font-weight: 400;
    line-height: 125px; /* 32% */
  }
  p {
    padding-left: 1px;
    margin-top: 12px;
  }
  p,
  span {
    ${({ theme }) => (theme.isDarkMode ? '#ececec !important' : '#222222')};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 200% */
  }
  span {
    margin-left: 5px;
    &:first-of-type {
      margin-right: 11px;
    }
  }
`;

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ $isActive, theme: { isDarkMode } }) =>
    $isActive ? (isDarkMode ? '#c8c8c8' : '#222222') : isDarkMode ? '#222222' : '#c8c8c8'};
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
`;
