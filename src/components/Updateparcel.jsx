import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Updateparcel = () => {
  const [id, setId] = useState(0);
  const [pickl, setPickL] = useState("");
  const [dropL, setDropL] = useState("");
  const [distance, setDistance] = useState("");

  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setPickL(localStorage.getItem("pickl"));
    setDropL(localStorage.getItem("dropL"));
    setDistance(localStorage.getItem("distance"));
    setWeight(localStorage.getItem("weight"));
    setAmount(localStorage.getItem("amount"));
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("id", id);
    axios
      .put(`https://63e0933e8b24964ae0003633.mockapi.io/crud-courier/${id}`, {
        pickl: pickl,
        dropL: dropL,
        distance: distance,
        weight: weight,
        amount: amount,
      })
      .then(() => {
        navigate("/viewparcel");
      });
  };

  return (
    <div className="content">
    <Navbar/>
    <div className="container">
      <h1>Update Rates </h1>
      <form>
        <div className="form-group">
          <label>Pick Up location</label>
          <input
            className="form-control"
            type="text"
            value={pickl}
            onChange={(e) => setPickL(e.target.value)}
            placeholder="Enter Pick Up location"
          />
        </div>
        <div className="form-group">
          <label>Drop location</label>
          <input
            className="form-control"
            type="text"
            value={dropL}
            onChange={(e) => setDropL(e.target.value)}
            placeholder="Enter Pick Up location"
          />
        </div>
        <div className="form-group">
          <label>Distance</label>
          <input
            className="form-control"
            type="text"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter total distance"
          />
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input
            className="form-control"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter Weight"
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            className="form-control"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update Data
          </button>
          <Link to="/addparcel">
            <button
              type="submit"
              className="back-btn"
              style={{ marginLeft: 2 }}
              onClick={handleUpdate}
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Updateparcel;
