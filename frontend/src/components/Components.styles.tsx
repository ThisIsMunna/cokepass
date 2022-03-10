import styled from "styled-components";

export const Container = styled.div`
  min-width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #11324d;
`;

export const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  ::after {
    padding-bottom: 2px;
  }
`;

export const Title = styled.h1`
  /* font-size: 2rem; */

  color: #78dec7;
`;

export const Subtitle = styled.h3`
  /* font-size: 1.5rem; */
  color: darkgray;
`;

export const InputEmail = styled.input.attrs((props) => ({
  type: "email",
  size: props.size || "1em",
  placeholder: "yourmail@gmail.com",
}))`
  width: 50%;
  border: 1px gray solid;
  border-radius: 1rem;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  ::placeholder {
    text-align: center;
    color: gray;
  }
`;

export const InputPassword = styled.input.attrs((props) => ({
  type: "password",
  size: props.size || "1em",
  placeholder: "Enter Your Password",
}))`
  width: 50%;
  border: 1px gray solid;
  border-radius: 1rem;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  ::placeholder {
    text-align: center;
    color: gray;
  }
`;

export const Button = styled.button`
  display: inline-block;
  color: #78dec7;
  font-size: 1.3em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 1rem;
  display: block;
  text-decoration: none;
  margin-bottom: 1rem;
  :hover {
    background-color: #78dec7;
    color: black;
  }
`;

export const Span = styled.span`
  color: darkgray;
  font-size: 0.8rem;
  margin-bottom: 3px;
`;

export const SignUp = styled.a`
  color: #78dec7;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 5px;
  :hover {
    color: white;
  }
`;
