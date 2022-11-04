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

const AddNewParentModal = () => {
  return (
    <Container>
      <Title>Add a new parent</Title>
      <AuthInput label={"Guardian Firstname"} placeholder={"Ex. John"} />
      <AuthInput label={"Guardian Firstname"} placeholder={"Ex. Doe"} />
      <AuthInput
        label={"Guardian Email Address"}
        placeholder={"Ex. johndoe@example.com"}
      />
      <AuthInput label={"Guardian Firstname (Alt)"} placeholder={"Ex. John"} />
      <AuthInput label={"Guardian Firstname (Alt)"} placeholder={"Ex. Doe"} />
      <AuthInput
        label={"Guardian Email Address (Alt)"}
        placeholder={"Ex. johndoe@example.com"}
      />
      <AuthInput
        label={"Address"}
        placeholder={"Ex. 43 Amac, grent lane, Ph"}
      />
      <AuthInput
        label={"Address (Alt)"}
        placeholder={"Ex. 43 Amac, grent lane, Ph"}
      />
      <AuthInput label={"Phone Number"} placeholder={"Ex. +23481655000000"} />
      <AuthInput
        label={"Phone Number (Alt)"}
        placeholder={"Ex. +23481655000000"}
      />
      <AuthButton />
    </Container>
  );
};

export default AddNewParentModal;
