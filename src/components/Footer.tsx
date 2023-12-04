import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { aside } from '../styles/Responsive/SideBar';
import { details } from '../styles/Responsive/Details';

export function Footer() {
  return (
    <Container>
      <DivAside>
        <p>Todos os direitos reservados. 2023.</p>
      </DivAside>
      <DivMain>
        <p>
          Dados fornecidos pela{' '}
          <span>
            <Link to="https://openweathermap.org/" target="_blank">
              Open Weather API{' '}
            </Link>
          </span>
          & Gráfico por{' '}
          <span>
            <Link to="https://recharts.org/" target="_blank">
              {'<Recharts />'}
            </Link>
          </span>
        </p>
      </DivMain>
    </Container>
  );
}

const DivMain = styled.div`
  ${details.DivMain}
  p,
  span {
    font-style: normal;
    font-weight: 400;
    line-height: 2em;
  }
  p {
    color: #222222;
  }
  span {
    color: #96a7f2;
  }
  z-index: 1;

  @media (max-width: 1200px) {
    background-color: ${({ theme }) => (theme.isDarkMode ? '#494949' : '#efefef')};
    text-align: center;
    height: max-content;
  }
`;
const DivAside = styled.div`
  ${aside.DivAside}
  height: max-content;
  text-align: center;
  border: 0px;
  z-index: 1;

`;
const Container = styled.footer`
  margin-top: calc(-18px - min(4vh, 40px));
  z-index: 100;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  color: #222222;
  font-size: clamp(16px, 1.26vw, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6em;
  @media (max-width: 1200px) {
    flex-wrap: wrap-reverse;
  }
`;
