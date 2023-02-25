import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Addparcel.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://63e0933e8b24964ae0003633.mockapi.io/crud-courier", {
        username: username,
        password: password,
      })
      .then(() => {
        history("/addparcel");
      });
  };
  return (
    <div className="content">     
      <div className="container">
        <h1>Login Page courier System </h1>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password Here !"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
