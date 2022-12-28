import React, { useState } from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import AuthInput from "../inputs/AuthInput";
import AuthButton from "../buttons/AuthButton";
import API from "../../api/api";
import Dropdown from "../inputs/Dropdown";
import { toast } from "react-toastify";

const Container = styled.div`
  background-color: ${colors.light};
  color: ${colors.light};
  padding: 2rem;
  width: 400px;
  min-height: 300px;
  max-height: 80%;
  border-radius: 7px;
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

const AddNewStudentModal = ({ id }) => {
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
  });

  const handleAddStudent = async () => {
    if (
      !details.first_name ||
      !details.last_name ||
      !details.date_of_birth ||
      !details.gender
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const { data } = await API.post(`/student/${id}/create`, details);
      console.log(data);
      toast.success(data?.message);
      setDetails({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        gender: "",
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
      <Title>Add a new student</Title>
      <Title>{id}</Title>
      <AuthInput
        label={"Firstname"}
        placeholder={"Ex. John"}
        type={"text"}
        value={details.first_name}
        onChange={(e) => setDetails({ ...details, first_name: e.target.value })}
      />
      <AuthInput
        label={"Lastname"}
        placeholder={"Ex. Doe"}
        type={"text"}
        value={details.last_name}
        onChange={(e) => setDetails({ ...details, last_name: e.target.value })}
      />
      <AuthInput
        label={"Date of birth"}
        placeholder={"Ex. 25/08/1995"}
        type="date"
        value={details.date_of_birth}
        onChange={(e) =>
          setDetails({ ...details, date_of_birth: e.target.value })
        }
      />
      <Dropdown
        options={[
          { value: "male", text: "Male" },
          { value: "female", text: "Female" },
        ]}
        label={"Gender"}
        defaultText={"Select a gender"}
        onChange={(e) => setDetails({ ...details, gender: e.target.value })}
      />
      <AuthButton label={"Add Student"} onClick={() => handleAddStudent()} />
    </Container>
  );
};

export default AddNewStudentModal;
