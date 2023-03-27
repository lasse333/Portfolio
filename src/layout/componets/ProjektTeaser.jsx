import React from 'react'
import { Link } from 'react-router-dom';


const ProjektTeaser = () => {
  return (
    <div className='ProjektTeaser'>
      <div className="projekteaserbox">
        <div className="imgbox"></div>
        <div className="textbox"></div>
      </div>
      <div className="projekteaserbox">
        <div className="imgbox"></div>
        <div className="textbox"></div>
      </div>
      <Link to="#">
      <button className='tilprojektknap'> SE FLERE PROJEKTER</button>
      </Link>
    </div>
  )
}

export default ProjektTeaser