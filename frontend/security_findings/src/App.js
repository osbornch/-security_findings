import React, { useState, useEffect } from 'react';
import fetchData from './DataFetcher';
import ExpandableTable from './ExpandableTable';
import PieChart from './PieChart';
import Tabs from './Tabs';

const App = () => {
  const [countBySeverityData, setCountBySeverityData] = useState(null);
  const [groupFindingsWithRawFindingsData, setGroupFindingsWithRawFindingsData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const [countBySeverityDataResult,groupFindingsWithRawFindingsDataResult] = await fetchData(); 
      setCountBySeverityData(countBySeverityDataResult); 
      setGroupFindingsWithRawFindingsData(groupFindingsWithRawFindingsDataResult); 
    };
    fetchDataFromAPI(); 
  },[]);

  const tabs = [
    { label: 'Counts by Severity', content: <PieChart width={800} height={800} data={countBySeverityData}/> },
    { label: 'Group findings', content: <ExpandableTable data={groupFindingsWithRawFindingsData} /> },
  ];

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Security Summarization Dashboard</h1>
      <Tabs tabs={tabs}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} />
    </div>
  );
};

export default App; 