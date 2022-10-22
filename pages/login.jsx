import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import AuthInput from "../components/inputs/AuthInput";
import AuthButton from "../components/buttons/AuthButton";
import { colors, fontSizes } from "../constants";
import StatusModal from "../components/modals/StatusModal";

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  color: red;
  /* width: 100%; */
  /* background-color: aliceblue; */
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: ${fontSizes.l};
  margin: 1rem 0 2rem;
  /* width: 100%; */
  text-align: left;
  color: ${colors.primary};
`;

const MainDiv = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #f4f5f7; */
  width: 500px;
  /* height: 100%; */
  padding: 50px;
  /* width: 500px; */
  border: 5px solid ${colors.primary};
  border-radius: 10px;
  align-items: center;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  /* align-items: center; */
  height: 100%;
  padding: 90px;
  position: relative;
`;

export default function Login() {
  return (
    <MainDiv>
      <StatusModal />
      <FormDiv>
        <SubTitle>Welcome back to Project X</SubTitle>
        <AuthInput
          label={"Email Address"}
          placeholder={"EX. johndoe@gmail.aboki"}
          type="email"
        />
        <AuthInput
          label={"Password"}
          placeholder={"EX. xxxxxxxxxx"}
          type="password"
        />
        <AuthButton />
      </FormDiv>
    </MainDiv>
  );
}
