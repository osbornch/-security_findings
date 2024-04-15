import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = ({ width, height }) => {

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6'],
      },
    ],
  };

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: width, height: height }}>
    <Pie data={data} />;
  </div>
};

export default PieChart;
