import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;

  grid-template-columns: ${(props) =>
    props.orientation === "vertical" ? "1fr" : "24rem 1fr 1.2fr"};
  gap: ${(props) => (props.orientation === "vertical" ? "0.8rem" : "2.4rem")};

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: ${(props) =>
      props.orientation === "vertical"
        ? "none"
        : "1px solid var(--color-grey-100)"};
  }

  /* Special treatment if the row contains buttons, and if it's NOT a vertical row */
  ${(props) =>
    props.orientation !== "vertical" &&
    css`
      &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
      }
    `}
  @media only screen and (max-width: 480px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    margin: 0 auto;
    /* background-color:yellow; */
  }
`;

const Label = styled.label`
  font-weight: 500;
  @media only screen and (max-width: 480px) {
    font-weight: 400;
    width: 80%;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children, orientation }) {
  return (
    <StyledFormRow orientation={orientation}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
