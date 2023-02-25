import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientContext from "../context/ClientContext";
import Navbar from "../Navbar";

function Addclient() {
  const [cpickl, setCPickL] = useState("");
  const [cdropL, setCDropL] = useState("");
  const [cdistance, setCDistance] = useState("");
  const [cweight, setCWeight] = useState("");
  const [camount, setCAmount] = useState("");
  const [caddress, setCAddress] = useState("");
  const [cp_date, setCP_date] = useState("");
  const [cd_date, setCD_date] = useState("");
  const [cname, setCName] = useState("");
  const [cphone, setCPhone] = useState("");
  const [cemail, setCEmail] = useState("");
  const [image, setImage] = useState(null);

  const [data, setData] = useContext(ClientContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInput1Change = (e) => {
    setCDistance(e.target.value);
  };
  const handleInput2Change = (e) => {
    setCWeight(e.target.value);
  };

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    axios
      .post("https://63e0c44765b57fe60648f27b.mockapi.io/clientdata", {
        cpickl: cpickl,
        cdropL: cdropL,
        cdistance: cdistance,
        cweight: cweight,
        camount:
          (parseInt(cdistance) + parseInt(cweight)) / 2
            ? (parseInt(cdistance) + parseInt(cweight)) / 2
            : 0,
        caddress: caddress,
        cp_date: cp_date,
        cd_date: cd_date,
        image: image,
        cname: cname,
        cemail: cemail,
        cphone: cphone,
      })
      .then((res) => {
        let newData = [...data, res.data];
        setData(newData);
        history("/viewclient");
      });
  };
  return (
    <div className="content">
      <Navbar />
      <div className="container">
        <h1>Add New Client </h1>
        <form>
          <div className="form-group">
            <label>Client Name</label>
            <input
              className="form-control"
              type="text"
              name="cname"
              onChange={(e) => setCName(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              className="form-control"
              type="text"
              name="cphone"
              onChange={(e) => setCPhone(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Client Email</label>
            <input
              className="form-control"
              type="text"
              name="cemail"
              onChange={(e) => setCEmail(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Pick Up location</label>
            <input
              className="form-control"
              type="text"
              name="cpickl"
              onChange={(e) => setCPickL(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Drop location</label>
            <input
              className="form-control"
              type="text"
              name="cdropL"
              onChange={(e) => setCDropL(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Distance</label>
            <input
              className="form-control"
              type="text"
              name="cdistance"
              value={cdistance}
              onChange={handleInput1Change}
              placeholder="Enter total distance"
            />
          </div>
          <div className="form-group">
            <label>Weight (Gram)</label>
            <input
              className="form-control"
              type="text"
              name="cweight"
              value={cweight}
              onChange={handleInput2Change}
              placeholder="Enter Weight"
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="text"
              name="camount"
              defaultValue={camount}
              value={
                (parseInt(cdistance) + parseInt(cweight)) / 2
                  ? (parseInt(cdistance) + parseInt(cweight)) / 2
                  : 0
              }
              placeholder="Enter Amount"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              name="caddress"
              onChange={(e) => setCAddress(e.target.value)}
              placeholder="Enter address"
            />
          </div>
          <div className="form-group">
            <label>Pick up date</label>
            <input
              className="form-control"
              type="date"
              name="cp_date"
              onChange={(e) => setCP_date(e.target.value)}
              placeholder="Enter Date"
            />
          </div>
          <div className="form-group">
            <label>Drop date</label>
            <input
              className="form-control"
              type="date"
              name="cd_date"
              onChange={(e) => setCD_date(e.target.value)}
              placeholder="Enter Date"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              name="image"
              onChange={handleImageChange}
              placeholder="Upload IMage"
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add Client Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addclient;
