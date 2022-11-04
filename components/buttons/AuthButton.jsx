import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";

const Button = styled.button`
  width: 100%;
  font-size: ${fontSizes.m};
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 7px;
  border: 0px solid #150447;
  background-color: ${colors.primary};
  color: white;
  padding: 1rem;
`;

const Label = styled.label`
  width: 100%;
  font-size: 1.2rem;
`;

const AuthButton = () => {
  return <Button>Login</Button>;
};

export default AuthButton;
