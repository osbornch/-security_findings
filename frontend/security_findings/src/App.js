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

  const groupfindings_with_raw_data = 
    [
      {
        "id": 1,
        "grouping_type": "remediation",
        "grouping_key": "https://docs.aws.amazon.com/console/securityhub/Lambda.1/remediation",
        "severity": "low",
        "grouped_finding_created": "2022-03-05 15:25:23.341094",
        "sla": "2022-04-04 15:25:23.341094",
        "description": "Remediation Group: https://docs.aws.amazon.com/console/securityhub/Lambda.1/remediation",
        "security_analyst": "Ron",
        "owner": "Royce",
        "workflow": "Default Workflow",
        "status": "in_progress",
        "progress": 0.0170203141537383,
        "raw_findings": "[{\"raw_id\":1,\"source_security_tool_name\":\"AWS Security Hub\"}]"
      },
      {
        "id": 2,
        "grouping_type": "remediation",
        "grouping_key": "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.5/remediation",
        "severity": "high",
        "grouped_finding_created": "2022-03-05 15:25:55.377483",
        "sla": "2022-04-04 15:25:55.377483",
        "description": "Remediation Group: https://docs.aws.amazon.com/console/securityhub/PCI.EC2.5/remediation",
        "security_analyst": "Bob",
        "owner": "Wei",
        "workflow": "Default Workflow",
        "status": "in_progress",
        "progress": 0.439392480037174,
        "raw_findings": "[{\"raw_id\":2,\"source_security_tool_name\":\"AWS Security Hub\"},{\"raw_id\":16,\"source_security_tool_name\":\"AWS Security Hub\"},{\"raw_id\":31,\"source_security_tool_name\":\"AWS Security Hub\"},{\"raw_id\":258,\"source_security_tool_name\":\"AWS Security Hub\"}]"
      },
  ];

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const result = await fetchData(); // Call fetchData function
      setData(result); // Update state with fetched data
    };
    fetchDataFromAPI(); // Invoke data fetching function
    console.log("fetching data in app => " + data );
  }, []);

  const tabs = [
    { label: 'Counts by Severity', content: <PieChart width={400} height={400} data={dummyData}/> },
    { label: 'Raw findings', content: <ExpandableTable data={groupfindings_with_raw_data} /> },
  ];

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Security Summarization Dashboard</h1>
      <Tabs tabs={tabs}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} />
    </div>
  );
};

export default App; 