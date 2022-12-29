import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
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
import API from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../hooks/course.hook";
import { getUsers } from "../../hooks/user.hook";
import moment from "moment";
import { getCamps } from "../../hooks/camp.hook";
import { getLocations } from "../../hooks/location.hook";
import { getParents } from "../../hooks/parent.hook";
import { getStudents } from "../../hooks/student.hook";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

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
  const account = useSelector((state) => state?.account?.account);
  const [details, setDetails] = useState([
    {
      header: "Fullname",
      value: `${account?.first_name} ${account?.last_name}` ?? "",
    },
    { header: "Email Address", value: account?.email ?? "" },
    { header: "Role", value: account?.type ?? "" },
  ]);
  const [addNew, setAddNew] = useState(false);
  const [changing, setChanging] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const [options, setOptions] = useState([
    {
      id: "courses",
      name: "Courses",
      total: "",
      restricted: false,
    },
    {
      id: "admins",
      name: "Admins",
      total: "",
      restricted: account.type !== "super-admin",
    },
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
    setChanging(!changing);
    if (id === "parents") {
      router.push("/dashboard/parent");
    } else if (id === "students") {
      router.push("/dashboard/student");
    } else {
      setViewDetails(true);
      setChild(<ViewDetailsModal id={id} />);
    }
  };

  const handleAddNew = (id) => {
    resetModals();
    setChanging(!changing);
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
  ]);

  const columns = [
    {
      dataField: "name",
      text: "First Name",
      headerStyle: (colum, colIndex) => {
        return { width: "250px" };
      },
      style: { verticalAlign: "middle", color: colors.gray5 },
      filter: textFilter(),
    },
    {
      dataField: "email",
      text: "Email Address",
      headerStyle: (colum, colIndex) => {
        return { width: "250px" };
      },
      style: { verticalAlign: "middle", color: colors.gray5 },
      filter: textFilter(),
    },
    {
      dataField: "role",
      text: "Role",
      style: { verticalAlign: "middle", color: colors.gray5 },
      filter: textFilter(),
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

  const availableCourses = async () => {
    const response = await getCourses();
    let newArray = [...options];
    newArray[0].total = response.length;
    setOptions(newArray);
    return;
  };

  const availableAdmins = async () => {
    const response = await getUsers();
    let newArray = [...options];
    newArray[1].total = response?.length;
    setOptions(newArray);
    const allUsers = response.map((admin, index) => {
      const thisAdmin = {
        id: index,
        name: `${admin?.first_name} ${admin?.last_name}`,
        role: admin?.type,
        email: admin?.email,
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
    setUsers(allUsers);
    return;
  };

  const availableCamps = async () => {
    const response = await getCamps();
    let newArray = [...options];
    newArray[2].total = response.length;
    setOptions(newArray);
    return;
  };

  const availableLocations = async () => {
    const response = await getLocations();
    let newArray = [...options];
    newArray[3].total = response.length;
    setOptions(newArray);
    return;
  };

  const availableParents = async () => {
    const response = await getParents();
    let newArray = [...options];
    newArray[4].total = response.length;
    setOptions(newArray);
    return;
  };

  const availableStudents = async () => {
    const response = await getStudents();
    let newArray = [...options];
    newArray[5].total = response.length;
    setOptions(newArray);
    return;
  };

  useEffect(() => {
    availableCourses();
    if (account?.type === "super-admin") {
      availableAdmins();
    }
    availableCamps();
    availableLocations();
    availableParents();
    availableStudents();
  }, [changing]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <MainDiv>
        {/* <StatusModal /> */}
        {viewDetails && (
          <GeneralModal
            children={child}
            onClose={() => {
              resetModals();
              setChanging(!changing);
            }}
          />
        )}

        {/* FOR ADD NEW */}
        {addNew && (
          <GeneralModal
            children={child}
            onClose={() => {
              resetModals();
              setChanging(!changing);
            }}
          />
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
            <Title>Recent Registration Stats</Title>
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
            {options.map((option) => {
              if (option && !option.restricted) {
                return (
                  <DisplayCard
                    label={option.name}
                    total={option.total ?? "N/A"}
                    id={option.id}
                    onClick={() => handleViewDetails(option.id)}
                    onAddClick={() => handleAddNew(option.id)}
                  />
                );
              }
            })}
          </div>
        </Wrapper>
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
