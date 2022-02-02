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
          Hi! I'm Jeffrey, a 24 year old developer looking to get into the tech industry <br/>
          I enjoy programming as I am able to use it as another creative outlet while also learning new things.
          Dancing and Cooking are hobbies of mine as I am a long time breakdancer and have had previous experience in the food industry.
      </p>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
      <header><h2>Skills</h2><i className="fas fa-code"></i></header>
      <p>
          Leadership and Team Communication with a background in sales <br/> 
          Well-versed in Java, HTML5/CSS/JavaScript and SQL <br/> 
          Currently learning and improving on JavaScript frameworks such as ExpressJS, NodeJS, and ReactJS <br/> 
      
      </p>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
      <header><h2>Education</h2><i className="fas fa-graduation-cap"></i></header>
      <p>
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
