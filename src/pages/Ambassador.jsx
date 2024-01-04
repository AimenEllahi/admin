import React from "react";
import TableComponent from "../components/TableComponent";

const AMBASSADOR_HEADERS = ["ID", "Name", "Location", "Status", "Joining Date"];

const ambassadorData = [
  {
    ID: 1,
    Name: "John Doe",
    Location: "City A",
    Email: "john@example.com",
    "Joining Date": "2023-01-15",
    image: "/user1.jpeg",
    Status: "Active",
  },
  {
    ID: 2,
    Name: "Jane Smith",
    Location: "City B",
    Email: "jane@example.com",
    "Joining Date": "2023-02-20",
    image: "/user1.jpeg",
    Status: "Inactive",
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
