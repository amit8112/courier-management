import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Addparcel from './components/Addparcel';
import Navbar from './components/Navbar';
import Updateparcel from './components/Updateparcel';
import Viewparcel from './components/Viewparcel.jsx'
import Addclient from './components/client/Addclient'
import Viewclient from './components/client/Viewclient';
import Login from './components/login/Login';
import Updateclient from './components/client/Updateclient';
import Input from './components/Input';
import ClientContext from './components/context/ClientContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Maintble from './components/Maintble';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = useState([]);
  const [image,setImage]=useState([])


  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("https://63e0c44765b57fe60648f27b.mockapi.io/clientdata")
      .then((res) => {
        setData(res.data);
      });
  }

  return (
    <BrowserRouter>
    <ClientContext.Provider value={[data, setData]}>
    <Routes>
    <Route path="/" element={<Login/>}></Route>

      <Route path="/addparcel" element={<Addparcel/>}></Route>
      <Route path="/viewparcel" element={<Viewparcel/>}></Route>
      <Route path="/updateparcel" element={<Updateparcel/>}></Route>
      <Route path="/addclient" element={<Addclient/>}></Route>
      <Route path="/viewclient" element={<Viewclient/>}></Route>
      <Route path="/updateclient/:id" element={<Updateclient/>}></Route>
      <Route path="/input" element={<Input/>}></Route>
      <Route path='/maintable' element={<Maintble/>}></Route>



      
    
    </Routes>
    
    </ClientContext.Provider>
    
    </BrowserRouter>
    
  );
}

export default App;
