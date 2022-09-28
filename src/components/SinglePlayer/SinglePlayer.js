import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player,cart,setCart}) => {
    const {strThumb,strNationality,strDescriptionEN,idPlayer,strPlayer,strPosition} = player;
    const handleCart = () =>{
     
        
        const info = {
            idPlayer,
            strPlayer,
            strThumb,
            price:150,

        };
       
        if(cart?.length){
        const newPlayer = [...cart,info];
        setCart(newPlayer);
            return;
        }
        else{
            setCart([info]);
            return;
        }
        
      
    };
    const handleBookmark = () => {
        const info = {
          strPlayer,
          idPlayer,
          strThumb,
          quantity: 1,
          bookmark: "true",
        };
    
        const prevBookmark = localStorage.getItem("bookmark");
        const oldBookmark = JSON.parse(prevBookmark);
    
        if (oldBookmark) {
          const isExist = oldBookmark.find((p) => p.idPlayer === idPlayer);
    
          if (isExist) {
            alert("Already Bookmarked!!!");
            // isExist.quantity = isExist.quantity + 1;
            // localStorage.setItem("bookmark", JSON.stringify(oldBookmark));
          } else {
            alert("Bookmarked successfully");
            localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));
          }
        } else {
          localStorage.setItem("bookmark", JSON.stringify([info]));
        }
    
        // if (oldBokmark) {
        //   const isExit = oldBokmark.find((p) => p.idPlayer === idPlayer);
    
        //   if (isExit) {
        //     const updatedPrice = parseFloat(isExit.quanity);
        //     const newUpdatePrice = updatedPrice + 1;
        //     isExit.quanity = newUpdatePrice;
        //     localStorage.setItem("bookmark", JSON.stringify(oldBokmark));
    
        //     return;
        //   } else {
        //     localStorage.setItem("bookmark", JSON.stringify([...oldBokmark, info]));
        //   }
        // } else {
        //   localStorage.setItem("bookmark", JSON.stringify([info]));
        //   console.log("naiiiiiii");
        // }
      };
    
    return (
        <div className='card' data-aos="zoom-in">
           <img className='imgs' src={strThumb} alt="" />
          <h4>{strPlayer}</h4>
          <p>{strPosition}</p>
          <p>{strNationality}</p>
          <p>{strDescriptionEN?strDescriptionEN?.slice(0,60):"lorem lorem...."}...</p>
          <button className='card-btn'>Details</button>
          <button onClick={handleCart} className='card-btn'>Add To Cart</button>
          <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;