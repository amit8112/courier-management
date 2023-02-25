import React from "react";
import './Navbar.css'
import {NavLink} from "react-router-dom"

function Navbar() {


  return (
    <div className="navbar" style={{backgroundColor:"blue"}}>
        <nav className="navbar">
      <NavLink to="/addparcel">Add Parcel Rates</NavLink>
      <NavLink to="/viewparcel">View parcel Rates</NavLink>
      <NavLink to="/addclient">Add New Client</NavLink>
      <NavLink to="/viewclient">View Client</NavLink>
      <NavLink to="/">Logout</NavLink>
    </nav>
    </div>
  );
}
 export default Navbar;