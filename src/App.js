import './App.css';
//import components here
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" >

        </Route>
      </Routes>

    </Router>
      
    </>
  );
}

export default App;
