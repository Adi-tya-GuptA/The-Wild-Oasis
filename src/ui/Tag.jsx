import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
  @media only screen and (max-width: 480px){
    font-size: .6rem;
  font-weight: 500;
  padding: 0.3rem .7rem;
  border-radius: 80px;
  }
`;

export default Tag;
