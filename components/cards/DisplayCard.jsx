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
  width: 200px;
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
  cursor: pointer;
`;

const TotalText = styled.text`
  /* width: 20%; */
  background-color: ${colors.gray1};
  color: ${colors.light};
  font-size: ${fontSizes.s};
  padding: 0.5rem;
  position: absolute;
  bottom: 50%;
  left: 10px;
  border-radius: 5px;
`;

const DisplayCard = ({ onClick, onAddClick, label, id, total }) => {
  const idForPictures = {
    courses: "/books.jpeg",
    admins: "/admins.jpeg",
    camps: "/camps.jpeg",
    locations: "/locations.jpeg",
    parents: "/parents.webp",
    students: "/students.jpeg",
  };
  const selectPicture = (id) => {
    return idForPictures[id];
  };
  return (
    <Container style={{ backgroundImage: `url(${selectPicture(id)})` }}>
      <div
        style={{
          marginLeft: "1rem",
          position: "absolute",
          top: 10,
          right: 10,
          cursor: "pointer",
          zIndex: 4,
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <MdAddBox size={30} color={colors.primary} onClick={onAddClick} />
      </div>

      {/* <BsFillJournalBookmarkFill
        size={40}
        color={colors.primary}
        style={{ margin: "1rem" }}
      /> */}
      <TotalText>{total}</TotalText>
      <CaptionText onClick={onClick}>{label}</CaptionText>
    </Container>
  );
};

export default DisplayCard;
