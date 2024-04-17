import React, { useState } from 'react';
import './ExpandableTable.css';

const ExpandableTable = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (rowIndex) => {
    setExpandedRow(rowIndex === expandedRow ? null : rowIndex);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>grouping_type</th>
            <th>grouping_key</th>
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
