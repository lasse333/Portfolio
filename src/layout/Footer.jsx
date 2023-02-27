import React from 'react'
import { Link } from 'react-router-dom'

import { FaVine, FaLinkedinIn, FaTwitter, FaFacebookF, FaAngleRight } from 'react-icons/fa'


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='Footer'>
      <div className="footerinfo">
        <div className="footerabout">
        </div>
          <article className="footerkontakt">
            <h3>Kontakt mig</h3>
            <article>
            </article>
            <p><b>Telefon:</b> <b>(+45)</b> 23 29 09 10</p>
            <p><b>Email:</b> jonas@gefiber.dk</p>
          </article>
      </div>
      <div className="footerinfobottom">
        <p><span>Jonas Rishøj</span> &copy; {year} All Rights Reserved</p>

        <ul className="footersocial">
          {/* { contactinformation && */ }
          <Link to="https://facebook/stroem-grenaa"><div className='socialmediaicon'><FaFacebookF /></div></Link>
          <Link to="https://twitter.com/stroem-grenaa"><div className='socialmediaicon'><FaTwitter /></div></Link>
          <Link to="https://linkedin.com/stroem-grenaa"><div className='socialmediaicon'><FaLinkedinIn /></div></Link>
          {/* } */ }
        </ul>
      </div>
    </footer>
  )
}

export default Footer