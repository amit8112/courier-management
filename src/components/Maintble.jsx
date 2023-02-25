import React, { useState, useEffect } from "react";
import axios from "axios";

const Maintble = () => {
  const [courierData, setCourierData] = useState([]);
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    axios.get("https://63e0933e8b24964ae0003633.mockapi.io/crud-courier").then(response => {
      setCourierData(response.data);
    });
    axios.get("https://63e0c44765b57fe60648f27b.mockapi.io/client-data").then(response => {
      setClientData(response.data);
    });
  }, []);

  const createTable = () => {
    const courierIds = courierData.map(courier => courier.id);
    const clientIds = clientData.map(client => client.id);

    // Create a new table  columns forr courier and client data
    const table = [];
    for (let i = 0; i < courierData.length; i++) {
      for (let j = 0; j < clientData.length; j++) {
        table.push({
          courierId: courierIds[i],
          clientId: clientIds[j],
          courierData: courierData[i],
          clientData: clientData[j]
        });
      }
    }

    //  foreign key relationship
    table.forEach(row => {
      row.courierData.clientId = row.clientId;
    });

    return table;
  };

  return (
    <div>
      <h2>Table Data</h2>
      <table>
        <thead>
          <tr>
            <th>Courier ID</th>
            <th>Client ID</th>
            <th>Courier Data</th>
            <th>Client Data</th>
          </tr>
        </thead>
        <tbody>
          {createTable().map(row => (
            <tr key={row.courierId + row.clientId}>
              <td>{row.courierId}</td>
              <td>{row.clientId}</td>
              <td>{JSON.stringify(row.courierData)}</td>
              <td>{JSON.stringify(row.clientData)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Maintble;
