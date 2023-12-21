import React from "react";
import TableComponent from "../components/TableComponent";
const DEALER_HEADERS = [
  "DealerCode",
  "Name",
  "Location",
  "Status",
  "Contact",
  "RegistrationDate",
];

const dealerData = [
  {
    DealerCode: "D001",
    Name: "ABC Dealership",
    Location: "City, Country",
    Status: "Active",
    Contact: "John Doe",
    RegistrationDate: "2023-08-11",
  },
  // Add more dealer data as needed
];

export default function Dealers() {
  return (
    <div>
      <TableComponent
        headers={DEALER_HEADERS}
        data={dealerData}
        heading={"Dealers"}
      />
    </div>
  );
}
