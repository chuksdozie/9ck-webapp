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
  &:focus {
    font-weight: 200;
    outline: none;
  }
`;

const Label = styled.label`
  width: 100%;
  font-size: ${fontSizes.m};
  color: ${colors.gray5};
`;

const Dropdown = ({
  type,
  placeholder,
  defaultText,
  onChange,
  options,
  label,
  value,
}) => {
  return (
    <div style={{ margin: ".5rem 0", width: "100%" }}>
      <Label>{label}</Label>
      <select onChange={onChange} value={value}>
        <option>{defaultText}</option>
        {options &&
          options.map((opt, index) => (
            <option id={index} value={opt?.value}>
              {opt?.text}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
