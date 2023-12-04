import styled from 'styled-components';
import { aside } from '../../styles/Responsive/SideBar';
import casaco from '/casaco.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={casaco} alt="" />
      <h2>Levo um casaquinho?</h2>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.header`
  ${aside.Header}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  img {
    width: min(18.13%, 120px);
  }
  h2 {
    font-size: clamp(42.8px, 3.55vw, 64px);
    line-height: 0.75em;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
  }
`;
