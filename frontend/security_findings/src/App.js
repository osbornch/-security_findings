import React from 'react';
import DataFetcher from './DataFetcher';
import ExpandableTable from './ExpandableTable';
import PieChart from './PieChart';

const App = () => {
  const data = [
    { name: 'John Doe', age: 30, email: 'john@example.com', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com', details: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { name: 'Mike Johnson', age: 40, email: 'mike@example.com', details: 'Fusce nec turpis id arcu feugiat interdum.' },
  ];

  return (
    <div>
      <h1>Pie Chart:</h1>
      <ExpandableTable data={data} />

      <PieChart />
      <DataFetcher />
    </div>
  );
};

export default App; 