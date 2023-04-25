import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className="myInfo">
            <h2>| <i>Developed by</i>: Délczeg Balázs <i>&copy;  2023</i> | </h2>
        </div>

        <div className="myLinks">
          <a className='upArrow' href="/#"> <FaArrowUp/> </a>                   
        </div>    
    </div>
  )
}

export default Footer