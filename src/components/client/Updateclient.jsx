import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, navigate, useNavigate, useParams } from "react-router-dom";
import ClientContext from "../context/ClientContext";
import Navbar from "../Navbar";

const Updateclient = () => {
  const [id, setId] = useState(0);
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

  const navigate = useNavigate();

  const [data, setData] = useContext(ClientContext);
  const params = useParams();
  useEffect(() => {
    let newData = [...data];
    const latestData = newData.find((d) => d?.id == params?.id);
    setId(params.id);
    if (latestData) {
      setCName(latestData.cname);
      setCEmail(latestData.cemail)
      setCPhone(latestData.cphone);
      setCPickL(latestData.cpickl);
      setCDropL(latestData.cdropL);
      setCDistance(latestData.cdistance);
      setCWeight(latestData.cweight);
      setCAmount(latestData.camount);
      setCAddress(latestData.caddress);
      setCP_date(latestData.cp_date);
      setCD_date(latestData.cd_date);
    }
  }, [params.id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://63e0c44765b57fe60648f27b.mockapi.io/clientdata/${params.id}`,
        {
          cname: cname,
          cemail: cemail,
          cphone: cphone,
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
        }
      )
      .then((resp) => {
        let newData = [...data];
        const index = newData.findIndex((d) => d?.id === params?.id);
        newData[index] = resp.data;
        setData(newData);
        navigate("/viewclient");
      });
  };

  return (
    <div className="content">
      <Navbar />
      <div className="container">
        <h1>Update Rates </h1>
        <form>
          <div className="form-group">
            <label>C Name</label>
            <input
              className="form-control"
              type="text"
              value={cname}
              onChange={(e) => setCName(e.target.value)}
              placeholder="Enter Client Name"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              className="form-control"
              type="text"
              value={cphone}
              onChange={(e) => setCPhone(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Client Email</label>
            <input
              className="form-control"
              type="text"
              value={cemail}
              onChange={(e) => setCEmail(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Pick Up location</label>
            <input
              className="form-control"
              type="text"
              value={cpickl}
              onChange={(e) => setCPickL(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Drop location</label>
            <input
              className="form-control"
              type="text"
              value={cdropL}
              onChange={(e) => setCDropL(e.target.value)}
              placeholder="Enter Pick Up location"
            />
          </div>
          <div className="form-group">
            <label>Distance</label>
            <input
              className="form-control"
              type="text"
              value={cdistance}
              onChange={(e) => setCDistance(e.target.value)}
              placeholder="Enter total distance"
            />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input
              className="form-control"
              type="text"
              value={cweight}
              onChange={(e) => setCWeight(e.target.value)}
              placeholder="Enter Weight"
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="text"
              value={camount}
              onChange={(e) => setCAmount(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              value={caddress}
              onChange={(e) => setCAddress(e.target.value)}
              placeholder="Enter address"
            />
          </div>
          <div className="form-group">
            <label>Pick up date</label>
            <input
              className="form-control"
              type="date"
              value={cp_date}
              onChange={(e) => setCP_date(e.target.value)}
              placeholder="Enter Date"
            />
          </div>
          <div className="form-group">
            <label>Drop date</label>
            <input
              className="form-control"
              type="date"
              value={cd_date}
              onChange={(e) => setCD_date(e.target.value)}
              placeholder="Enter Date"
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
            <Link to="/addclient">
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

export default Updateclient;
