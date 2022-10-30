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
import ViewDetailsModal from "../../components/modals/ViewDetailsModal";
import SideBar from "../../layout/SideBar";

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

const ActionText = styled.h2`
  font-weight: 700;
  font-size: ${fontSizes.m};
  margin: 1rem 0 0.5rem;
  /* width: 100%; */
  text-align: center;
  /* background-color: red; */
  /* width: 100%; */
  color: ${colors.gray5};
  cursor: pointer;
`;

const RegularText = styled.h2`
  font-weight: 400;
  font-size: ${fontSizes.m};
  margin: 1rem 0 0.5rem;
  /* width: 100%; */
  text-align: left;
  /* background-color: red; */
  /* width: 100%; */
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

export default function Index() {
  const router = useRouter();
  const [details, setDetails] = useState([
    { header: "Fullname", value: "Akpan Akan Utoh" },
    { header: "Email Address", value: "akpan@example.com" },
    { header: "Role", value: "Admin" },
  ]);
  const [addNew, setAddNew] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const [options, setOptions] = useState([
    { id: "courses", name: "Courses" },
    { id: "admins", name: "Admins" },
    { id: "camps", name: "Camps" },
    { id: "locations", name: "Locations" },
    { id: "parents", name: "Parents" },
    { id: "students", name: "Students" },
  ]);
  const [child, setChild] = useState();

  const resetModals = () => {
    setAddNew(false);
    setViewDetails(false);
    setChild();
  };
  const handleViewDetails = (id) => {
    resetModals();
    if (id === "parents") {
      router.push("/dashboard/parent");
    } else if (id === "students") {
      router.push("/dashboard/student");
    } else {
      setViewDetails(true);
      console.log(11111);
      setChild(<ViewDetailsModal id={id} />);
    }
  };

  const handleAddNew = (id) => {
    resetModals();

    if (id === "parents") {
      router.push("/dashboard/parent");
    } else if (id === "students") {
      router.push("/dashboard/student");
    } else {
      if (id === "courses") {
        setChild(<AddNewCourseModal />);
      } else if (id === "admins") {
        setChild(<AddNewUserModal />);
      } else if (id === "camps") {
        setChild(<AddNewCampModal />);
      } else if (id === "locations") {
        setChild(<AddNewLocationModal />);
      } else if (id === "parents") {
        setChild(<AddNewParentModal />);
      } else if (id === "students") {
        setChild(<AddNewStudentModal />);
      }
      setAddNew(true);
    }
  };

  const renderAction = () => {
    return <ActionText>Deactivate</ActionText>;
  };

  const renderText = (text) => {
    return <RegularText>{text}</RegularText>;
  };

  const [users, setUsers] = useState([
    {
      id: 0,
      first_name: renderText("John"),
      last_name: renderText("Doe"),
      role: renderText("User"),
      last_seen: renderText("30th Sept. 02:30pm"),
      action: renderAction(),
    },
    {
      id: 0,
      first_name: renderText("John"),
      last_name: renderText("Doe"),
      role: renderText("User"),
      last_seen: renderText("30th Sept. 02:30pm"),
      action: renderAction(),
    },
    {
      id: 0,
      first_name: renderText("John"),
      last_name: renderText("Doe"),
      role: renderText("User"),
      last_seen: renderText("30th Sept. 02:30pm"),
      action: renderAction(),
    },
    {
      id: 0,
      first_name: renderText("John"),
      last_name: renderText("Doe"),
      role: renderText("User"),
      last_seen: renderText("30th Sept. 02:30pm"),
      action: renderAction(),
    },
  ]);

  const columns = [
    {
      dataField: "first_name",
      text: "First Name",
    },
    {
      dataField: "last_name",
      text: "Last Name",
    },
    {
      dataField: "role",
      text: "Role",
    },
    {
      dataField: "last_seen",
      text: "Last Access",
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
        {viewDetails && (
          <GeneralModal children={child} onClose={() => resetModals()} />
        )}

        {/* FOR ADD NEW */}
        {addNew && (
          <GeneralModal children={child} onClose={() => resetModals()} />
        )}

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
            {options.map((option) => (
              <DisplayCard
                label={option.name}
                id={option.id}
                onClick={() => handleViewDetails(option.id)}
                onAddClick={() => handleAddNew(option.id)}
              />
            ))}
          </div>
        </Wrapper>
        <Wrapper>
          <div style={{ height: "500px", overflowY: "scroll" }}>
            <Table data={users} columns={columns} label={"Recent Activities"} />
          </div>
        </Wrapper>
      </MainDiv>
    </div>
  );
}
