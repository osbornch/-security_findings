import React, { useState, useEffect } from 'react';
import fetchData from './DataFetcher';
import ExpandableTable from './ExpandableTable';
import PieChart from './PieChart';
import Tabs from './Tabs';

const App = () => {
  const dummyData = 
  [
    {
      "severity": "critical",
      "count": 4
    },
    {
      "severity": "high",
      "count": 13
    },
    {
      "severity": "low",
      "count": 173
    },
    {
      "severity": "medium",
      "count": 25
    }
  ];

  const [countBySeverityData, setCountBySeverityData] = useState(null);
  const [groupFindingsWithRawFindingsData, setGroupFindingsWithRawFindingsData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const countBySeverityDataResult = await fetchData('http://localhost:3000/api/v1/groupFindingsBySeverity'); // Call fetchData function
      const groupFindingsWithRawFindingsDataResult = await fetchData('http://localhost:3000/api/v1/groupFindingsWithRawFindings'); // Call fetchData function
      setCountBySeverityData(countBySeverityDataResult); // Update state with fetched data
      setGroupFindingsWithRawFindingsData(groupFindingsWithRawFindingsDataResult); // Update state with fetched data
    };
    fetchDataFromAPI(); // Invoke data fetching function
  },[]);

  const tabs = [
    { label: 'Counts by Severity', content: <PieChart width={800} height={800} data={dummyData}/> },
    { label: 'Raw findings', content: <ExpandableTable data={groupFindingsWithRawFindingsData} /> },
  ];

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Security Summarization Dashboard</h1>
      <Tabs tabs={tabs}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} />
    </div>
  );
};

export default App; 