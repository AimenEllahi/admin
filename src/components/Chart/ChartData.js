// chartData.js
const chartData = {
  lineChart: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Dataset 2",
        data: [15, 7, 10, 8, 5],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  },
  doughnutChart: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ["red", "blue", "yellow", "green", "purple"],
      },
    ],
  },
  radarChart: {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  },
  barChart: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [15, 7, 10, 8, 5],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  pieChart: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ["red", "blue", "yellow", "green", "purple"],
        borderWidth: 1,
      },
    ],
  },
};

export default chartData;
