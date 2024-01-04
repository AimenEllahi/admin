import React from "react";
import TableComponent from "../components/TableComponent";
import { User } from "lucide-react";
const DEALER_HEADERS = [
  "Code",
  "Name",
  "Location",
  "Status",
  "Contact",
  "RegistrationDate",
];
const dealerData = [
  {
    Code: "D001",
    Name: "ABC Dealership",
    Location: "City, Country",
    Status: "Active",
    Contact: "John Doe",
    RegistrationDate: "2023-08-11",
    Email: "john.doe@example.com",
    image: "/user1.jpeg", // Use Lucide React User icon
  },
  {
    Code: "D002",
    Name: "XYZ Motors",
    Location: "Another City, Another Country",
    Status: "Inactive",
    Contact: "Jane Smith",
    RegistrationDate: "2023-09-15",
    Email: "jane.smith@example.com",
    image: "/user1.jpeg", // Use Lucide React User icon for the second dealer as well
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
