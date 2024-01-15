import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import toast from "react-hot-toast";
const StyledA = styled.a`
  cursor: pointer;

  &:hover {
    /* Add your hover styles here */
    /* For example, change the color on hover */
    color: #581497;
  }
`;
function CreateAccountForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [fullName, setName] = useState();
  const [password, setPassword] = useState();
  const { signup, isLoading } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    signup(
      { fullName, email, password },
      {
        onSuccess: () => {
          navigate("/dashboard", { replace: true });
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Full Name" orientation="vertical">
        <Input
          type="text"
          id="fullName"
          autoComplete="username"
          value={fullName}
          onChange={(e) => setName(e.target.value)}
        />
      </FormRow>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          
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
          {!isLoading ? "Signup" : <SpinnerMini />}
        </Button>
      </FormRow>
      <FormRow>
        <div>
          Allready have an account ?{" "}
          <StyledA onClick={() => navigate("/login")}>Login</StyledA>
        </div>
      </FormRow>
    </Form>
  );
}

export default CreateAccountForm;
