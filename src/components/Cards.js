import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here are some of my Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/weatherdash.png'
              title='Weather Dashboard'
              text='An application displaying the current and forecast weather of any city using data Retrieved from openweather API'
              label='HTML/CSS/JavaScript'
              link='https://jeffiftyone.github.io/Weather_Dashboard/'
            />
            <CardItem
              src='images/fitness.png'
              title='Fitness Tracker'
              text='Allows the user to add and update workouts, as well as display results of previous workouts'
              label='MongoDB/ExpressJS'
              link='https://jeffiftyone-fitnesstracker.herokuapp.com/'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Notetaker.PNG'
              title='Note Taker'
              text='An application that allows the users to create, update and delete notes'
              label='ExpressJS'
              link="https://jeffbehnotetaker.herokuapp.com/"
            />
            <CardItem
              src='images/Passwordgen.PNG'
              title='Password Generator'
              text='Application using alerts to generate a randomied password, given criteria'
              label='JavaScript'
              link='https://jeffiftyone.github.io/Password_Generator/'
            />
            <CardItem
              src='images/CodingQuiz.PNG'
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
