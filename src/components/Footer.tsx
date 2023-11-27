import styled from 'styled-components';

export function Footer() {
  return (
    <FooterContainer>
      <p>
        Dados fornecidos pela <span>Open Weather API</span> & Gráfico por <span>{'<Recharts />'}</span>
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
