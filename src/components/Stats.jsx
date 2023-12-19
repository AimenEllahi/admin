import React from "react";

const Stats = () => {
  // Replace the placeholder statistics with actual data
  const totalDealers = 100;
  const activeDealers = 80;
  const inactiveDealers = 20;

  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
      <div>
        <span className="text-lg font-semibold">Total Dealers</span>
        <p className="text-gray-600">{totalDealers}</p>
      </div>
      <div>
        <span className="text-lg font-semibold">Active Dealers</span>
        <p className="text-green-600">{activeDealers}</p>
      </div>
      <div>
        <span className="text-lg font-semibold">Inactive Dealers</span>
        <p className="text-red-600">{inactiveDealers}</p>
      </div>
    </div>
  );
};

export default Stats;
