import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors, fontSizes } from "../constants";
import { AiFillCloseCircle, AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdFamilyRestroom } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { ImExit } from "react-icons/im";
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
  /* border-radius: 7px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: sticky;
  /* overflow-x: scroll; */
`;

const ItemDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  background-color: ${colors.light};
  padding: 1rem;
  border-top: 1px solid ${colors.gray2};
  &:hover {
    background-color: ${colors.gray3};
  }
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
  font-size: ${fontSizes.m};
  margin: 0;
  /* width: 100%; */
  text-align: left;
  text-align: left;
  width: 100%;
  color: ${colors.gray5};
`;

const SideBar = () => {
  const router = useRouter();
  console.log(router.asPath);

  const items = [
    {
      id: "home",
      title: "Home",
      icon: (
        <AiFillHome
          size={20}
          style={{ margin: "0 1rem 0 0" }}
          color={colors.primary}
        />
      ),
      route: "/dashboard",
    },
    {
      id: "parent",
      title: "Parents",
      icon: (
        <MdFamilyRestroom
          size={20}
          style={{ margin: "0 1rem 0 0" }}
          color={colors.primary}
        />
      ),
      route: "/dashboard/parent",
    },
    {
      id: "student",
      title: "Students",
      icon: (
        <FaChild
          size={20}
          style={{ margin: "0 1rem 0 0" }}
          color={colors.primary}
        />
      ),
      route: "/dashboard/student",
    },
    {
      id: "settings",
      title: "Settings",
      icon: (
        <AiFillSetting
          size={20}
          style={{ margin: "0 1rem 0 0" }}
          color={colors.primary}
        />
      ),
      route: "/dashboard/settings",
    },
    {
      id: "log-out",
      title: "Log out",
      icon: (
        <ImExit
          size={20}
          style={{ margin: "0 1rem 0 0" }}
          color={colors.primary}
        />
      ),
      route: "/dashboard/log-out",
    },
  ];
  return (
    <Container>
      <Title>PROJECT X</Title>
      <Spacer height={"3rem"} />
      {items.map((item) => {
        const activeRoute = router.asPath.split("/")[2];
        const itemRoute = item.route.split("/")[2];
        return (
          <ItemDiv
            onClick={() => router.push(item.route)}
            style={
              activeRoute === itemRoute
                ? {
                    backgroundColor: colors.gray3,
                  }
                : null
            }
          >
            {item.icon}
            <SubTitle>{item.title}</SubTitle>
          </ItemDiv>
        );
      })}
    </Container>
  );
};

export default SideBar;
