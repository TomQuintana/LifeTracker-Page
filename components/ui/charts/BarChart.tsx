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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

const BarChart = ({ habitsData }) => {
  const [habits, setHabits] = useState([]);

  const totalPerHabit = habitsData.reduce((acc, habit) => {
    if (!acc[habit.type]) {
      acc[habit.type] = 0;
    }
    acc[habit.type] += habit.quantity;
    return acc;
  }, {});

  const labels = Object.keys(totalPerHabit);
  const dataValues = totalPerHabit;

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
        barThickness: 30,
        // categoryPercentage: 0.1,
        // barPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.raw} hrs`; // Muestra las horas en el tooltip
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return value + " hrs"; // Agrega "hrs" a las etiquetas del eje Y
          },
        },
        beginAtZero: true, // Inicia el eje Y en 0
        max: 30, // Establece el valor máximo del eje Y en 30
        title: {
          display: true,
          text: "Hours", // Etiqueta para el eje Y
        },
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
