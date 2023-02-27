import React, { useContext, useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {

  const [ showMenu, setShowMenu ] = useState( false )
  const [ sticky, setSticky ] = useState( false )

  useEffect( () => {
    const handleScroll = () => {
      setSticky( window.scroll > 75 );
    };
    window.addEventListener( "scroll", handleScroll );
    return () => window.removeEventListener( "scroll", handleScroll );
  } );

  return (
    <nav className={ `${ sticky ? "sticky Navbar" : "Navbar" }` }>
      {/* Burgermenu */ }
      <div className='burger-button' onClick={ () => setShowMenu( !showMenu ) }>
        <span className='bar bar1'></span>
        <span className='bar bar2'></span>
        <span className='bar bar3'></span>
      </div>

      <div className={ showMenu === true ? "navbar-container active" : "navbar-container" }>
        <ul>
          <li><NavLink to="/" end>Forside</NavLink></li>
          <li><NavLink to="ommig">Om mig</NavLink></li>
          <li><NavLink to="projekter">Projekter</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar