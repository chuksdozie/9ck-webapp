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

const AddNewLocationModal = () => {
  const [details, setDetails] = useState({
    name: "",
    city: "",
    address: "",
    state: "",
  });

  const handleAddLocation = async () => {
    if (!details.name || !details.city || !details.address || !details.state) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const { data } = await API.post("/location/add", details);
      console.log(data);
      toast.success(data?.message);
      setDetails({
        name: "",
        city: "",
        address: "",
        state: "",
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
      <Title>Add a new location</Title>
      <AuthInput
        label={"Name"}
        placeholder={"Ex. PortHarcout Camp 1"}
        value={details.name}
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      <AuthInput
        label={"Address"}
        placeholder={"Ex. 11 Abiye Odili"}
        value={details.address}
        onChange={(e) => setDetails({ ...details, address: e.target.value })}
      />
      <AuthInput
        label={"City"}
        placeholder={"Ex. Port Harcourt"}
        value={details.city}
        onChange={(e) => setDetails({ ...details, city: e.target.value })}
      />
      <AuthInput
        label={"State"}
        placeholder={"Ex. Rivers"}
        value={details.state}
        onChange={(e) => setDetails({ ...details, state: e.target.value })}
      />
      <AuthButton label={"Add Location"} onClick={() => handleAddLocation()} />
    </Container>
  );
};

export default AddNewLocationModal;
