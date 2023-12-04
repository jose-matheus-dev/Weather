import styled from 'styled-components';
import { Main, Footer } from '../components';
import { useSession } from '../hooks';
import { Header } from '../components/SideBar/Header';
import { Search } from '../components/SideBar';

export function Weather({ details }: { details: React.ReactNode }) {
  const { weather } = useSession();
  console.log(weather);

  return (
    <Container>
      {Object.keys(weather).length > 1 ? (
        <>
          <Main content={details} />
          <Footer />
        </>
      ) : (
        <div>
          <Header />
          <Search />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100svh;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#494949' : '#efefef')};
  border: 4px solid ${({ theme }) => (theme.isDarkMode ? '#272727' : '#d8d8d8')};

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
