// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the components needed for the chart
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const BarChart = () => {
  // Data for the bar chart
  
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3, 7], // Data for each bar
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', // Different color for each bar
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(199, 199, 199, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', // Different border color for each bar
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(199, 199, 199, 1)'
      ],
      borderWidth: 1, // Border width
      barThickness: 30, // Thickness of the bars
      maxBarThickness: 50, // Maximum thickness of the bars
      minBarLength: 10, // Minimum length of the bars
    },
  ],
};


  // Options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.raw;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;

