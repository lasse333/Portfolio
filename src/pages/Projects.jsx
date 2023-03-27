import React from "react";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Jonas Rishøj | Projekter</title>
      </Helmet>

      <div className="headline">
        <h1>Mine Projekter</h1>
        <br />
        <p>Her er nogle eksempler på tidligere projekter jeg har lavet på skolen</p>
      </div>

      <div className="Projekter">
        <div className="ProjekterBox">
          <div className="imgbox"></div>
          <div className="textbox"></div>
        </div>
        <div className="ProjekterBox">
          <div className="imgbox"></div>
          <div className="textbox"></div>
        </div>
        <div className="ProjekterBox">
          <div className="imgbox"></div>
          <div className="textbox"></div>
        </div>
        <div className="ProjekterBox">
          <div className="imgbox"></div>
          <div className="textbox"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
