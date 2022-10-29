import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";

const Container = styled.div`
  /* background-color: ${colors.red}; */
  color: ${colors.light};
  /* padding: 1rem; */
  width: 250px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  min-height: 120px;
  border: 0px solid ${colors.primary};
  /* top: 30px; */
  box-shadow: 1px 1px 7px 2px #c2bfbf;
  background-image: url("/books.jpeg");
  background-size: 100% auto;
  margin: 1rem;
`;

const CaptionText = styled.text`
  width: 100%;
  background-color: ${colors.primary};
  color: ${colors.light};
  font-size: ${fontSizes.m};
  padding: 0.7rem;
  position: absolute;
  bottom: 0;
  border-radius: 0px 0px 5px 5px;
`;

const TotalText = styled.text`
  width: 20%;
  background-color: ${colors.gray1};
  color: ${colors.light};
  font-size: ${fontSizes.l};
  padding: 0.5rem;
  position: absolute;
  bottom: 50%;
  left: 10px;
  border-radius: 5px;
`;

const DisplayCard = () => {
  return (
    <Container>
      <MdAddBox
        size={30}
        style={{ marginLeft: "1rem", position: "absolute", top: 10, right: 10 }}
        color={colors.white}
      />
      {/* <BsFillJournalBookmarkFill
        size={40}
        color={colors.primary}
        style={{ margin: "1rem" }}
      /> */}
      <TotalText>120</TotalText>
      <CaptionText>Courses</CaptionText>
    </Container>
  );
};

export default DisplayCard;
