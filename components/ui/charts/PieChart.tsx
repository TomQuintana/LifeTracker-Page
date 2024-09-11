import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

// Función mock para obtener los gastos
const mockGetExpenses = async () => {
  return [
    { type: 'Food', price_ARS: 1200 },
    { type: 'Transport', price_ARS: 800 },
    { type: 'Entertainment', price_ARS: 500 },
    { type: 'Utilities', price_ARS: 1000 },
    { type: 'Health', price_ARS: 700 },
  ];
};

const PieChart = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        // Utiliza la función mock en lugar de la llamada real a la API
        const response = await mockGetExpenses();
        setExpenses(response);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  // Crear las etiquetas y los valores para el gráfico a partir de los datos de gastos
  const labels = expenses.map(expense => expense.type);
  const dataValues = expenses.map(expense => expense.price_ARS);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Gastos en ARS',
        data: dataValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="" style={{ height: '620px', width: '600px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

