import React, { useEffect, useState } from "react";
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

const AddNewParentModal = () => {
  const [details, setDetails] = useState({
    g1_first_name: "",
    g1_last_name: "",
    g1_email: "",
    g2_first_name: "",
    g2_last_name: "",
    g2_email: "",
    address: "",
    alternative_address: "",
    g1_phone_number: "",
    g2_phone_number: "",
  });

  const handleAddParent = async () => {
    if (
      !details.g1_first_name ||
      !details.g1_last_name ||
      !details.g1_email ||
      !details.address ||
      !details.g1_phone_number
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      const { data } = await API.post("/parent/create", details);
      console.log(data);
      toast.success(data?.message);
      setDetails({
        g1_first_name: "",
        g1_last_name: "",
        g1_email: "",
        g2_first_name: "",
        g2_last_name: "",
        g2_email: "",
        address: "",
        alternative_address: "",
        g1_phone_number: "",
        g2_phone_number: "",
      });
      return;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return;
    }
  };

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <Container>
      <Title>Add a new parent</Title>
      <AuthInput
        label={"Guardian Firstname *"}
        placeholder={"Ex. John"}
        type={"text"}
        value={details.g1_first_name}
        onChange={(e) =>
          setDetails({ ...details, g1_first_name: e.target.value })
        }
      />
      <AuthInput
        label={"Guardian Lastname *"}
        placeholder={"Ex. Doe"}
        type={"email"}
        value={details.g1_last_name}
        onChange={(e) =>
          setDetails({ ...details, g1_last_name: e.target.value })
        }
      />
      <AuthInput
        label={"Guardian Email Address *"}
        placeholder={"Ex. johndoe@example.com"}
        type={"email"}
        value={details.g1_email}
        onChange={(e) => setDetails({ ...details, g1_email: e.target.value })}
      />
      <AuthInput
        label={"Guardian Firstname (Alt)"}
        placeholder={"Ex. John"}
        type={"email"}
        value={details.g2_first_name}
        onChange={(e) =>
          setDetails({ ...details, g2_first_name: e.target.value })
        }
      />
      <AuthInput
        label={"Guardian Lastname (Alt)"}
        placeholder={"Ex. Doe"}
        type={"email"}
        value={details.g2_last_name}
        onChange={(e) =>
          setDetails({ ...details, g2_last_name: e.target.value })
        }
      />
      <AuthInput
        label={"Guardian Email Address (Alt)"}
        placeholder={"Ex. johndoe@example.com"}
        type={"email"}
        value={details.g2_email}
        onChange={(e) => setDetails({ ...details, g2_email: e.target.value })}
      />
      <AuthInput
        label={"Address *"}
        placeholder={"Ex. 43 Amac, grent lane, Ph"}
        type={"email"}
        value={details.address}
        onChange={(e) => setDetails({ ...details, address: e.target.value })}
      />
      <AuthInput
        label={"Address (Alt)"}
        placeholder={"Ex. 43 Amac, grent lane, Ph"}
        type={"text"}
        value={details.alternative_address}
        onChange={(e) =>
          setDetails({ ...details, alternative_address: e.target.value })
        }
      />
      <AuthInput
        label={"Phone Number *"}
        placeholder={"Ex. +23481655000000"}
        type={"text"}
        value={details.g1_phone_number}
        onChange={(e) =>
          setDetails({ ...details, g1_phone_number: e.target.value })
        }
      />
      <AuthInput
        label={"Phone Number (Alt)"}
        placeholder={"Ex. +23481655000000"}
        type={"email"}
        value={details.g2_phone_number}
        onChange={(e) =>
          setDetails({ ...details, g2_phone_number: e.target.value })
        }
      />
      <AuthButton label={"Add Parent"} onClick={() => handleAddParent()} />
    </Container>
  );
};

export default AddNewParentModal;
