import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import AuthInput from "../inputs/AuthInput";
import AuthButton from "../buttons/AuthButton";
import Table from "../tables/Table";
import API from "../../api/api";
import moment from "moment";
import { getCourses } from "../../hooks/course.hook";
import { getUsers } from "../../hooks/user.hook";
import { getCamps } from "../../hooks/camp.hook";
import { getLocations } from "../../hooks/location.hook";

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <AiFillEdit color={colors.gray5} size={25} />
        <AiFillDelete color={colors.red} size={25} />
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
        id: 1,
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
        dataField: "course_code",
        text: "Course Code",
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
        text: "Full Name",
      },
      {
        dataField: "role",
        text: "Role",
      },
      {
        dataField: "email",
        text: "Email Address",
      },
      {
        dataField: "last_login",
        text: "Last Seen",
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
        text: "Location Name",
      },
      {
        dataField: "city",
        text: "City",
      },
      {
        dataField: "address",
        text: "Address",
      },
      {
        dataField: "state",
        text: "State",
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

  const availableCourses = async () => {
    const courses = await getCourses();
    console.log(56789, courses);

    const allCourses = courses.map((course, index) => {
      const thisCourse = {
        id: index,
        name: renderText(course.course_name),
        course_code: renderText(course.course_code),
        created: renderText(moment(course.created_at).format("LLL")),
        action: renderAction(),
      };
      return thisCourse;
    });

    console.log(74383834, allCourses);
    setDetails({ ...details, courses: allCourses });
  };

  const availableUsers = async () => {
    const users = await getUsers();
    console.log(2323232, users);

    const allUsers = users.map((admin, index) => {
      const thisAdmin = {
        id: index,
        name: renderText(`${admin?.first_name} ${admin?.last_name}`),
        role: renderText(admin?.type),
        email: renderText(admin?.email),
        last_login: renderText(moment(admin?.logged_at).format("LLL")),
        created: renderText(moment(admin?.created_at).format("LLL")),
        action: renderAction(),
      };
      return thisAdmin;
    });

    console.log(74383834, allUsers);
    setDetails({ ...details, admins: allUsers });
  };

  const availableCamps = async () => {
    const camps = await getCamps();
    console.log(88888, camps);

    const allCamps = camps.map((camp, index) => {
      const thisCamp = {
        id: index,
        name: renderText(camp?.name),
        created: renderText(moment(camp?.created_at).format("LLL")),
        action: renderAction(),
      };
      return thisCamp;
    });

    console.log(78888, allCamps);
    setDetails({ ...details, camps: allCamps });
  };

  const availableLocations = async () => {
    const locations = await getLocations();
    console.log(2323232, locations);

    const allLocations = locations.map((location, index) => {
      const thisLocation = {
        id: index,
        name: renderText(location?.name),
        city: renderText(location?.city),
        address: renderText(location?.address),
        state: renderText(location?.state),
        created: renderText(moment(location?.created_at).format("LLL")),
        action: renderAction(),
      };
      return thisLocation;
    });

    console.log(74383834, allLocations);
    setDetails({ ...details, locations: allLocations });
  };

  useEffect(() => {
    if (id === "courses") {
      availableCourses();
    }

    if (id === "admins") {
      availableUsers();
    }

    if (id === "camps") {
      availableCamps();
    }

    if (id === "locations") {
      availableLocations();
    }
  }, []);

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
