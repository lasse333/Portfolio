import React from 'react'
import { Link } from 'react-router-dom';
import ftatravel from '../assets/img/ftatravel.png'
import typescript from '../assets/img/typescript.png'


const ProjektTeaser = () => {
  return (
    <div className='ProjektTeaser'>
      <div className="projekteaserbox">
        <div className="imgbox">
          <img className="img" src={ftatravel} alt="Forside af FTA-Travel skoleprojekt" />
        </div>
        <div className="textbox">
          <h3>FTA-Travel</h3>
          <p>
            FTA-Travel er en prøveeksamens opgave som jeg fik fra skolen i Oktober 2022...
            <br />
            <br />
            <strong>Du kan lære mere om projektet på Projekter siden.</strong>
          </p>
        </div>
      </div>
      <div className="projekteaserbox">
        <div className="imgbox">
        <img className="img" src={typescript} alt="TypeScript skoleprojekt" />
        </div>
        <div className="textbox">
          <h3>TypeScript opgave</h3>
          <p>TypeScript opgaven havde var delt op i 2 måder at lave den på, hvor jeg skulle lave begge, det to mig omkring 2 uger...
            <br />
            <br />
            <strong>Du kan lære mere om projektet på Projekter siden.</strong>
          </p>
        </div>
      </div>
      <Link to="projekter">
      <button className='tilprojektknap'> SE FLERE PROJEKTER</button>
      </Link>
    </div>
  )
}

export default ProjektTeaser