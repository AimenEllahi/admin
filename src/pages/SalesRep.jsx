import React from "react";
import TableComponent from "../components/TableComponent";
import { UsersRound, AlignStartHorizontal, MonitorCheck } from "lucide-react";

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
    <div className='w-full px-0 md:p-5 py-10 flex flex-col gap-y-10 h-screen'>
      <span className='text-3xl font-semibold'>View Sales Reps</span>

      <div className='flex w-full   flex-col gap-3  md:flex-row justify-between items-center bg-white md:p-6 rounded-lg '>
        {/* Card 1 */}
        <div className='flex-1 w-full p-4  py-8 border rounded-lg flex  items-center'>
          <div className='w-14 h-14 flex items-center justify-center bg-gray-800 rounded-full'>
            <UsersRound size={24} className='text-white' />
          </div>
          <div className='ml-3'>
            <h2 className='text-sm font-semibold mb-1 text-gray-600'>
              Total Sales Reps
            </h2>
            <p className='text-xl font-bold text-black'>10</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex-1 w-full p-4 py-8 border rounded-lg flex items-center'>
          <div className='w-14 h-14 flex items-center justify-center bg-gray-800 rounded-full'>
            <MonitorCheck size={24} className='text-white' />
          </div>
          <div className='ml-3'>
            <h2 className='text-sm font-semibold mb-1 text-gray-600'>
              Active Sales Reps
            </h2>
            <p className='text-xl font-bold text-black'>8</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex-1 w-full p-4 py-8  border rounded-lg flex items-center'>
          <div className='w-14 h-14 flex items-center justify-center bg-gray-800 rounded-full'>
            <AlignStartHorizontal size={24} className='text-white' />
          </div>
          <div className='ml-3'>
            <h2 className='text-sm font-semibold mb-1 text-gray-600'>
              Top Performing Territory
            </h2>
            <p className='text-xl font-bold text-black'>Region A</p>
          </div>
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
