import React from "react";
import PieChart from "../components/Chart/LineChart";
import BarChart from "../components/Chart/BarChart";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="flex flex-wrap gap-4">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
          <div className="bg-white rounded p-4">
            <PieChart />
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
          <div className="bg-white rounded p-4">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
