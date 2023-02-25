import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "./Viewparcel.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Viewparcel() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get(`https://63e0933e8b24964ae0003633.mockapi.io/crud-courier`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://63e0933e8b24964ae0003633.mockapi.io/crud-courier/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage =(id,pickl,dropL,distance,weight,amount,image) =>{
    localStorage.setItem("id",id)
    localStorage.setItem("pickl",pickl)
    localStorage.setItem("dropL",dropL)
    localStorage.setItem("distance",distance)
    localStorage.setItem("weight",weight)
    localStorage.setItem("amount",amount)
    localStorage.setItem("image",image)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    <Navbar/>
      <h2>Parcel Rates Details </h2>
      
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Pick Up location</th>
            <th>Drop LOc</th>
            <th>Distance</th>
            <th>weight</th>
            <th>Amount</th>
            
            <th>Action</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.pickl}</td>
                  <td>{eachData.dropL}</td>
                  <td>{eachData.distance}</td>
                  <td>{eachData.weight}</td>
                  <td>{eachData.amount}</td>
                  
                  <Link to="/updateparcel/">
                    <button
                      className="edit-btn"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.pickl,
                          eachData.dropL,
                          eachData.distance,
                          eachData.weight,
                          eachData.amount,
                          
                        )
                      }
                    >
                      Edit
                    </button>
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

export default Viewparcel;
