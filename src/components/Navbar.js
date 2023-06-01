import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import resumefile from '../assets/Jeffrey_Beh_Resume_2023.pdf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const notify = () =>{
    toast.info(`✨ Downloading Resume!`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/React_Portfolio/' className='navbar-logo' onClick={closeMobileMenu}>
            Jeffiftyone
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
            <li className='nav-item'>
              <Link
                to='/React_Portfolio/aboutme'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/React_Portfolio/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/React_Portfolio/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <a href={resumefile}
                className='nav-links'
                onClick={notify}
                download target="_blank"
                rel="noopener noreferrer"
              >
                 <i class="fas fa-download"></i> &nbsp;Download Resume
              </a>
            </li>
          </ul>

        </div>

      </nav>
      <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </>
  );
}

export default Navbar;
