import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = ({ data, width, height }) => {

  const chartData = {
    labels: data.map(item => item.severity),
    datasets: [{
      data: data.map(item => item.count),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#FFA07A'], // You can add more colors as needed
    }],
  };

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: width, height: height }}>
    <Pie data={chartData} />;
  </div>
};

export default PieChart;
