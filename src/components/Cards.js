import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import weather from '../assets/images/weatherdash.png';
import fitness from '../assets/images/fitness.PNG';
import notetaker from '../assets/images/Notetaker.PNG';
import passwordgen from '../assets/images/Passwordgen.PNG';
import codequiz from '../assets/images/CodingQuiz.PNG';
import teachthrutalk from '../assets/images/teachthrutalk.PNG';
import devspace from '../assets/images/devspace.PNG';
import quizapp from '../assets/images/QuizApp.PNG';

function Cards() {
  return (
  <div className='cards'>
      <div class="wrapper">
        <div class="typing">
      Here are some of my Projects! 
        </div>
            <div class= "subtitle">👇 Click on a Card to view the GitHub repository, links to deploy the applications are in the README  </div>
        </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
      
          <CardItem
              src={quizapp}
              title='Mobile Quiz App'
              text='A Quiz application that tests knowledge of different web techologies'
              label='Dart/Flutter/Firebase'
              link="https://github.com/Jeffiftyone/quizapp"
            />

            <CardItem
              src={fitness}
              title='Fitness Tracker'
              text='Allows the user to add and update workouts, as well as display results of previous workouts'
              label='MongoDB/ExpressJS'
              link='https://github.com/Jeffiftyone/Fitness_Tracker'
            />
        
          </ul>
          <ul className='cards__items'>
  

              <CardItem
              src={teachthrutalk}
              title='Teach Thru Talk'
              text='A forum style application allowing users to learn different languages by highlighting unknown phrases to translate to their native language and having conversations from other users all over the world. '
              label='MongoDB/ExpressJS/Bootstrap'
              link='https://github.com/FilipAlH/TeachThruTalk'
            />
              <CardItem
              src= {devspace}
              title='Dev Space'
              text='An instant chat application for developers to learn, communicate, and collaborate. Created for developers by developers.'
              label='MongoDB/Express/React/Node/Firebase'
              link='https://github.com/nikhil-kharbanda/UofT_DevSpace'
            />
        
             <CardItem
              src= {weather}
              title='Weather Dashboard'
              text='An application displaying the current and forecast weather of any city using data Retrieved from openweather API'
              label='HTML/CSS/JavaScript'
              link='https://github.com/Jeffiftyone/Weather_Dashboard'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
