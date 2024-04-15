import React, { useState, useEffect } from 'react';
import fetchData from './DataFetcher';
import ExpandableTable from './ExpandableTable';
import PieChart from './PieChart';
import Tabs from './Tabs';

const App = () => {
  const dummyData = [
    { name: 'John Doe', age: 30, email: 'john@example.com', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com', details: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { name: 'Mike Johnson', age: 40, email: 'mike@example.com', details: 'Fusce nec turpis id arcu feugiat interdum.' },
  ];


  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const result = await fetchData(); // Call fetchData function
      setData(result); // Update state with fetched data
    };

    fetchDataFromAPI(); // Invoke data fetching function
  }, []);

  const tabs = [
    { label: 'Counts by Severity', content: <PieChart width={400} height={400} data={data}/> },
    { label: 'Raw findings', content: <ExpandableTable data={data} /> },
  ];

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Security Summarization Dashboard</h1>
      <Tabs tabs={tabs}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} />
    </div>
  );
};

export default App; 