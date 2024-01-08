import React from "react";
import PieChart from "../components/Chart/LineChart";
import RenderBarChart from "../components/Chart/BarChart";
import Stats from "../components/Stats";

const Dashboard = () => {
  return (
    <div className='p-4 px-0 md:px-4   overflow-y-auto overflow-x-hidden w-full '>
      <h1 className='text-2xl font-semibold mb-4'>Dashboard</h1>

      <div className='flex flex-wrap gap-4 w-full'>
        <div className='w-full lg:w-4/4 xl:w-4/4 mb-4'>
          <div className='bg-white rounded p-4 h-full'>
            <h2 className='text-xl font-semibold mb-2'>Stats</h2>
            <Stats />
          </div>
        </div>

        <div className='w-full flex-col md:flex-row flex  gap-2 mb-4 overflow-x-hidden boder'>
          <div className='flex  flex-col md:flex-row gap-2'>
            {/* Pie Chart */}
            <div className='w-full lg:w-1/2 xl:w-1/2'>
              <div className='bg-white rounded p-4 h-full'>
                <h2 className='text-xl font-semibold mb-2'>Pie Chart</h2>
                <PieChart />
              </div>
            </div>

            {/* Bar Chart */}
            <div className='w-full '>
              <div className='bg-white rounded md:p-4 h-full'>
                <h2 className='text-xl font-semibold mb-2'>Bar Chart</h2>
                <RenderBarChart />
              </div>
            </div>
          </div>

          <div className='bg-white rounded p-4 h-full'>
            <h2 className='text-xl font-semibold mb-2'>Small Table</h2>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className='border px-4 py-2'>ID</th>
                  <th className='border px-4 py-2'>Name</th>
                  <th className='border px-4 py-2'>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>1</td>
                  <td className='border px-4 py-2'>John Doe</td>
                  <td className='border px-4 py-2'>$100</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>2</td>
                  <td className='border px-4 py-2'>Jane Smith</td>
                  <td className='border px-4 py-2'>$150</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
