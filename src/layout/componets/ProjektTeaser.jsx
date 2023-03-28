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
            FTA-Travel er en prøveeksamens opgave som jeg fik fra skolen i Oktober 2022.
            <br />
            Opgaven gik ud på at vi skulle lave en hjemmeside, hvor det skal forestille Formel 1's egen rejsebureau.
            <br />
            Hvor man så kan bestille rejser i en samlet pakke, istedet for at købe div. fly, hotel og pladsbooking til selve ræset.
          </p>
        </div>
      </div>
      <div className="projekteaserbox">
        <div className="imgbox">
        <img className="img" src={typescript} alt="TypeScript skoleprojekt" />
        </div>
        <div className="textbox">
          <h3>TypeScript opgave</h3>
          <p>TypeScript opgaven havde var delt op i 2 måder at lave den på, hvor jeg skulle lave begge, det to mig omkring 2 uger.
            <br />
            Jeg fulgte et kompendie fra min lærrere.
            <br />
            Der var 2 forskellige ogaver der omhandlede TypeScript. Den ene var at lave siden udelukne ud af TypeScript, og den anden var at lave en blanding af React JS og TypeScript.
            <br />
            Screenshottet er billedet af hvordan begge så ud efter 
          </p>
        </div>
      </div>
      <Link to="#">
      <button className='tilprojektknap'> SE FLERE PROJEKTER</button>
      </Link>
    </div>
  )
}

export default ProjektTeaser