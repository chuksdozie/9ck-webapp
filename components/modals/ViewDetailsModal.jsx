import React, { useState } from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import AuthInput from "../inputs/AuthInput";
import AuthButton from "../buttons/AuthButton";
import Table from "../tables/Table";

const Container = styled.div`
  background-color: ${colors.light};
  color: ${colors.light};
  padding: 2rem;
  max-width: 80%;
  min-height: 300px;
  max-height: 80%;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* position: relative; */
  /* overflow-x: scroll; */
`;

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* position: relative; */
  overflow-x: scroll;
`;

const Title = styled.h1`
  font-size: ${fontSizes.l};
  text-align: center;
  color: #251e1e;
  text-align: center;
  width: 100%;
  /* width: 100%; */
  /* background-color: #1d6aad; */
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

const ActionText = styled.h2`
  font-weight: 200;
  font-size: ${fontSizes.m};
  margin: 0.1rem 0.5rem;
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

const ViewDetailsModal = ({ id }) => {
  const renderAction = () => {
    return (
      <div style={{ display: "flex" }}>
        <ActionText>Edit</ActionText>
        <ActionText style={{ backgroundColor: colors.red }}>Delete</ActionText>
      </div>
    );
  };

  const renderText = (text) => {
    return <RegularText>{text}</RegularText>;
  };

  const [details, setDetails] = useState({
    camps: [
      {
        id: 0,
        name: renderText("Summer Camp"),
        created: renderText("29th Sept. 2021"),
        action: renderAction(),
      },
      {
        id: 0,
        name: renderText("Summer Camp"),
        created: renderText("29th Sept. 2021"),
        action: renderAction(),
      },
    ],
    courses: [
      {
        id: 0,
        name: renderText("Summer Camp"),
        created: renderText("29th Sept. 2021"),
        action: renderAction(),
      },
      {
        id: 0,
        name: renderText("Summer Camp"),
        created: renderText("29th Sept. 2021"),
        action: renderAction(),
      },
    ],
    admins: [
      {
        id: 0,
        name: renderText("Summer Camp"),
        created: renderText("29th Sept. 2021"),
        action: renderAction(),
      },
      {
        id: 0,
        name: renderText("Summer Camp"),
        created: renderText("29th Sept. 2021"),
        action: renderAction(),
      },
    ],
    locations: [
      {
        id: 0,
        name: renderText("Summer Camp"),
        created: renderText("29th Sept. 2021"),
        action: renderAction(),
      },
      {
        id: 0,
        name: renderText("Summer Camp"),
        created: renderText("29th Sept. 2021"),
        action: renderAction(),
      },
    ],
  });

  const columns = {
    camps: [
      {
        dataField: "name",
        text: "Camp Name",
      },
      {
        dataField: "created",
        text: "Created On",
      },
      {
        dataField: "action",
        text: "",
      },
    ],
    courses: [
      {
        dataField: "name",
        text: "Camp Name",
      },
      {
        dataField: "created",
        text: "Created On",
      },
      {
        dataField: "action",
        text: "",
      },
    ],
    admins: [
      {
        dataField: "name",
        text: "Camp Name",
      },
      {
        dataField: "created",
        text: "Created On",
      },
      {
        dataField: "action",
        text: "",
      },
    ],
    locations: [
      {
        dataField: "name",
        text: "Camp Name",
      },
      {
        dataField: "created",
        text: "Created On",
      },
      {
        dataField: "action",
        text: "",
      },
    ],
  };
  return (
    <Container>
      <Title>{id}</Title>
      <AuthInput label={""} placeholder={"Search for data ..."} />
      <TableContainer>
        <Table data={details[id]} columns={columns[id]} />
      </TableContainer>
    </Container>
  );
};

export default ViewDetailsModal;
