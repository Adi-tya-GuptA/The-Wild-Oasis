import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledA = styled.a`
  cursor: pointer;

  &:hover {
    /* Add your hover styles here */
    /* For example, change the color on hover */
    color: #1744a3;
  }
`;
function LoginForm() {
  const [email, setEmail] = useState("ad@gmai.com");
  const [password, setPassword] = useState("1234");
  const { login, isLoading } = useLogin();
  const navigate=useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}  >
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRow>
      <FormRow>
        <div>
     Don't have acount <StyledA onClick={()=>navigate('/signup')}>Signup</StyledA>
        </div>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
