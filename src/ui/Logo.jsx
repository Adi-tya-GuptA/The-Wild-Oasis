import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeToggleContext";

const StyledLogo = styled.div`
  text-align: center;
  @media only screen and (max-width: 480px){
    display: none;
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
