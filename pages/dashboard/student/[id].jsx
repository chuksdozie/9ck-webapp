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
import { AiFillEdit } from "react-icons/ai";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { getSpecificStudent } from "../../../hooks/student.hook";
import moment from "moment";
import GeneralModal from "../../../components/modals/GeneralModal";
import AddNewSessionModal from "../../../components/modals/AddNewSessionModal";

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

const ActionText = styled.h2`
  font-weight: 200;
  font-size: ${fontSizes.m};
  margin: 0.1rem 0;
  /* width: 100%; */
  text-align: center;
  background-color: ${colors.primary};
  /* width: 60px; */
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

export default function Student() {
  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState([
    { header: "First Name", value: "Akpan" },
    { header: "Last Name", value: "Adffdg" },
  ]);
  const [restDetails, setRestDetails] = useState([
    { header: "Gender", value: "akpan@example.com" },
    { header: "Date of Birth", value: "Admin", type: "date" },
  ]);

  const renderAction = (id) => {
    return (
      <ActionText onClick={() => router.push(`/dashboard/student/${id}`)}>
        Do Nothing
      </ActionText>
    );
  };

  const renderText = (text) => {
    return <RegularText>{text}</RegularText>;
  };

  const [session, setSession] = useState([
    {
      id: 0,
      course: renderText("John Doe"),
      camp: renderText("Port Harcourt"),
      location: renderText("Abuja"),
      mode: renderText("Online"),
      year: renderText("2022"),
      action: renderAction(),
    },
  ]);

  const [editing, setEditing] = useState(false);
  const [student, setStudent] = useState({});
  const [changing, setChanging] = useState(false);
  const router = useRouter();
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

  const columns = [
    {
      dataField: "course",
      text: "Course",
    },
    {
      dataField: "camp",
      text: "Camp",
    },
    {
      dataField: "location",
      text: "Location",
    },
    {
      dataField: "mode",
      text: "Mode",
    },
    {
      dataField: "year",
      text: "Year",
    },
    // {
    //   dataField: "action",
    //   text: "",
    // },
  ];

  const populateTable = async (data) => {
    // console.log(4567890, parent.myKids);
    // const popo = parent?.myKids;
    // const mySessions = student?.sessions;
    console.log(234567890, data);
    const allSessions = data.map((par, index) => {
      console.log("987", par);
      const thisParent = {
        id: index,
        course: renderText(par?.course_id?.course_code),
        camp: renderText(par?.camp_id?.name),
        location: renderText(par?.location_id?.name),
        mode: renderText(par?.mode),
        year: renderText(moment(par?.created_at).format("LL")),
        // action: renderAction(),
      };
      return thisParent;
    });

    console.log(74383834, allSessions);
    setSession(allSessions);
  };

  const fetchStudent = async () => {
    const student = await getSpecificStudent(router.query.id);
    console.log(2323232, student);
    setStudent(student);
    const det = [...details];
    det[0].value = `${student?.first_name}`;
    det[1].value = `${student?.last_name}`;
    setDetails(det);

    const detAlt = [...restDetails];
    detAlt[0].value = `${student?.gender}`;
    detAlt[1].value = `${moment(student?.date_of_birth).format("YYYY-MM-DD")}`;
    setRestDetails(detAlt);

    await populateTable(student?.sessions);
  };

  useEffect(() => {
    if (router.query.id) {
      console.log(678765, router.query.id);
      fetchStudent();
    }
  }, [router.query.id, changing]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <MainDiv>
        {/* <StatusModal /> */}
        {openModal && (
          <GeneralModal
            children={<AddNewSessionModal id={router.query.id} />}
            onClose={() => {
              setOpenModal(false);
              setChanging(!changing);
            }}
          />
        )}

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
                <ValueText>{`${student?.first_name} ${student?.last_name}`}</ValueText>
                <ValueText>
                  {moment().diff(student?.date_of_birth, "years", false) +
                    " years"}
                </ValueText>
                {!editing && (
                  <SecDashButton
                    icon={<FaBookOpen />}
                    value={"See My Parent"}
                    onClick={() =>
                      router.push(`/dashboard/parent/${student?.parent_id?.id}`)
                    }
                  />
                )}
              </div>
            </div>
            <div>
              {!editing && (
                <SecDashButton
                  icon={<FaBookOpen />}
                  value={"Add A New Session"}
                  onClick={() => setOpenModal(true)}
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
                    value={detail.value}

                    // onChange={(e)=>setDetails(.target.value)}
                  />
                  {/* <ValueText>{detail.value}</ValueText> */}
                </div>
              </div>
            ))}
          </Wrapper>

          <Spacer width={"2rem"} />

          <Wrapper>
            {/* <Title>Parent Details</Title> */}
            {restDetails.map((detail, index) => (
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
                    value={detail.value}
                    type={detail.type || "text"}
                  />
                </div>
              </div>
            ))}
          </Wrapper>
        </div>
        <Wrapper>
          <Table data={session} columns={columns} label={"Courses"} />
        </Wrapper>
      </MainDiv>
    </div>
  );
}
