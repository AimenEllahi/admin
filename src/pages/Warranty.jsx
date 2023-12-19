import React from "react";
import Table from "../components/Table";

const WARRANTY_HEADERS = [
  "ID",
  "ProductCode",
  "Type",
  "ExpirationDate",
  "Status",
];

const warrantyData = [
  {
    ID: 1,
    ProductCode: "P001",
    Type: "Extended",
    ExpirationDate: "2023-12-31",
    Status: "Active",
  },
  // Add more warranty data as needed
];

const Warranty = () => {
  return (
    <Table
      headers={WARRANTY_HEADERS}
      data={warrantyData}
      heading={"Warranties"}
    />
  );
};

export default Warranty;
