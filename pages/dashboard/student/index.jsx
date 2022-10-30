import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import AuthInput from "../../../components/inputs/AuthInput";
import AuthButton from "../../../components/buttons/AuthButton";
import { colors, fontSizes } from "../../../constants";
import StatusModal from "../../../components/modals/StatusModal";
import DisplayCard from "../../../components/cards/DisplayCard";
import Spacer from "../../../components/Spacer";
import "chart.js/auto";
import { Doughnut, Bar } from "react-chartjs-2";
import Table from "../../../components/tables/Table";
import { BiDetail } from "react-icons/bi";
import GeneralModal from "../../../components/modals/GeneralModal";
import AddNewCourseModal from "../../../components/modals/AddNewCourseModal";
import AddNewLocationModal from "../../../components/modals/AddNewLocationModal";
import AddNewCampModal from "../../../components/modals/AddNewCampModal";
import AddNewParentModal from "../../../components/modals/AddNewParentModal";
import AddNewSessionModal from "../../../components/modals/AddNewSessionModal";
import AddNewStudentModal from "../../../components/modals/AddNewStudentModal";
import AddNewUserModal from "../../../components/modals/AddNewUserModal";
import ViewDetailsModal from "../../../components/modals/ViewDetailsModal";
import SideBar from "../../../layout/SideBar";
import SecDashButton from "../../../components/buttons/SecDashButton";
import { AiFillAccountBook } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";

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

const ActionText = styled.h2`
  font-weight: 200;
  font-size: ${fontSizes.m};
  margin: 0.1rem 0;
  /* width: 100%; */
  text-align: center;
  background-color: ${colors.primary};
  width: 60px;
  border-radius: 5px;
  padding: 2px;
  color: ${colors.light};
  cursor: pointer;
  border: 1px solid ${colors.gray3};
`;

const RegularText = styled.h2`
  font-weight: 400;
  font-size: ${fontSizes.m};
  margin: 0.1rem 0;
  /* width: 100%; */
  text-align: left;
  /* background-color: red; */
  /* width: 100%; */
  color: ${colors.gray5};
`;

export default function Index() {
  const router = useRouter();
  const [details, setDetails] = useState([
    { header: "Fullname", value: "Akpan Akan Utoh" },
    { header: "Email Address", value: "akpan@example.com" },
    { header: "Role", value: "Admin" },
  ]);
  const [addNew, setAddNew] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);

  const resetModals = () => {
    setAddNew(false);
    setViewDetails(false);
  };
  const handleViewDetails = () => {
    resetModals();
    setViewDetails(true);
    console.log(11111);
  };

  const handleAddNew = () => {
    resetModals();
    setAddNew(true);
    console.log(22222);
  };

  const handleAddNewStudent = () => {
    resetModals();
    setAddNew(true);
    console.log(22222);
  };

  const renderAction = () => {
    return (
      <ActionText onClick={() => router.push("/dashboard/student/idfornow")}>
        View
      </ActionText>
    );
  };

  const renderText = (text) => {
    return <RegularText>{text}</RegularText>;
  };

  const [students, setStudents] = useState([
    {
      id: 0,
      fullname: renderText("John Doe"),
      location: renderText("Port Harcourt"),
      last_course: renderText("LEGO 101"),
      last_session: renderText("Summer - 2022"),
      age: renderText("7"),
      action: renderAction(),
    },
    {
      id: 0,
      fullname: renderText("John Doe"),
      location: renderText("Port Harcourt"),
      last_course: renderText("LEGO 101"),
      last_session: renderText("Summer - 2022"),
      age: renderText("7"),
      action: renderAction(),
    },
    {
      id: 0,
      fullname: renderText("John Doe"),
      location: renderText("Port HArcourt"),
      last_course: renderText("LEGO 101"),
      last_session: renderText("Summer - 2022"),
      age: renderText("7"),
      action: renderAction(),
    },
    {
      id: 0,
      fullname: renderText("John Doe"),
      location: renderText("Port Harcourt"),
      last_course: renderText("LEGO 101"),
      last_session: renderText("Summer - 2022"),
      age: renderText("7"),
      action: renderAction(),
    },
    {
      id: 0,
      fullname: renderText("John Doe"),
      location: renderText("Port Harcourt"),
      last_course: renderText("LEGO 101"),
      last_session: renderText("Summer - 2022"),
      age: renderText("7"),
      action: renderAction(),
    },
  ]);

  const columns = [
    {
      dataField: "fullname",
      text: "Full Name",
    },

    {
      dataField: "location",
      text: "Location",
    },
    {
      dataField: "last_course",
      text: "Last Course",
    },
    {
      dataField: "last_session",
      text: "Number of Kids",
    },
    {
      dataField: "age",
      text: "Age",
    },
    {
      dataField: "action",
      text: "",
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <MainDiv>
        {/* <StatusModal /> */}
        {/* <GeneralModal children={<AddNewParentModal />} /> */}
        {/* <GeneralModal children={<AddNewStudentModal />} /> */}
        {/* FOR VIEW DETAILS */}
        {/* {viewDetails && (
          <GeneralModal
            children={<ViewDetailsModal />}
            onClose={() => resetModals()}
          />
        )} */}

        {/* FOR ADD NEW */}
        {addNew && (
          <GeneralModal
            children={<AddNewStudentModal />}
            onClose={() => resetModals()}
          />
        )}

        <Wrapper>
          {/* <div
            style={{
              display: "flex",
              width: "100%",
              // backgroundColor: "red",
              justifyContent: "flex-end",
            }}
          >
            <SecDashButton
              onClick={() => handleAddNewStudent()}
              value={`Add a New Student`}
              icon={<FaUserPlus />}
            />
          </div> */}

          <AuthInput placeholder={"Search for a student..."} />
        </Wrapper>
        <Wrapper>
          <div style={{ height: "500px", overflowY: "scroll" }}>
            <Table data={students} columns={columns} label={"Students"} />
          </div>
        </Wrapper>
      </MainDiv>
    </div>
  );
}
