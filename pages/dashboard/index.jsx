import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import AuthInput from "../../components/inputs/AuthInput";
import AuthButton from "../../components/buttons/AuthButton";
import { colors, fontSizes } from "../../constants";
import StatusModal from "../../components/modals/StatusModal";
import DisplayCard from "../../components/cards/DisplayCard";
import Spacer from "../../components/Spacer";
import "chart.js/auto";
import { Doughnut, Bar } from "react-chartjs-2";
import Table from "../../components/tables/Table";
import { BiDetail } from "react-icons/bi";
import GeneralModal from "../../components/modals/GeneralModal";
import AddNewCourseModal from "../../components/modals/AddNewCourseModal";
import AddNewLocationModal from "../../components/modals/AddNewLocationModal";
import AddNewCampModal from "../../components/modals/AddNewCampModal";
import AddNewParentModal from "../../components/modals/AddNewParentModal";
import AddNewSessionModal from "../../components/modals/AddNewSessionModal";
import AddNewStudentModal from "../../components/modals/AddNewStudentModal";
import AddNewUserModal from "../../components/modals/AddNewUserModal";

const Title = styled.h1`
  font-size: ${fontSizes.m};
  text-align: left;
  color: #251e1e;
  text-align: left;
  width: 100%;
  /* width: 100%; */
  /* background-color: aliceblue; */
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: ${fontSizes.m};
  margin: 1rem 0 0.5rem;
  /* width: 100%; */
  text-align: left;
  text-align: left;
  width: 100%;
  color: ${colors.gray5};
`;

const ValueText = styled.h2`
  font-weight: 400;
  font-size: ${fontSizes.m};
  /* margin: 1rem 0 2rem; */
  width: 100%;
  text-align: left;
  color: ${colors.primary};
`;

const MainDiv = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  background-color: #f1f1f1;
  /* justify-content: center; */
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  min-height: 100vh;
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #f4f5f7; */
  width: 500px;
  height: 100%;
  padding: 50px;
  /* width: 500px; */
  border: 5px solid ${colors.primary};
  border-radius: 10px;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  /* height: 100px; */
  width: 100%;
  border-radius: 7px;
  margin: 0.5rem 0rem;
  padding: 1rem;
`;

export default function Index() {
  const [details, setDetails] = useState([
    { header: "Fullname", value: "Akpan Akan Utoh" },
    { header: "Email Address", value: "akpan@example.com" },
    { header: "Role", value: "Admin" },
  ]);
  return (
    <MainDiv>
      {/* <StatusModal /> */}
      {/* <GeneralModal children={<AddNewCourseModal />} /> */}
      {/* <GeneralModal children={<AddNewLocationModal />} />*/}
      {/* <GeneralModal children={<AddNewCampModal />} /> */}
      {/* <GeneralModal children={<AddNewParentModal />} /> */}
      {/* <GeneralModal children={<AddNewSessionModal />} />*/}
      {/* <GeneralModal children={<AddNewStudentModal />} /> */}
      <GeneralModal children={<AddNewUserModal />} />
      <div style={{ width: "100%", display: "flex" }}>
        <Wrapper>
          <Title>My profile</Title>
          {details.map((detail, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                backgroundColor: colors.gray3,
                borderRadius: "7px",
                margin: ".5rem 0",
              }}
            >
              <BiDetail size={40} style={{ margin: "0 .5rem" }} />
              <div
                style={{
                  width: "100%",
                  // backgroundColor: "orange",
                  borderLeft: `5px solid ${colors.darkGray}`,
                  padding: "0 1rem",
                }}
              >
                <SubTitle>{detail.header}</SubTitle>
                <ValueText>{detail.value}</ValueText>
              </div>
            </div>
          ))}
        </Wrapper>
        <Spacer width={"2rem"} />
        <Wrapper>
          <Bar
            data={{
              labels: ["Jun", "Jul", "Aug", "Dec", "Feb"],
              datasets: [
                {
                  id: 1,
                  label: "",
                  data: [5, 6, 17, 5, 1],
                },
              ],
            }}
          />
        </Wrapper>
      </div>

      <Wrapper>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>
      </Wrapper>
      <Wrapper>
        <Table />
      </Wrapper>
    </MainDiv>
  );
}