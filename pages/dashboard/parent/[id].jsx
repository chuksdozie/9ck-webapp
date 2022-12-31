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
import { editParent, getSpecificParent } from "../../../hooks/parent.hook";
import GeneralModal from "../../../components/modals/GeneralModal";
import AddNewStudentModal from "../../../components/modals/AddNewStudentModal";
import moment from "moment";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { toast } from "react-toastify";
import { ImCancelCircle } from "react-icons/im";

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

export default function Parent() {
  const router = useRouter();
  const renderAction = (id) => {
    return (
      <ActionText onClick={() => router.push(`/dashboard/student/${id}`)}>
        View
      </ActionText>
    );
  };

  const renderText = (text) => {
    return <RegularText>{text}</RegularText>;
  };

  const [kids, setKids] = useState([
    {
      id: 0,
      fullname: renderText("John Doe"),
      last_course: renderText("Port Harcourt"),
      age: renderText("2"),
      action: renderAction(),
    },
  ]);

  const [details, setDetails] = useState([
    {
      header: "First Name",
      value: "parent?.g1_first_name",
      id: "g1_first_name",
    },
    {
      header: "Last Name",
      value: "parent?.g1_first_name",
      id: "g1_last_name",
    },
    {
      header: "Email Address",
      value: "akpan@example.com",
      id: "g1_email",
    },
    { header: "Address", value: "Admin", id: "address" },
    { header: "Phone Number", value: "Admin", id: "g1_phone_number" },
  ]);
  const [altDetails, setAltDetails] = useState([
    {
      header: "First Name (Alternative)",
      value: "Akpan Akan Utoh",
      id: "g2_first_name",
    },
    {
      header: "Last Name (Alternative)",
      value: "Akpan Akan Utoh",
      id: "g2_last_name",
    },
    {
      header: "Email Address (Alternative)",
      value: "akpan@example.com",
      id: "g2_email",
    },
    {
      header: "Address (Alternative)",
      value: "Admin",
      id: "alternative_address",
    },
    {
      header: "Phone Number (Alternative)",
      value: "Admin",
      id: "g2_phone_number",
    },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [parent, setParent] = useState({
    address: "",
    alternative_address: "",
    created_at: "",
    g1_email: "",
    g1_first_name: "",
    g1_last_name: "",
    g1_phone_number: "",
    g2_email: "",
    g2_first_name: "",
    g2_last_name: "",
    g2_phone_number: "",
  });
  const [editing, setEditing] = useState(false);
  const [changing, setChanging] = useState(false);
  const handleEdit = async (state) => {
    if (state) {
      try {
        const edittedParent = await editParent(router.query.id, parent);
        // after everything
        toast.success("Parent updated!");
        setEditing(false);
        return;
      } catch (error) {
        toast.success(error.response.data.message);
        return error;
      }
    } else {
      setEditing(true);
    }
  };

  const columns = [
    {
      dataField: "fullname",
      text: "Full name",
    },
    {
      dataField: "age",
      text: "Age",
    },
    {
      dataField: "gender",
      text: "Gender",
    },
    {
      dataField: "last_course",
      text: "Last Course",
    },
    {
      dataField: "action",
      text: "",
    },
  ];

  const populateTable = async (myKidsOfParent) => {
    const allParents = myKidsOfParent.map((par, index) => {
      const thisParent = {
        id: index,

        fullname: renderText(`${par?.first_name} ${par?.last_name}`),
        gender: renderText(par?.gender),
        last_course: renderText(par?.gender),
        age: renderText(
          moment().diff(par?.date_of_birth, "years", false) + " years"
        ),
        action: renderAction(par?.id),
      };
      return thisParent;
    });

    setKids(allParents);
  };

  const fetchParent = async () => {
    const parent = await getSpecificParent(router.query.id);
    setParent(parent);
    const det = [...details];
    det[0].value = parent?.g1_first_name;
    det[1].value = parent?.g1_last_name;
    det[2].value = parent?.g1_email;
    det[3].value = parent?.address;
    det[4].value = parent?.g1_phone_number;
    setDetails(det);

    const detAlt = [...altDetails];
    detAlt[0].value = parent?.g2_first_name;
    detAlt[1].value = parent?.g2_last_name;
    detAlt[2].value = parent?.g2_email;
    detAlt[3].value = parent?.alternative_address;
    detAlt[4].value = parent?.g2_phone_number;
    setAltDetails(detAlt);

    await populateTable(parent?.myKids);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchParent();
    }
  }, [router.query.id, changing, editing]);

  useEffect(() => {
    // console.log(parent);
  }, [parent]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <MainDiv>
        {/* <StatusModal /> */}
        {openModal && (
          <GeneralModal
            children={<AddNewStudentModal id={router.query.id} />}
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
                <ValueText>{`${parent?.g1_first_name} ${parent?.g1_last_name}`}</ValueText>
                <ValueText>{parent?.address}</ValueText>
              </div>
            </div>
            <div>
              {!editing && (
                <SecDashButton
                  icon={<MdPersonAddAlt1 />}
                  value={"Add A New Child"}
                  onClick={() => setOpenModal(true)}
                />
              )}

              {editing && (
                <SecDashButton
                  onClick={() => setEditing(false)}
                  value={`Cancel`}
                  icon={<ImCancelCircle />}
                />
              )}
              <SecDashButton
                icon={editing ? <BiSave /> : <AiFillEdit />}
                value={!editing ? "Edit Details" : "Save Changes"}
                onClick={() => {
                  handleEdit(editing);
                }}
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
                    disabled={!editing}
                    onChange={(e) => {
                      const newArray = [...details];
                      newArray[index].value = e.target.value;
                      setDetails(newArray);
                      setParent({ ...parent, [detail.id]: e.target.value });
                    }}
                  />
                  {/* <ValueText>{detail.value}</ValueText> */}
                </div>
              </div>
            ))}
          </Wrapper>

          <Spacer width={"2rem"} />

          <Wrapper>
            {/* <Title>Parent Details</Title> */}
            {altDetails.map((detail, index) => (
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
                    disabled={!editing}
                    onChange={(e) => {
                      const newArray = [...altDetails];
                      newArray[index].value = e.target.value;
                      setAltDetails(newArray);
                      setParent({ ...parent, [detail.id]: e.target.value });
                    }}
                  />
                </div>
              </div>
            ))}
          </Wrapper>
        </div>

        <Wrapper>
          <Table data={kids} columns={columns} label={"My Kids"} />
        </Wrapper>
      </MainDiv>
    </div>
  );
}
