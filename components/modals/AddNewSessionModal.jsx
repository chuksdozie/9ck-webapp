import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import AuthInput from "../inputs/AuthInput";
import AuthButton from "../buttons/AuthButton";
import Dropdown from "../inputs/Dropdown";
import { getCourses } from "../../hooks/course.hook";
import { getCamps } from "../../hooks/camp.hook";
import { getLocations } from "../../hooks/location.hook";
import { toast } from "react-toastify";
import API from "../../api/api";

const Container = styled.div`
  background-color: ${colors.light};
  color: ${colors.light};
  padding: 2rem;
  width: 400px;
  min-height: 300px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const AddNewSessionModal = ({ id }) => {
  const [details, setDetails] = useState({
    course_id: "",
    camp_id: "",
    location_id: "",
    mode: "",
  });

  const [courses, setCourses] = useState([]);
  const [camps, setCamps] = useState([]);
  const [locations, setLocations] = useState([]);
  const [mode, setMode] = useState([
    { value: "online", text: "Online" },
    { value: "offline", text: "Offline" },
  ]);

  const handleAddSession = async () => {
    if (
      !details.course_id ||
      !details.camp_id ||
      !details.location_id ||
      !details.mode
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const { data } = await API.post(`/session/${id}/create`, details);
      toast.success(data?.message);
      setDetails({
        course_id: "",
        camp_id: "",
        location_id: "",
        mode: "",
      });
      return;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return;
    }
  };

  const getAll = async () => {
    const fetchedCourses = await getCourses();
    const fetchedCamps = await getCamps();
    const fetchedLocations = await getLocations();
    for (let i = 0; i < fetchedCourses.length; i++) {
      fetchedCourses[i].text = fetchedCourses[i].course_code;
      fetchedCourses[i].value = fetchedCourses[i].id;
    }
    for (let i = 0; i < fetchedCamps.length; i++) {
      fetchedCamps[i].text = fetchedCamps[i].name;
      fetchedCamps[i].value = fetchedCamps[i].id;
    }
    for (let i = 0; i < fetchedLocations.length; i++) {
      fetchedLocations[i].text = fetchedLocations[i].name;
      fetchedLocations[i].value = fetchedLocations[i].id;
    }
    setCourses(fetchedCourses);
    setCamps(fetchedCamps);
    setLocations(fetchedLocations);
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    // console.log(details);
  }, [details]);

  return (
    <Container>
      <Title>Register Session</Title>
      <Title>{id}</Title>
      <Dropdown
        options={courses}
        label={"Course"}
        value={details.course_id}
        defaultText={"Select a course"}
        onChange={(e) => setDetails({ ...details, course_id: e.target.value })}
      />
      <Dropdown
        options={camps}
        label={"Camp"}
        value={details.camp_id}
        defaultText={"Select a camp"}
        onChange={(e) => setDetails({ ...details, camp_id: e.target.value })}
      />
      <Dropdown
        options={locations}
        label={"Location"}
        value={details.location_id}
        defaultText={"Select a location"}
        onChange={(e) =>
          setDetails({ ...details, location_id: e.target.value })
        }
      />
      <Dropdown
        options={mode}
        label={"Mode"}
        value={details.mode}
        defaultText={"Select a mode"}
        onChange={(e) => setDetails({ ...details, mode: e.target.value })}
      />
      <AuthButton
        label={"Register Session"}
        onClick={() => handleAddSession()}
      />
    </Container>
  );
};

export default AddNewSessionModal;
