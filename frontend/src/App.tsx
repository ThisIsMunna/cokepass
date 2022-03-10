import React from "react";
import {
  Button,
  Container,
  InputEmail,
  InputForm,
  InputPassword,
  SignUp,
  Span,
  Subtitle,
  Title,
} from "./components/Components.styles";

function App() {
  return (
    <Container>
      <Title>CokePass</Title>
      <Subtitle>Secure Password Manager</Subtitle>

      <InputForm>
        <InputEmail />
        <InputPassword />
        <Button as="a" href="#">
          Log in
        </Button>
      </InputForm>
      <Span>Or</Span>
      <SignUp href="#">Sign up</SignUp>
    </Container>
  );
}

export default App;
