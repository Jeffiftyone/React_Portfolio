import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import weather from '../assets/images/weatherdash.png';
import fitness from '../assets/images/fitness.PNG';
import notetaker from '../assets/images/Notetaker.PNG';
import passwordgen from '../assets/images/Passwordgen.PNG';
import codequiz from '../assets/images/CodingQuiz.PNG';
function Cards() {
  return (
    <div className='cards'>
      <h1>Here are some of my Projects</h1>
      <p>Click a Card to visit the GitHub Repository, links to deploy the application are in the README</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {weather}
              title='Weather Dashboard'
              text='An application displaying the current and forecast weather of any city using data Retrieved from openweather API'
              label='HTML/CSS/JavaScript'
              link='https://github.com/Jeffiftyone/Weather_Dashboard'
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
              src={notetaker}
              title='Note Taker'
              text='An application that allows the users to create, update and delete notes'
              label='ExpressJS'
              link="https://github.com/Jeffiftyone/Note_Taker"
            />
            <CardItem
              src={passwordgen}
              title='Password Generator'
              text='Application using alerts to generate a randomized password, given criteria'
              label='JavaScript'
              link='https://jeffiftyone.github.io/Password_Generator/'
            />
            <CardItem
              src={codequiz}
              title='Coding Quiz'
              text='A quiz made to test the user on JavaScript. Utilizes timer and local storage to count and save scores'
              label='HTML/JavaScript'
              link='https://jeffiftyone.github.io/Coding_Quiz/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
