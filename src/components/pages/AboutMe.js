import React from 'react';
import '../../App.css';

export default function Aboutme() {
  return (
    <>

<container className='aboutme'>
    <div className="aboutme-container">
    <div className="about-card">
      <header><h2><i className="fas fa-portrait"></i> About Me</h2></header>
      <p>
      <br/>
      Hello, my name is Jeffrey and I am a graduate in Information Technology from York University. Throughout my studies, I developed a strong foundation in programming and technology, and have a passion for continuing to learn and grow in this field. 
      <br/>
      <br/>
      I have completed coursework in a variety of programming languages, including Java, SQL, and JavaScript, and have worked on group projects that required the use of software development methodologies such as agile and waterfall. 
      <br/>
      <br/>
      In addition, I recently completed a coding bootcamp where I gained hands-on experience in web development, data structures, and algorithms. 
     <br />
     <br /> 
      I am excited to bring my passion for technology and my skills in programming to a new opportunity, and believe that I can make a positive contribution to any team.
         <br/>
         <br/>
         
      </p>
  </div>
 
 
    <div className="about-card">
      <header><h2><i className="fas fa-code"></i> Skills</h2></header>
      <p>
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

    <div className="about-card">
      <header><h2><i className="fas fa-graduation-cap"></i> Education </h2></header>
      <p>
      <br/>
      Hons. B.A. Information Technology and Computer Studies at York University<br/> 
      Graduated 2021 <br/>
      <br/>
      Coding Bootcamp Certificate at the University of Toronto<br/> 
      Graduated 2022
      <br/>

      </p>
      </div>
      </div>
</container>
</>
  );
}
