import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import AuthInput from "../components/inputs/AuthInput";
import AuthButton from "../components/buttons/AuthButton";
import Table from "../components/tables/Table";
import Spacer from "../components/Spacer";

const Container = styled.div`
  background-color: ${colors.light};
  color: ${colors.light};
  padding: 2rem 0;
  width: 300px;
  height: 100vh;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: sticky;
  /* overflow-x: scroll; */
`;

const ItemDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  background-color: ${colors.light};
  padding: 1rem;
  border-top: 1px solid ${colors.gray2};
  /* border-bottom: 1px solid red; */
  /* justify-content: center; */
`;

const Title = styled.h1`
  font-size: ${fontSizes.l};
  text-align: center;
  color: #251e1e;
  width: 100%;
  margin: 0;

  /* width: 100%; */
  /* background-color: #1d6aad; */
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: ${fontSizes.l};
  margin: 0;
  /* width: 100%; */
  text-align: left;
  text-align: left;
  width: 100%;
  color: ${colors.gray5};
`;

const SideBar = () => {
  const items = [
    { title: "Home" },
    { title: "Parents" },
    { title: "Students" },
    { title: "Settings" },
    { title: "Log out" },
  ];
  return (
    <Container>
      <Title>PROJECT X</Title>
      <Spacer height={"3rem"} />
      {items.map((item) => (
        <ItemDiv>
          <AiFillCloseCircle
            size={20}
            style={{ margin: "0 1rem 0 0" }}
            color={colors.primary}
          />
          <SubTitle>{item.title}</SubTitle>
        </ItemDiv>
      ))}
    </Container>
  );
};

export default SideBar;
