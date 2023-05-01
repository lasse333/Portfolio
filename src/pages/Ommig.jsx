import React from "react";
import { Helmet } from "react-helmet";
import HvemErJeg from "../layout/componets/HvemErJeg";
import HvadKanjeg from "../layout/componets/HvadKanJeg";

import profilbilled from '../layout/assets/img/Profil_Billed.png'

const Ommig = () => {
  return (
    <div>
      <Helmet>
        <title>Jonas Rishøj | Om Mig</title>
      </Helmet>
      <div className="headline">
        <h1>Hvem er jeg?</h1>
      </div>
      <div className="ommigcontainer">
        <div className="info">
          <HvemErJeg />
          <HvadKanjeg />
        </div>
        <section className="aboutimg">
        <img src={profilbilled} alt="Et billed af hvordan jeg ser ud" />
        </section>
      </div>
    </div>
  );
};

export default Ommig;
