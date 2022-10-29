import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";

const Container = styled.div`
  background-color: rgba(233, 228, 228, 0.7);
  /* color: ${colors.light}; */
  padding: 1rem;
  width: 100%;
  height: 100vh;
  /* border-radius: 7px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  overflow-y: hidden;
`;

const GeneralModal = ({ children, onClose }) => {
  return (
    <Container>
      <AiFillCloseCircle
        size={30}
        style={{ position: "absolute", top: 30, right: 30 }}
        color={colors.red}
        onClick={onClose}
      />
      {children}
    </Container>
  );
};

export default GeneralModal;
