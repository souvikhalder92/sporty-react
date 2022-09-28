import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='header'>
            <h1 className='title'>Sporty</h1>
        <div>
           <a href="/">Home</a>
           <a href="/">Contact</a>
           <a href="/">About</a>
        </div>
   </nav>
    );
};

export default Nav;