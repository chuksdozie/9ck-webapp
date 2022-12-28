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
import { BiDetail, BiSave } from "react-icons/bi";
import DashboardInput from "../../components/inputs/DashhboardInput";
import SecDashButton from "../../components/buttons/SecDashButton";
import SideBar from "../../layout/SideBar";
import { FaUserPlus } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { useSelector } from "react-redux";
import { getUsers } from "../../hooks/user.hook";
import moment from "moment";

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

export default function Settings() {
  const account = useSelector((state) => state?.account?.account);
  console.log(66353543, account);
  const [details, setDetails] = useState([
    { header: "First Name", value: account?.first_name },
    { header: "Email Address", value: account?.email },
  ]);
  const [restDetails, setRestDetails] = useState([
    { header: "Last Name", value: account?.last_name },
    { header: "Role", value: account.type },
  ]);
  const [editing, setEditing] = useState(false);

  const handleEdit = (state) => {
    if (state) {
      // deactivate all buttons
      // after loading and all
      setEditing(false);
      return;
    } else {
      setEditing(true);
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

  const availableAdmins = async () => {
    const response = await getUsers();
    console.log(3456789, response.length);
    // setTotals({ ...totals, admins: response.length });
    // let newArray = [...options];
    // newArray[1].total = response.length;
    // console.log(newArray[1]);
    // setOptions(newArray);
    // options[0].total = response.length;
    // setOptions(options);
    console.log("ENGINE", response);
    const allUsers = response.map((admin, index) => {
      const thisAdmin = {
        id: index,
        first_name: renderText(`${admin?.first_name}`),
        last_name: renderText(`${admin?.last_name}`),
        role: renderText(admin?.type),
        email: renderText(admin?.email),
        last_seen: renderText(
          admin?.logged_at
            ? moment(admin?.logged_at).format("LLL")
            : "Never Accessed"
        ),
        created: renderText(moment(admin?.created_at).format("LL")),
        action: renderAction(),
      };
      return thisAdmin;
    });

    console.log(74383834, allUsers);
    setUsers(allUsers);
    return;
  };

  useEffect(() => {
    if (account.type === "super-admin") {
      availableAdmins();
    }
  }, []);
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
                <ValueText>{`${account?.first_name} ${account?.last_name}`}</ValueText>
                <ValueText>{account?.type}</ValueText>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  // backgroundColor: "red",
                  justifyContent: "flex-end",
                }}
              >
                {editing && (
                  <SecDashButton
                    onClick={() => setEditing(false)}
                    value={`Cancel`}
                    icon={<ImCancelCircle />}
                  />
                )}
                <SecDashButton
                  onClick={() => handleEdit(editing)}
                  value={!editing ? `Edit Details` : `Save Changes`}
                  icon={!editing ? <AiFillEdit /> : <BiSave />}
                />
              </div>
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
                  />
                </div>
              </div>
            ))}
          </Wrapper>
        </div>
        {account?.type === "super-admin" && (
          <Wrapper>
            <div style={{ height: "500px", overflowY: "scroll" }}>
              <Table
                data={users}
                columns={columns}
                label={"Recent Activities"}
              />
            </div>
          </Wrapper>
        )}
      </MainDiv>
    </div>
  );
}
