import React, { useState } from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import AuthInput from "../inputs/AuthInput";
import AuthButton from "../buttons/AuthButton";
import API from "../../api/api";
import { toast } from "react-toastify";

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

const AddNewCampModal = () => {
  const [details, setDetails] = useState({
    name: "",
  });

  const handleAddCamp = async () => {
    if (!details.name) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const { data } = await API.post("/camp/add", details);
      console.log(data);
      toast.success(data?.message);
      setDetails({
        name: "",
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
      <Title>Add a new camp</Title>
      <AuthInput
        label={"Name"}
        placeholder={"Ex. January weekend"}
        value={details.name}
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      <AuthButton label={"Add Camp"} onClick={() => handleAddCamp()} />
    </Container>
  );
};

export default AddNewCampModal;
