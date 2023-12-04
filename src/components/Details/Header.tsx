import styled from 'styled-components';
import { useSession } from '../../hooks';
import { NavBar } from '../NavBar';
import { details } from '../../styles/Responsive/Details';

export function Header() {
  const { weather } = useSession();

  return (
    <HeaderContainer>
      <NavBar />
      <Coords>
        <h1>{weather?.name}</h1>
        <p>
          Lat: <span>{weather?.coord?.lat.toFixed(2)}</span> Long: <span>{weather?.coord?.lon.toFixed(2)}</span>
        </p>
      </Coords>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  ${details.Header}
`;

const Coords = styled.div<{ children: { props: { children: string } }[] }>`
  width: 100%;

  h1 {
    margin-left: -9px;
    display: flex;
    line-break: normal;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #222222;
    font-size: clamp(60px, 6vw, 150px);
    font-style: normal;
    font-weight: 400;
    line-height: 0.7em;
  }
  p {
    padding-left: 1px;
    margin-top: min(1.11vh, 12px);
  }
  p,
  span {
    ${({ theme }) => (theme.isDarkMode ? '#ececec !important' : '#222222')};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 2em; /* 200% */
  }
  span {
    margin-left: 5px;
    &:first-of-type {
      margin-right: 11px;
    }
  }
`;
