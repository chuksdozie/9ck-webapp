import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import AuthInput from "../inputs/AuthInput";
import AuthButton from "../buttons/AuthButton";

const Container = styled.div`
  background-color: ${colors.light};
  color: ${colors.light};
  padding: 2rem;
  width: 400px;
  min-height: 300px;
  max-height: 80%;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* position: relative; */
  overflow-x: scroll;
`;

const Title = styled.h1`
  font-size: ${fontSizes.l};
  text-align: center;
  color: #251e1e;
  text-align: center;
  width: 100%;
  /* width: 100%; */
  /* background-color: #1d6aad; */
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: ${fontSizes.m};
  margin: 1rem 0 0rem;
  /* width: 100%; */
  text-align: left;
  text-align: left;
  width: 100%;
  color: ${colors.gray5};
`;

const AddNewStudentModal = () => {
  return (
    <Container>
      <Title>Add a new student</Title>
      <AuthInput label={"Firstname"} placeholder={"Ex. John"} />
      <AuthInput label={"Lastname"} placeholder={"Ex. Doe"} />
      <AuthInput label={"Date of birth"} placeholder={"Ex. 25/08/1995"} />
      <AuthInput label={"Gender"} placeholder={"Ex. Male"} />
      <AuthButton />
    </Container>
  );
};

export default AddNewStudentModal;
