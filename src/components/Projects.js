import React from "react";
import { FaExternalLinkAlt} from 'react-icons/fa';
import kep1 from '../images/pexels1.jpg';
import kep2 from '../images/pexels2.jpg';
import kep3 from '../images/pexels3.jpg';
import kep4 from '../images/pexels4.jpg';
import kep5 from '../images/pexels5.jpg';
import kep6 from '../images/pexels6.jpg';
import "./Projects.css";

const Projects = () => {
  return (      
    

      <section className="portfolio" id="portfolio">

        <h2 className="heading">Latest <span>Projects</span> </h2>

        <div className="portfolioContainer">

          <div className="portfolioBox">
            <img src={kep1} alt="" />
            <div className="portfolioLayer">
              <h4>Teszt egyes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta?</p>
              <a href="/#"> <FaExternalLinkAlt/> </a>
            </div>  
          </div>

          <div className="portfolioBox">
            <img src={kep2} alt="" />
            <div className="portfolioLayer">
              <h4>Teszt egyes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta?</p>
              <a href="/#"> <FaExternalLinkAlt/> </a>
            </div>  
          </div>

          <div className="portfolioBox">
            <img src={kep3} alt="" />
            <div className="portfolioLayer">
              <h4>Teszt egyes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta?</p>
              <a href="/#"> <FaExternalLinkAlt/> </a>
            </div>  
          </div>

          <div className="portfolioBox">
            <img src={kep4} alt="" />
            <div className="portfolioLayer">
              <h4>Teszt egyes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta?</p>
              <a href="/#"> <FaExternalLinkAlt/> </a>
            </div>  
          </div>

          <div className="portfolioBox">
            <img src={kep5} alt="" />
            <div className="portfolioLayer">
              <h4>Teszt egyes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta?</p>
              <a href="/#"> <FaExternalLinkAlt/> </a>
            </div>  
          </div>

          <div className="portfolioBox">
            <img src={kep6} alt="" />
            <div className="portfolioLayer">
              <h4>Teszt egyes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta?</p>
              <a href="/#"> <FaExternalLinkAlt/> </a>
            </div>  
          </div>

        </div>

      </section>
    
  )
}

export default Projects