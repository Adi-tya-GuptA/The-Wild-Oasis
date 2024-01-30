import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  /* flex-shrink: 1; */
  @media only screen and (max-width: 480px) {
    font-size: 0.5rem;
    padding: 1rem 3.4rem;
    border-bottom: 1px solid var(--color-grey-100);
    display: flex;
    gap: 1.7rem;
    justify-content: space-evenly;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
