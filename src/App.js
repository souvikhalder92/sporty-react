import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [players,setPlayers] = useState([]);

  useEffect(() =>{
   fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck')
   .then(res => res.json())
   .then(data => setPlayers(data?.player))
  },[]);
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
