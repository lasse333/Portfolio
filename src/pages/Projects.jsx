import React from "react";
import { Helmet } from "react-helmet";

import ftatravel from "../layout/assets/img/ftatravel.png";
import typescript from "../layout/assets/img/TypeScript.png";
import eksamensopgave from "../layout/assets/img/Eksamensopgave.png";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Jonas Rishøj | Projekter</title>
      </Helmet>

      <div className="headline">
        <h1>Mine Projekter</h1>
        <br />
        <p>
          Her er nogle eksempler på tidligere projekter jeg har lavet på
          Viden-Djurs under min uddannelse.
        </p>
      </div>

      <div className="Projekter">
        <div className="ProjekterBox">
          <div className="imgbox">
            <img
              className="img"
              src={ftatravel}
              alt="Forside af FTA-Travel skoleprojekt"
            />
          </div>
          <div className="textbox">
            <h3>FTA-Travel</h3>
            <p>
              FTA-Travel er en prøveeksamens opgave som jeg fik fra skolen i
              Oktober 2022.
              <br />
              Opgaven gik ud på at vi skulle lave en hjemmeside, hvor det skal
              forestille Formel 1's egen rejsebureau.
              <br />
              Hvor man så kan bestille rejser i en samlet pakke, istedet for at
              købe div. fly, hotel og pladsbooking til selve ræset.
            </p>
          </div>
        </div>
        <div className="ProjekterBox">
          <div className="imgbox">
            <img
              className="img"
              src={typescript}
              alt="TypeScript skoleprojekt"
            />
          </div>
          <div className="textbox">
            <h3>TypeScript opgave</h3>
            <p>
              TypeScript opgaven havde var delt op i 2 måder at lave den på,
              hvor jeg skulle lave begge, det to mig omkring 2 uger.
              <br />
              Jeg fulgte et kompendie fra min lærrere.
              <br />
              Der var 2 forskellige ogaver der omhandlede TypeScript. Den ene
              var at lave siden udelukne ud af TypeScript, og den anden var at
              lave en blanding af React JS og TypeScript.
              <br />
              Screenshottet er billedet af hvordan begge så ud efter
            </p>
          </div>
        </div>
        <div className="ProjekterBox">
          <div className="imgbox">
            <img
              className="img"
              src={eksamensopgave}
              alt="Forside til Webudvikler eksamensopgave"
            />
          </div>
          <div className="textbox">
            <h3>STRØM-opgave</h3>
            <p>
              STRØM-opgaven var en eksamensopgave, som vi fik 5 dage til at lave
              i November 2022.
              <br />
              Opgaven gik ud på at vi skulle lave en hjemmeside, hvor det skal
              forestille et elektriker firma's egen hjemmeside.
              <br />
              Hvor man kan læse om hvem de er, hvilken service de kan give, en
              FAQ på ofte stillet spørgsmål, og nyheder fra firmaet.
            </p>
          </div>
        </div>
        <div className="ProjekterBox">
          <div className="img underudvikling">
            <h2>Under udvikling</h2>
          </div>
          <div className="textbox">
            <h3>Projekt under udvikling</h3>
            <p>
              Dette projekt er under udvikling.
              <br />
              Når projektet bliver færdigt, vil det komme på og blive vist frem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
