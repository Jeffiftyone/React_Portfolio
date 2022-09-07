import React from 'react';
import '../../App.css';

export default function Aboutme() {
  return (
    <>

<container className='aboutme'>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="card">
      <header><h2>About Me</h2><i className="fas fa-portrait"></i></header>
      <p>
      <br/>
          Hi! I'm Jeffrey, a 24 year old Web and Software Developer.
          <br/>
          <br/>
          I enjoy programming as I am able to use it as another creative outlet while also learning new ways to use technology. 
         <br/>
          <br/>
         Dancing and Cooking are hobbies of mine as prior to pursuing my tech career, I was a long time breakdancer and have had previous experience in the food industry.<br/> 
      </p>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
      <header><h2>Skills</h2><i className="fas fa-code"></i></header>
      <p>
      <br/>
          Leadership and Team Communication with a background in sales 
          <br/> 
          <br/> 
          <span class="bolded">Languages:</span> Java, HTML, CSS, Javascript, SQL
          <br/>
          <span class="bolded">Frameworks:</span>  NodeJS, ExpressJS, jQuery, React, Bootstrap
          <br/> 
          <span class="bolded">Other:</span>  Git, Postman, MongoDB, Firebase 
          <br/> 
          <br/> 
          Currently learning about Data Structures and improving my efficiency of code through the use of different algorithms. <br/> 
      
      </p>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
      <header><h2>Education</h2><i className="fas fa-graduation-cap"></i></header>
      <p>
      <br/>
      Coding Bootcamp Certificate at the University of Toronto<br/> 
      Graduated 2021
      <br/>
      <br/>
      Hons. B.A. Information Technology and Computer Studies at York University<br/> 
      Graduated 2020 <br/>
      </p>
  </div>
    </div>
  </div>
</div>

</container>
</>
  );
}
