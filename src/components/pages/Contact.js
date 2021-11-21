
import '../../App.css';

import React from 'react';

function Contact() {

  return (
    <div className="contact">
    <form action="mailto:jeffiftyone@gmail.com"


    method="POST"
    
    
    enctype="multipart/form-data"
    
    
    name="EmailForm">
    
    
    Name:<br/>
    
    
    <input type="text" size="19" name="ContactName"/><br/><br/>
    
    
    Message:<br/> <textarea name="ContactCommentt" rows="6" cols="20">
    
    
    </textarea><br/><br/> <input type="submit" value="Submit"/> 
    
    </form>
    
    </div>
  );
}

export default Contact;
