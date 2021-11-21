import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aboutme from './components/pages/Aboutme';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/aboutme' component={Aboutme} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
      </Router>
    </>
  );
}

export default App;
