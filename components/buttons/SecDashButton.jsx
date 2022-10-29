import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";

const Button = styled.button`
  min-width: 150px;
  font-size: ${fontSizes.m};
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 7px;
  border: 0px solid #150447;
  background-color: ${colors.primary};
  color: white;
  padding: 0.5rem;
`;

const Label = styled.label`
  width: 100%;
  font-size: 1.2rem;
`;

const SecDashButton = () => {
  return <Button>Login</Button>;
};

export default SecDashButton;
