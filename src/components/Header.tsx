import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSession } from '../hooks';

export function Header() {
  const location = useLocation();
  const { ...weather } = useSession();

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
          Lat: <span>{weather.coord.lat.toFixed(2)}</span> Long: <span>{weather.coord.lon.toFixed(2)}</span>
        </p>
      </Location>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
`;

const NavBar = styled.nav`
  display: flex;
  gap: 72px;
  padding: 60px 50px;
`;

const Location = styled.div`
  width: 100%;
  padding-top: 37px;
  padding-left: 41px;

  h1 {
    display: flex;
    width: 745px;
    height: 108px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #222222;
    font-size: 150px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 32% */
  }
  p {
    margin-left: 9px;
    margin-top: 12px;
  }
  p,
  span {
    color: #222222;
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
  color: ${(props) => (props.$isActive ? '#222222' : '#c8c8c8')};
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
`;
