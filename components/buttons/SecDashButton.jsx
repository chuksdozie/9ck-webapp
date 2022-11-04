import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";

const Button = styled.button`
  /* min-width: 150px; */
  font-size: ${fontSizes.m};
  margin: 0 0.5rem;
  border-radius: 7px;
  border: 0px solid #150447;
  background-color: ${colors.primary};
  color: white;
  padding: 0.5rem;
`;

const Shell = styled.div`
  min-width: 150px;
  font-size: ${fontSizes.m};
  /* padding: 0.5rem; */
  margin: 0.5rem;
  border-radius: 7px;
  border: 0px solid #150447;
  background-color: ${colors.primary};
  color: white;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  width: 100%;
  font-size: 1.2rem;
`;

const SecDashButton = ({ onClick, value, icon }) => {
  return (
    <Shell onClick={onClick}>
      {icon}
      <Button>{value}</Button>
    </Shell>
  );
};

export default SecDashButton;
