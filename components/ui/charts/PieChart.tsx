import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Expenses {
  food: number;
  goOut: number;
  other: number;
  fixed: number;
  books: number;
  fubol: number;
  montly: number;
  target: number;
}

interface ExpensesTypeProps {
  dataExpenses: {
    expenses: Expenses;
  };
}

const PieChart: React.FC<ExpensesTypeProps> = ({ dataExpenses }) => {

  const expenseEntries = Object.entries(dataExpenses.expenses);
  const labels = expenseEntries.map(([type, _]) => type); 
  const dataValues = expenseEntries.map(([_, price_ARS]) => price_ARS); 

  const data = {
  labels,
  datasets: [
    {
      label: "Gastos en ARS",
      data: dataValues,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)", 
        "rgba(255, 99, 71, 0.2)",  
        "rgba(0, 255, 0, 0.2)", 
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",  
        "rgba(255, 99, 71, 1)", 
       "rgba(0, 255, 0, 1)", 
      ],
      borderWidth: 1,
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
      },
    },
  };

  return (
    <div className="flex justify-center items-center" style={{ height: "620px", width: "600px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

