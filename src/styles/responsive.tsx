import { css } from "styled-components";


const Aside = css`
  width: 37.77%;
  padding-top: min(3.7vh, 40px);
  margin-right: min(2.63vw, 50px);
`;

const Search = css`
  width: 75.53%;
  height: 7.41vh;
`;

const Main = css`
  width: 63.23%;
`;

const Footer = css`
  height: max-content;
  font-size: 24px;
`

export const base = {
  Aside, Search, Main, Footer
}