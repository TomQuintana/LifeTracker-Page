// BarChart.js

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the components needed for the chart, including the datalabels plugin
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

const mockGetExpenses = async () => {
  return [
    { type: "Food", price_ARS: 1200 },
    { type: "Transport", price_ARS: 800 },
    { type: "Entertainment", price_ARS: 500 },
    { type: "Utilities", price_ARS: 1000 },
    { type: "Health", price_ARS: 700 },
  ];
};

const BarChart = ({ habitsData }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        // Utiliza la función mock en lugar de la llamada real a la API
        const response = await mockGetExpenses();
        setExpenses(response);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const labels = expenses.map((habit) => habit.type);
  const dataValues = habitsData.map((habit) => habit.quantity);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Tracker",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",

          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="" style={{ height: "620px", width: "1000px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
