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
         I am 23 years old and am refining my techical skills before finding employment. <br/>
          I enjoy programming as I am able to use it as another creative outlet while also learning new things.
          In my free time I enjoy Cooking, Fitness, and Breakdancing.
      
      </p>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
      <header><h2>Skills</h2><i className="fas fa-code"></i></header>
      <p>
          Leadership and Team Communication <br/> 
          Well-versed in Java, HTML5/CSS/JavaScript and SQL <br/> 
          Currently learning  JavaScript frameworks such as ExpressJS, NodeJS, and ReactJS <br/> 
      
      </p>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
      <header><h2>Education</h2><i className="fas fa-graduation-cap"></i></header>
      <p>
     Hons. B.A. Information Technology and Computer Studies at York University<br/> 
     
      Currently enrolled in a Coding Bootcamp at the University of Toronto<br/> (Expected Graduation Nov 2021)
      </p>
  </div>
    </div>
  </div>
</div>

</container>
</>
  );
}
