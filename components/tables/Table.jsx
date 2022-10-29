import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";

const Container = styled.div`
  /* background-color: ${colors.red}; */
  color: ${colors.light};
  padding: 1rem;
  width: 100%;
  /* max-width: 400px; */
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Table = () => {
  const products = [
    {
      id: 0,
      name: "steel rod",
      price: "20",
    },
    {
      id: 1,
      name: "metal sheet",
      price: "5.0",
    },
    {
      id: 2,
      name: "iron pipe",
      price: "20",
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];
  return (
    <Container>
      <BootstrapTable keyField="id" data={products} columns={columns} />
    </Container>
  );
};

export default Table;
