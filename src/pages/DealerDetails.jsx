import React from "react";
import { CalendarDays, Mail, MapPin } from "lucide-react";

const Details = {
  Name: "Dealer",
  DealerCode: "D000",
  Location: "City, Country",
  Status: "Active",
  Contact: "John Doe",
  RegistrationDate: "2023-01-01",
  Address: "123 Main St, City",
  Phone: "123-456-7890",
  Website: "www.dealerwebsite.com",
  Products: ["Product A", "Product B", "Product C"],
};

export default function DealerDetails() {
  const {
    Name,
    DealerCode,
    Location,
    Status,
    Contact,
    RegistrationDate,
    Address,
    Phone,
    Website,
    Products,
  } = Details;

  return (
    <div className='p-6 bg-white rounded-md shadow-md'>
      <h2 className='text-3xl font-semibold mb-4'>{Name} Details</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='flex flex-col'>
          <span className='text-gray-600 text-xl '>Dealer Code</span>
          <p className='text-gray-800 font-medium'>{DealerCode || "D000"}</p>
        </div>
        <div className='flex flex-col'>
          <span className='text-gray-600 text-xl'>Name</span>
          <p className='text-gray-800 font-medium'>
            {Name || "Dummy Dealership"}
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='text-gray-600 text-xl'>Location</span>
          <p className='text-gray-800 flex items-center font-medium'>
            <MapPin className='mr-2' />
            {Location || "City, Country"}
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='text-gray-600 text-xl'>Status</span>
          <div className='flex items-center font-medium'>
            <div
              className={`w-4 h-4 rounded-full mr-2 ${
                Status === "Active" ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <p
              className={`text-gray-800 ${
                Status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {Status || "Active"}
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-gray-600 text-xl'>Contact</span>
          <p className='text-gray-800 flex items-center font-medium'>
            <Mail className='mr-2' />
            {Contact || "John Doe"}
          </p>
        </div>
        <div className='flex flex-col text-xl'>
          <span className='text-gray-600'>Registration Date</span>
          <p className='text-gray-800 flex items-center font-medium'>
            <CalendarDays className='mr-2' />
            {RegistrationDate || "2023-01-01"}
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='text-gray-600 text-xl'>Address</span>
          <p className='text-gray-800 font-medium'>
            {Address || "123 Main St, City"}
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='text-gray-600 text-xl'>Phone</span>
          <p className='text-gray-800 font-medium'>{Phone || "123-456-7890"}</p>
        </div>
        <div className='flex flex-col '>
          <span className='text-gray-600 text-xl'>Website</span>
          <a
            href={`http://${Website}`}
            className='text-blue-500 hover:underline'
          >
            {Website || "www.dealerwebsite.com"}
          </a>
        </div>
      </div>
    </div>
  );
}
