import React from "react";
import TableComponent from "../components/TableComponent";

const SALESREP_HEADERS = ["ID", "Name", "Territory", "Joining Date", "Status"];

const salesRepData = [
  {
    ID: 1,
    Name: "Jane Doe",
    Territory: "Region A",
    Status: "Active",
    "Joining Date": "2023-02-20",
    image: "/user1.jpeg",
    Email: "jane@gmail.com",
  },
  // Add more sales rep data as needed
];

const SalesRep = () => {
  return (
    <div className="w-full p-5 py-10 flex flex-col gap-y-10 h-screen">
      <span className="text-3xl font-semibold">View Sales Reps</span>

      {/* Display Stats Cards */}
      <div className="flex gap-4">
        {/* Card 1 */}
        <div className="flex-1 p-4 border rounded-lg ">
          <h2 className="text-lg font-semibold mb-2 text-gray-500">
            Total Sales Reps
          </h2>
          <p className="text-3xl font-bold">10</p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 p-4 border rounded-lg ">
          <h2 className="text-lg font-semibold mb-2 text-gray-500">
            Active Sales Reps
          </h2>
          <p className="text-3xl font-bold">8</p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 p-4 border rounded-lg ">
          <h2 className="text-lg font-semibold mb-2 text-gray-500">
            Top Performing Territory
          </h2>
          <p className="text-3xl font-bold">Region A</p>
        </div>
      </div>

      {/* Sales Rep Table */}
      <TableComponent
        headers={SALESREP_HEADERS}
        data={salesRepData}
        heading={"Sales Reps"}
      />
    </div>
  );
};

export default SalesRep;
