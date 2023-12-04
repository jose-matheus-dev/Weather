import styled from 'styled-components';
import { Main, Footer } from '../components';

export function Weather({ details }: { details: React.ReactNode }) {
  return (
    <Container>
      <Main content={details} />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  /* width: 1912px; */
  min-height: 100svh;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#494949' : '#efefef')};
  border: 4px solid ${({ theme }) => (theme.isDarkMode ? '#272727' : '#d8d8d8')};

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
