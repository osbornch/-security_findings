import React, { useState } from 'react';
import './ExpandableTable.css';

const ExpandableTable = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (rowIndex) => {
    setExpandedRow(rowIndex === expandedRow ? null : rowIndex);
  };

  return (
    <div className="table-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 1200 }}>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>grouping_type</th>
            <th>grouping_key</th>
            <th>severity</th>
            <th>grouped_finding_created</th>
            <th>sla</th>
            <th>description</th>
            <th>security_analyst</th>
            <th>owner</th>
            <th>workflow</th>
            <th>status</th>
            <th>progress</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr
                className={`expandable-row ${expandedRow === index ? 'expanded-details' : ''}`}
                onClick={() => handleRowClick(index)}
              >
                <td>{row.id}</td>
                <td>{row.grouping_type}</td>
                <td>{row.grouping_key}</td>
                <td>{row.severity}</td>
                <td>{row.grouped_finding_created}</td>
                <td>{row.sla}</td>
                <td>{row.description}</td>
                <td>{row.security_analyst}</td>
                <td>{row.owner}</td>
                <td>{row.workflow}</td>
                <td>{row.status}</td>
                <td>{row.progress}</td>
              </tr>
              {expandedRow === index && (
                <tr className="details-container">
                  <td colSpan="3">
                    <div>
                      <strong>raw_findings:</strong>
                      <div>{row.raw_findings}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableTable;
