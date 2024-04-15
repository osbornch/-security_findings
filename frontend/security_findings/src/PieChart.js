import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  console.log('Rendering PieChart component');

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6', '#FFA726'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6', '#FFA726'],
      },
    ],
  };
  console.log('Data for pie chart:', data);
  return (
    <div style={{ height: '300px', width: '300px' }}>
    <Pie data={data} />
  </div>
  );
};

export default PieChart;
