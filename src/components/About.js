import React from 'react'
import { FaCloudDownloadAlt, FaEnvelopeOpenText} from 'react-icons/fa';
import './About.css';


const About = () => {
  return (

    <>
        <div className='aboutContainer'>
          

          

            <div className="aboutContent">

              <div className='aboutDiv'>
                  <p className='aboutText' id='littleText'>Greetings, here you can find my most recent projects, my name is </p>
                  <h3 className='aboutText' id='nameText'>Balázs</h3>
                  <p className='aboutText' id='dataText'>and I'm a Frontend Developer</p>

              </div>
              
              <br></br>

              <div className='aboutLinks'>
                <button className='invertedButton'>Download CV_ <FaCloudDownloadAlt /></button>
                <button>Contact me_<FaEnvelopeOpenText /></button>
                {/*<a href="https://github.com/delczbalazs" target="_blank">Resume <FaCloudDownloadAlt /></a>      */}       
              </div>

            </div>

          

        </div> 
    </>
  )
}

export default About