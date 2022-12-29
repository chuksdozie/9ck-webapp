import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

const Container = styled.div`
  /* background-color: ${colors.red}; */
  color: ${colors.light};
  /* padding: 1rem; */
  width: 100%;
  /* max-width: 400px; */
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: ${fontSizes.l};
  margin: 1rem 0 1rem;
  /* width: 100%; */
  text-align: left;
  text-align: left;
  width: 100%;
  color: ${colors.gray5};
`;

const Table = ({ data, columns, label, filter }) => {
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

  const dataColumns = [
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
      <SubTitle>{label}</SubTitle>
      <BootstrapTable
        keyField={data}
        data={data || products}
        columns={columns || dataColumns}
        search={{
          defaultSearch: "search something here",
        }}
        striped
        filter={filterFactory()}
        // bordered={false}
        // rowStyle={{ height: 10, color: "red" }}
      />
      {!data[0] && <SubTitle>Nothing to show</SubTitle>}
    </Container>
  );
};

export default Table;
