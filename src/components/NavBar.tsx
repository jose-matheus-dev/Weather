import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { details } from '../styles/Responsive/Details';

export function NavBar() {
  const location = useLocation();
  return (
    <NavContainer>
      <StyledLink $isActive={location.pathname === '/weather'} to="/weather">
        Hoje
      </StyledLink>
      <StyledLink $isActive={location.pathname === '/forecast'} to="/forecast">
        Próximos Dias
      </StyledLink>
    </NavContainer>
  );
}


const StyledLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ $isActive, theme: { isDarkMode } }) =>
    $isActive ? (isDarkMode ? '#c8c8c8' : '#222222') : isDarkMode ? '#222222' : '#c8c8c8'};
  font-size: clamp(36px, 4vw, 48px);
  font-style: normal;
  font-weight: 400;
  line-height: 1em;
`;

const NavContainer = styled.nav`
  ${details.NavBar};
  display: flex;
  width: max-content;
  gap: min(3.76vw, 72px);
  padding: min(5.56vh, 60px) 0px;
`;
