import { css } from "styled-components";

const DivMain = css`
  width: 63.23%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`

const Main = css`
  ${DivMain}
  height: 41.67vh;
  max-width: 1096.226px;
  max-height: 450px;
`;

const Header = css`
  width: 100%;
  margin: 0;
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const NavBar = css`
  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const details = {
  Main, Header, NavBar, DivMain
};
