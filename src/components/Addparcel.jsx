import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addparcel.css";
import Navbar from "./Navbar";

function Addparcel() {
  
  const [pickl, setPickL] = useState("");
  const [dropL, setDropL] = useState("");
  const [distance, setDistance] = useState("");
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("");

  const history = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://63e0933e8b24964ae0003633.mockapi.io/crud-courier", {
        pickl: pickl,
        dropL: dropL,
        distance: distance,
        weight: weight,
        amount: amount,
      })
      .then(() => {
        history("/viewparcel");
      });
  };

  return (
    <div className="content">
      <Navbar />
      <div className="container">
        <h1>Add Rates </h1>
        <form>
          <div className="form-group">
            <label>Pick Up location</label>
            <input
              className="form-control"
              type="text"
              name="pickl"
              onChange={(e) => setPickL(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Drop location</label>
            <input
              className="form-control"
              type="text"
              name="dropL"
              onChange={(e) => setDropL(e.target.value)}
              placeholder="Enter Drop location"
            />
          </div>
          <div className="form-group">
            <label>Distance</label>
            <input
              className="form-control"
              type="text"
              name="distance"
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Enter total distance"
            />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input
              className="form-control"
              type="text"
              name="weight"
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter Weight"
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="text"
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>
          
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add Rates
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addparcel;
