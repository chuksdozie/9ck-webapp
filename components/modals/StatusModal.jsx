import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";

const Container = styled.div`
  background-color: ${colors.red};
  color: ${colors.light};
  padding: 1rem;
  min-width: 300px;
  max-width: 400px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 30px;
`;

const StatusModal = () => {
  return (
    <Container>
      You have successfully logged in{" "}
      <AiFillCloseCircle size={25} style={{ marginLeft: "1rem" }} />
    </Container>
  );
};

export default StatusModal;
