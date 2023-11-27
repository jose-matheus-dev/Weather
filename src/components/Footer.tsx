import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <FooterContainer>
      <p>
        Dados fornecidos pela{' '}
        <span>
          <Link to="https://openweathermap.org/" target="_blank">
            Open Weather API
          </Link>
        </span>{' '}
        & Gráfico por{' '}
        <span>
          <Link to="https://recharts.org/" target="_blank">
            {'<Recharts />'}
          </Link>
        </span>
      </p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: max-content;
  position: absolute;
  margin: auto;

  bottom: 23px;

  p,
  span {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 200% */
  }
  p {
    color: #222222;
  }
  span {
    color: #96a7f2;
  }
  span img {
    height: 25px;
  }
`;
