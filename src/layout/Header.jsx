import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';


import logo from './assets/img/Logo.png'

const Header = () => {

  const [ sticky, setSticky ] = useState( "" )

  useEffect( () => {
    const handleScroll = () => {
      setSticky( window.scrollY > 75 );
    };
    window.addEventListener( "scroll", handleScroll );
    return () => window.removeEventListener( "scroll", handleScroll );
  } );



  return (
    <header className="header">
      <div className="logoname">
        <Link to="/"><img src={ logo } alt="Logo med Mine Initialer J.R." /></Link>
        <h1 className="name">
            Jonas Rishøj
            <br />
            Webudvikler
        </h1>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><NavLink to="ommig" end>Om mig</NavLink></li>
        <li><NavLink to="projekter/" end>Projekter</NavLink></li>
      </ul>
    </header>

   
  )
}

export default Header