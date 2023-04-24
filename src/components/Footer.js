import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className="myInfo">
            <h2>| Developed by: Délczeg Balázs &copy;  2023 | </h2>
        </div>

        <div className="myLinks">
          <a className='upArrow' href="/#"> <FaArrowUp/> </a>                   
        </div>    
    </div>
  )
}

export default Footer