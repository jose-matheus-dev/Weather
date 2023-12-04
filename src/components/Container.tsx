import styled from 'styled-components';
import { Footer } from './Footer';

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <Div>
      {children}
      <Footer />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  min-height: 100svh;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#494949' : '#efefef')};
  border: 4px solid ${({ theme }) => (theme.isDarkMode ? '#272727' : '#d8d8d8')};

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
