import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  /* Media query for mobile screens */
  @media only screen and (max-width: 480px) {
    width: 70%;
    /* background-color:yellow; */
    margin: 0 auto;
    ${(props) =>
    props.type !== "regular" &&
    css`
      padding: 1.4rem 2rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 65vw;
      height:60vh ;
      margin: 0 auto;
      
    `}
    
  overflow: scroll;
  font-size: 1.1rem;

  /* Media query for mobile screens */
 
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
