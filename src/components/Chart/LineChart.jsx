import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title);
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#3B82F6",
          "#F87171",
          "#A78BFA",
          "#34D399",
          "#FBBF24",
        ],
      },
    ],
  };

  const options = {
    scales: {
      // Pie charts do not use scales, so you can remove this section
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
