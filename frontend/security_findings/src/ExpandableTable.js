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
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr
                className={`expandable-row ${expandedRow === index ? 'expanded-details' : ''}`}
                onClick={() => handleRowClick(index)}
              >
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.email}</td>
              </tr>
              {expandedRow === index && (
                <tr className="details-container">
                  <td colSpan="3">
                    <div>
                      <strong>Details:</strong>
                      <div>{row.details}</div>
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
