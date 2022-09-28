import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";

const Home = () => {
    const [players,setPlayers] = useState([])
    const [search,setSearch] = useState("");
    const [cart,setCart] = useState([]);
    
    
  useEffect(() =>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
    .then(res => res.json())
    .then(data => setPlayers(data?.player));
  },[search]);
  
  if(cart?.length > 5)
  {
    alert("Select only 5");
    cart.length--;
    
     
  }
  const handleDelete = (id) => {
    const leftPlayer = cart.filter((pd) => pd.idPlayer !== id);
    setCart(leftPlayer);
    toast("wow deleted form cart!");
    Swal.fire("Good job!", "Delete the player!", "success");
  };
 

    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                 <input  onChange={(e) => setSearch(e.target.value)}  type="text" className='search-input' />
                 <button className='search-btn'>Search</button>
                 <div className="player-container">
                    <Players players={players} cart={cart} setCart={setCart}></Players>
                 </div>
                </div>
                <div className="right-side">
                   <div className="cart">
                    <p>Selected:{cart.length}</p>
                {
                  
                }
            {
            cart?.map((p) => (
              <div className="cart-container">
                <ol>
                  {p.strPlayer}
                  </ol>
                 
                <button
                  onClick={() => handleDelete(p.idPlayer)}
                  className="delete-btn"
                >
                  x
                </button>
              </div>
            ))}
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;