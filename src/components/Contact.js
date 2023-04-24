import React from "react";
import { FaEnvelopeOpenText } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        
        <h2 className="heading">Here you can <span>Contact me</span> </h2>

        <form action="" method="post">

          <label id='emailLabel'>Email:</label>
          <input type="email" placeholder="Please provide your e-mail adress..." />


          <label>Subject:</label>
          <input type="text" placeholder="Subject..." />

           

          <label>Message:</label>
          <textarea rows="6" placeholder="Message..."></textarea>

          <button className="btn">Send message_ <FaEnvelopeOpenText/> </button>
        </form>

      </div>
    </>
  );
};

export default Contact;
