import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  @media only screen and (max-width: 480px) {
    /* width: 70%; */
    html {
      font-size: 5rem;
    }
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    position: relative;
    height: 100vh;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  @media only screen and (max-width: 480px) {
    padding: 2.4 2.8rem 3.4rem;
    background-color: var(--color-grey-50);
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media only screen and (max-width: 480px) {
    max-width: 70rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
