import React, { useState } from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import AuthInput from "../inputs/AuthInput";
import AuthButton from "../buttons/AuthButton";
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

const AddNewCourseModal = () => {
  const [details, setDetails] = useState({
    course_name: "",
    course_code: "",
    description: "",
  });

  const handleAddCourse = async () => {
    if (!details.course_name || !details.course_code || !details.description) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const { data } = await API.post("/course/add", details);
      console.log(data);
      toast.success(data?.message);
      setDetails({
        course_name: "",
        course_code: "",
        description: "",
      });
      return;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return;
    }
  };

  return (
    <Container>
      <Title>Add a new course</Title>
      <AuthInput
        label={"Name"}
        placeholder={"Ex. Introduction to robotics"}
        value={details.course_name}
        onChange={(e) =>
          setDetails({ ...details, course_name: e.target.value })
        }
      />
      <AuthInput
        label={"Code"}
        placeholder={"Ex. LEGO 101"}
        value={details.course_code}
        onChange={(e) =>
          setDetails({ ...details, course_code: e.target.value })
        }
      />
      <AuthInput
        label={"Description"}
        placeholder={"Ex. Lorem ipsum"}
        value={details.description}
        onChange={(e) =>
          setDetails({ ...details, description: e.target.value })
        }
      />
      <AuthButton label={"Add Course"} onClick={() => handleAddCourse()} />
    </Container>
  );
};

export default AddNewCourseModal;
