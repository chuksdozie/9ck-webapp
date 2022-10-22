import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";

const Input = styled.input`
  width: 100%;
  font-size: ${fontSizes.m};
  color: ${colors.gray5};
  font-weight: 200;
  padding: 0.8rem;
  margin-top: 0.5rem;
  border-radius: 7px;
  border: 1px solid ${colors.primary};
  &::placeholder {
    font-weight: 200;
    color: ${colors.gray2};
  }
`;

const Label = styled.label`
  width: 100%;
  font-size: ${fontSizes.m};
  color: ${colors.gray5};
`;

const AuthInput = ({ type, placeholder, value, onChange, label }) => {
  return (
    <div style={{ margin: ".5rem 0", width: "100%" }}>
      <Label>{label}</Label>
      <Input placeholder={placeholder} type={type} />
    </div>
  );
};

export default AuthInput;
