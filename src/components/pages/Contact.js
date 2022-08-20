import '../../App.css';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mk32l2p', 'template_jr43fg', form.current, '2k-JxL_9QErYMB-WjG8my')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <container className="contact"> 
     <div class="col-sm"> 
     <div class="container">
       <div className="card">
       <header><h2><i class="fas fa-paper-plane"></i> &nbsp;Contact Me</h2>
      </header>
   <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <textarea name="message" />
      <br/>
      
      <button type="submit" class="btn btn-dark btn-block" >
          <span>Send &nbsp;<i class="fas fa-paper-plane"></i></span>
      </button>
    </form>

    </div>
   </div>
  </div>
  </container>
  </>
  );
};



export default Contact;
