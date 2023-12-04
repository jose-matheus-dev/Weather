import styled from 'styled-components';
import { Header } from './Details/Header';
import { Aside } from './SideBar';
import { details } from '../styles/Responsive/Details';

export function Main({ content }: { content: React.ReactNode }) {
  return (
    <Container>
      <Wrapper>
        <Header />
        {content}
      </Wrapper>
      <Aside />
    </Container>
  );
}

const Wrapper = styled.div`
  ${details.DivMain}
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Container = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  display: flex;
  flex-direction: row-reverse;
  justify-content: start;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
