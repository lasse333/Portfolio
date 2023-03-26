import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../layout/componets/Hero'
import KortOmMig from '../layout/componets/KortOmMig'
import ProjektTeaser from '../layout/componets/ProjektTeaser'

const FrontPage = () => {

  return (
    <div>
      <Helmet>
        <title>Jonas Rishøj | Forside</title>
      </Helmet>
      <Hero />
      <div className="airboble"></div>
      <KortOmMig />
      <ProjektTeaser />
    </div>
  )
}

export default FrontPage