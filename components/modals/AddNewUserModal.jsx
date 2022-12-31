import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import AuthInput from "../inputs/AuthInput";
import AuthButton from "../buttons/AuthButton";
import API from "../../api/api";
import { toast } from "react-toastify";
import Dropdown from "../inputs/Dropdown";

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

const AddNewUserModal = () => {
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    type: "",
  });

  const options = [
    { value: "admin", text: "Admin" },
    { value: "super-admin", text: "Super Admin" },
    { value: "user", text: "User" },
  ];

  const handleAddUser = async () => {
    if (
      !details.first_name ||
      !details.last_name ||
      !details.email ||
      !details.type
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const { data } = await API.post("/user/add", details);
      toast.success(data?.message);
      setDetails({
        first_name: "",
        last_name: "",
        email: "",
        type: "",
      });
      return;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return;
    }
  };

  useEffect(() => {
    // console.log(details);
  }, [details]);
  return (
    <Container>
      <Title>Add a new user</Title>
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
        label={"Email Address"}
        placeholder={"Ex. johndoe@exle.com"}
        type={"email"}
        value={details.email}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />

      <Dropdown
        label={"Role"}
        options={options}
        defaultText="Select a role"
        onChange={(e) => setDetails({ ...details, type: e.target.value })}
      />
      <AuthButton label={"Add New User"} onClick={() => handleAddUser()} />
    </Container>
  );
};

export default AddNewUserModal;
