import React from "react";
import TableComponent from "../components/TableComponent";

const WARRANTY_HEADERS = [
  "ID",
  "Product Code",
  "Type",
  "Expiration Date",
  "Status",
];

const warrantyData = [
  {
    ID: 1,
    "Product Code": "P001",
    Type: "Extended",
    "Expiration Date": "2023-12-31",
    Status: "Active",
  },
  // Add more warranty data as needed
];

const Warranty = () => {
  return (
    <TableComponent
      headers={WARRANTY_HEADERS}
      data={warrantyData}
      heading={"Warranties"}
    />
  );
};

export default Warranty;
