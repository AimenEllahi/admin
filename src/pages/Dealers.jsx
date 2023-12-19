import React from "react";
import Table from "../components/Table";
const DEALER_HEADERS = [
  "Dealer Code",
  "Name",
  "Location",
  "Status",
  "Contact",
  "Registration Date",
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
      <Table headers={DEALER_HEADERS} data={dealerData} heading={"Dealers"} />
    </div>
  );
}
