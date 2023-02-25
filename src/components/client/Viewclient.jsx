import { useContext } from "react";
import axios from "axios";
import React from "react";
import "../Viewparcel.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import ClientContext from "../context/ClientContext";

function Viewclient({ image }) {
  const [data, setData] = useContext(ClientContext);
  function handleDelete(id) {
    axios
      .delete(`https://63e0c44765b57fe60648f27b.mockapi.io/clientdata/${id}`)
      .then(() => {
        let newData = data.filter((d) => d.id !== id);
        setData(newData);
      });
  }

  return (
    <div>
      <Navbar />
      <h2>Client Parcel Rates Details </h2>

      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>phone</th>
            <th>Email</th>
            <th>C PickUp Location</th>
            <th>C Drop LOc</th>
            <th>C Distance</th>
            <th>C weight</th>
            <th>C Amount</th>
            <th>C Address</th>
            <th>C PickUp Date</th>
            <th>C Drop date</th>
            <th>Client Imge</th>

            <th>Action</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.cname}</td>
                  <td>{eachData.cphone}</td>
                  <td>{eachData.cemail}</td>
                  <td>{eachData.cpickl}</td>
                  <td>{eachData.cdropL}</td>
                  <td>{eachData.cdistance}</td>
                  <td>{eachData.cweight}</td>
                  <td>{eachData.camount}</td>
                  <td>{eachData.caddress}</td>
                  <td>{eachData.cp_date}</td>
                  <td>{eachData.cd_date}</td>
                  <td>
                    <img src={eachData.image} alt={eachData.cname} width={50}
                        height={50} />
                  </td>
                  

                  <Link to={"/updateclient/" + eachData.id}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default Viewclient;
