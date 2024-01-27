import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media only screen and (max-width: 480px){
    /* grid-row: 1 / 2; Starts at row 1 and ends at row 2 */
      grid-row: 3/ 5; /* Starts at column 1 and ends at column 2 */
      /* gap: 1.2rem; */
      position: sticky;
      bottom: 0;
      z-index: 100000;
      padding: 1.6rem;
  }
 
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
