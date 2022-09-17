import '../../App.css';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  
const notify = () =>{
  toast.success('Message Sent!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });;
};
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify();
    e.target.reset();

    emailjs.sendForm('service_mk32l2p', 'template_jrc43fg', form.current, 'AZx7PyMfx0jFCiJwd')
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
       <div className="contact-card">
       <header><h2>Write me a Message!</h2>
      </header>
   <form ref={form} onSubmit={sendEmail}>
      
      <div class="input-group">
      <label>Name:</label>
      <input type="text" name="user_name" required />
      </div>
      <div class="input-group">
      <label>Email:</label>
      <input type="email" name="user_email" required />
      </div>
      <div class="input-group">
      <label>Message:</label>
      <textarea name="message" required />
      </div>
      
      
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
