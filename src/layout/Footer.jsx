import React from 'react'
import { Link } from 'react-router-dom'

import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa'


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  
  return (
    <footer className='Footer'>
      <div className="footerinfo">
        <div className="footerabout">
        <article className="footerkontakt">
          <p><b>Telefon:</b> <a href="tel://+4523290910"><b>(+45)</b> 23 29 09 10</a></p>
          <p><b>Email: </b><a href="mailto:jonas@gefiber.dk">jonas@gefiber.dk </a></p>
        </article>
        </div>
      </div>
      <div className="footerinfobottom">
        <p><span>Jonas Rishøj</span> &copy; 2023 All Rights Reserved</p>

        <ul className="footersocial">
          <Link to="https://facebook.com/jonasrishoej"><div className='socialmediaicon'><FaFacebookF /></div></Link>
          <Link to="https://github.com/JohnnyJones069"><div className='socialmediaicon'><FaGithub /></div></Link>
          <Link to="https://linkedin.com/in/jonas-rish%C3%B8j-christensen-1ab4b7227/"><div className='socialmediaicon'><FaLinkedinIn /></div></Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer