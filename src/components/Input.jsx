import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import Navbar from "./Navbar";

function Input() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
 

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    <Navbar/>
     <h2>Client Parcel Rates Details </h2>
    
     <table>
       <thead>
         <tr>
           <th>id</th>
           <th>Name</th>
           <th>username</th>
           <th>Email</th>
           <th>address</th>
           <th>street</th>
           <th>suite</th>
           <th>zipcode</th>
          

           <th>Action</th>
         </tr>
       </thead>
       {data.map((eachData) => {
         return (
           <>
             <tbody>
               <tr>
               <td>{eachData.id}</td>
               <td>{eachData.name}</td>
               <td>{eachData.username}</td>
                 <td>{eachData.email}</td>
                 <td>{eachData.address}</td>
                 <td>{eachData.street}</td>
                 <td>{eachData.suite}</td>
                 <td>{eachData.zipcode}</td>
                 
              

                 
                 
               </tr>
             </tbody>
           </>
         );
       })}
     </table>
   </div>
  );
}

export default Input;
