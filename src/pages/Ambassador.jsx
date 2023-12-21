import React from "react";
import TableComponent from "../components/TableComponent";

const AMBASSADOR_HEADERS = [
  "ID",
  "Name",
  "Location",
  "Contact Email",
  "Joining Date",
];

const ambassadorData = [
  {
    ID: 1,
    Name: "John Doe",
    Location: "City A",
    ContactEmail: "john@example.com",
    JoiningDate: "2023-01-15",
  },
  // Add more ambassador data as needed
];

const Ambassador = () => {
  return (
    <TableComponent
      headers={AMBASSADOR_HEADERS}
      data={ambassadorData}
      heading={"Ambassadors"}
    />
  );
};

export default Ambassador;
