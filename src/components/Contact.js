import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h3vekt4', 'template_pfu697m', form.current, 'UpRB44adCT-4o62el')
      .then((result) => {
          console.log(result.text);
          alert('The email is successfully sent! I reach back to you as fast as possible!');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <>
      <div className="contactContainer" id="contact">
        
        <h2 className="heading">Here you can <span><i>Contact me</i>!</span> </h2>

        <form ref={form} onSubmit={sendEmail} action="" method="post">

          <label id='nameLabel'>Your name:</label>
          <input type="text" placeholder="Please provide your name..." name="user_name" required />

          <label id='emailLabel'>E-mail adress:</label>
          <input type="email" placeholder="Please provide your e-mail adress..." name="user_email"required />

          <label>Subject:</label>
          <input type="text" placeholder="Subject..." name="subject" required />           

          <label>Message:</label>
          <textarea rows="6" placeholder="Message..." name="message" required></textarea>

          <button type="submit" className="btn">Send message_ <FaEnvelope/> </button>
          
        </form>

      </div>
    </>
  );
};

export default Contact;
