import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = ({ data, width, height }) => {

  const chartData = {
    labels: data && data.map(item => item.severity),
    datasets: [{
      data: data && data.map(item => item.count),
      backgroundColor: ['#FF0000', '#FFA500', '#00FF00', '#FFFF00'], // You can add more colors as needed
    }],
  };

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: width, height: height }}>
    <Pie data={chartData} />;
  </div>
};

export default PieChart;
