import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { colors, fontSizes } from "../../../constants";
import StatusModal from "../../../components/modals/StatusModal";
import DisplayCard from "../../../components/cards/DisplayCard";
import Spacer from "../../../components/Spacer";
import "chart.js/auto";
import { Doughnut, Bar } from "react-chartjs-2";
import Table from "../../../components/tables/Table";
import { BiDetail, BiSave } from "react-icons/bi";
import DashboardInput from "../../../components/inputs/DashhboardInput";
import SecDashButton from "../../../components/buttons/SecDashButton";
import SideBar from "../../../layout/SideBar";
import { AiFillAlert, AiFillEdit } from "react-icons/ai";
import { MdPersonAddAlt1 } from "react-icons/md";

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
  margin: 1rem 0 0rem;
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
  overflow-x: scroll;
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

export default function Parent() {
  const router = useRouter();
  console.log(router.query);
  const [details, setDetails] = useState([
    { header: "Fullname", value: "Akpan Akan Utoh" },
    { header: "Email Address", value: "akpan@example.com" },
    { header: "Role", value: "Admin" },
  ]);
  const [editing, setEditing] = useState(false);
  const handleEdit = (state) => {
    if (state) {
      try {
        console.log(state);
        // after everything
        setEditing(false);
        return;
      } catch (error) {}
    } else {
      setEditing(true);
    }
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <MainDiv>
        {/* <StatusModal /> */}

        <Wrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="/books.jpeg"
                alt=""
                style={{ width: 90, height: 90, borderRadius: "50%" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: ".5rem 1rem",
                  // alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <ValueText>Regina Akpan</ValueText>
                <ValueText>PortHarcourt, Nigeria</ValueText>
              </div>
            </div>
            <div>
              {!editing && (
                <SecDashButton
                  icon={<MdPersonAddAlt1 />}
                  value={"Add A New Child"}
                />
              )}

              <SecDashButton
                icon={editing ? <BiSave /> : <AiFillEdit />}
                value={!editing ? "Edit Details" : "Save Changes"}
                onClick={() => handleEdit(editing)}
              />
            </div>
          </div>
        </Wrapper>

        <div style={{ width: "100%", display: "flex" }}>
          <Wrapper>
            {/* <Title>Parent Details</Title> */}
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
                  {/* <SubTitle>{detail.header}</SubTitle> */}
                  <DashboardInput
                    label={detail.header}
                    placeholder={`Enter ${detail.header}`}
                  />
                  {/* <ValueText>{detail.value}</ValueText> */}
                </div>
              </div>
            ))}
          </Wrapper>

          <Spacer width={"2rem"} />

          <Wrapper>
            {/* <Title>Parent Details</Title> */}
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
                  {/* <SubTitle>{detail.header}</SubTitle> */}
                  <DashboardInput
                    label={detail.header}
                    placeholder={`Enter ${detail.header}`}
                  />
                </div>
              </div>
            ))}
          </Wrapper>
        </div>

        <Wrapper>
          <Table />
        </Wrapper>
      </MainDiv>
    </div>
  );
}
