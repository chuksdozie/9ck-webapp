// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Logo from "../../public/images/LoubbyLogo.png";
// import MyCarousel from "../../components/onboarding/MyCarousel";
// import AuthInput from "../../components/onboarding/AuthInput";
// import AuthIconButton from "../../components/onboarding/AuthIconButton";
// import AuthPrimaryButton from "../../components/onboarding/AuthPrimaryButton";
// import CarouselFooter from "@components/onboarding/CarouselFooter";
// import colors from "@constants/colors";
// import { login } from "@store/slices/companySlice";
// import StatusBar from "@components/onboarding/StatusBar";
// import { isUserLoggedIn, whoIsUser } from "@utils/index";

export default function Login() {
  //   const router = useRouter();
  //   const [selected, setSelected] = useState("employer");
  //   const [attemptBy, setAttemptBy] = useState();
  //   const [loginDetails, setLoginDetails] = useState({
  //     email: "",
  //     user_password: "",
  //   });
  //   const [errorMessage, setErrorMessage] = useState("");
  //   const [successMessage, setSuccessMessage] = useState("");
  //   const [warningMessage, setWarningMessage] = useState("");
  //   const dispatch = useDispatch();
  //   const user = useSelector((state) => state.user);
  //   useEffect(() => {
  //     // dispatch(login());
  //     console.log(loginDetails);
  //     if (isUserLoggedIn()) {
  //       router.push("/");
  //     }
  //     setAttemptBy(whoIsUser());
  //   }, [loginDetails]);

  //   const handleEmailChange = (e) => {
  //     const value = e.target.value;
  //     setLoginDetails({ ...loginDetails, email: value });
  //   };
  //   const handlePasswordChange = (e) => {
  //     const value = e.target.value;
  //     setLoginDetails({ ...loginDetails, user_password: value });
  //   };

  //   const resetNotifications = () => {
  //     setErrorMessage("");
  //     setSuccessMessage("");
  //     setWarningMessage("");
  //   };

  //   const initiateLogin = async () => {
  //     resetNotifications();
  //     if (!loginDetails.email) {
  //       setErrorMessage("Please enter an email address");
  //       return;
  //     }
  //     if (!loginDetails.user_password) {
  //       setErrorMessage("Please enter your password");
  //       return;
  //     }
  //     const loginOutcome = await dispatch(login(loginDetails));

  //     if (!loginOutcome?.error) {
  //       //show success message loginOutcome.payload.data/.message/.status/.token
  //       setSuccessMessage(loginOutcome.payload.message);
  //       const user = JSON.stringify(loginOutcome.payload.data);
  //       localStorage.setItem("user", user);
  //       localStorage.setItem("token", loginOutcome.payload.token);
  //       localStorage.setItem("signupType", loginOutcome.payload.data.type);
  //       if (
  //         loginOutcome.payload.data.stage === "1" &&
  //         loginOutcome.payload.data.type === "employer"
  //       ) {
  //         router.push("/onboarding/about-you");
  //       } else {
  //         router.push("/dashboard");
  //       }

  //       return;
  //     } else if (loginOutcome?.error) {
  //       //show error message loginOutcome.error.message
  //       setErrorMessage(loginOutcome.payload.message);
  //       return;
  //     }
  //   };

  return (
    <MainDiv>
      <Title>Login</Title>
      <SubTitle>Welcome back to Loubby</SubTitle>
    </MainDiv>
  );
}

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  color: red;
  /* width: 100%; */
  /* background-color: aliceblue; */
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 30px;
  /* width: 100%; */
  text-align: left;
  color: red;
`;

const MainDiv = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  background-color: #f4f5f7;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  height: 100vh;
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f4f5f7;
  height: 100%;
  padding: 50px;
  /* width: 500px; */
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
