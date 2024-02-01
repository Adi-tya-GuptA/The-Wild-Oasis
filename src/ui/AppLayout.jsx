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
    height: 100vh;
    grid-template-columns: auto;
    /* grid-row: 1/span 3; */
    position: absolute;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  @media only screen and (max-width: 480px) {
    overflow: scroll;
    padding: 2.4 2.8rem 3.4rem;
    background-color: var(--color-grey-50);
    /* min-width: 100vw; */
    /* width: fit-content; */
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media only screen and (max-width: 480px) {
    /* min-width: 70rem; */
    height: fit-content;
    gap: 2.2rem;
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
