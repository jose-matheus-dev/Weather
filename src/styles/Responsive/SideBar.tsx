import { css } from 'styled-components';

const Header = css`
  max-width: 81.7%;
  margin: auto;
  margin-bottom: min(5.93vh, 60px);
`;

const Search = css`
  width: 80%;
  max-width: 400px;
  height: 7.41vh;
`;

const DivAside = css`
  width: 37.77%;
  margin-right: min(2.63vw, 50px);
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Container = css`
  ${DivAside}
  height: calc(100svh - 8px);
  padding-top: min(3.7vh, 40px);
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Weather = css`
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const aside = {
  Container,
  Header,
  Search,
  Weather,
  DivAside,
};
