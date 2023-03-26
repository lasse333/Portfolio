import React from "react";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Jonas Rishøj | Projekter</title>
      </Helmet>

      <div className="headline"></div>

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
