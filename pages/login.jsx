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
import { ToastContainer, toast } from "react-toastify";
import API from "../api/api";
import { setAccount } from "../redux/slices/accountSlice";
import { useDispatch } from "react-redux";

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
  // toast.success("success");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const { data } = await API.post("/login", {
        email: email.toLowerCase(),
        password,
      });
      toast.success(data?.message);
      dispatch(setAccount(data?.data));
      localStorage.setItem("token", data?.token);
      router.push("/dashboard");

      return;
    } catch (error) {
      toast.error(error?.response?.data?.message ?? "Somethhing went wrong");
      return;
    }
  };

  return (
    <MainDiv>
      {/* <StatusModal /> */}
      <FormDiv>
        <SubTitle>Welcome back to Project X</SubTitle>
        <AuthInput
          label={"Email Address"}
          placeholder={"EX. johndoe@gmail.aboki"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          label={"Password"}
          placeholder={"EX. xxxxxxxxxx"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthButton onClick={() => handleLogin()} label={"Login"} />
      </FormDiv>
    </MainDiv>
  );
}
