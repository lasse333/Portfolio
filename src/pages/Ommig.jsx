import React from "react";
import { Helmet } from "react-helmet";
import HvemErJeg from "../layout/componets/HvemErJeg";
import HvadKanjeg from "../layout/componets/HvadKanJeg";

const Ommig = () => {
  return (
    <div>
      <Helmet>
        <title>Jonas Rishøj | Om Mig</title>
      </Helmet>
      <div className="headline">
        
      </div>
      <div className="ommigcontainer">
        <div className="info">
          <HvemErJeg />
          <HvadKanjeg />
        </div>
        <section className="aboutimg">
        image
        </section>
      </div>
    </div>
  );
};

export default Ommig;
