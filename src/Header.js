import React from 'react';
import './Styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import the WhatsApp icon from Font Awesome

// Import your image
import logoImage from '../src/img/New.png';

function Header() {
  return (
    <>
    <header>
      <nav>
        <div className="container">
          {/* Use the img tag to display the image */}
          {/* <img src={logoImage} alt="ProFuturix Logo" width='150px' height='150px' /> */}
          <h1>ProFuturix</h1>
          <ul>

            <li className='page'><a href="#about">About</a></li>
            <li className='page'><a href="#services">Services</a></li>
            <li className='page'><a href="#contact">Contact</a></li>
            <li>
              <div className="fixed-bottom-right-100 p-3 page " style={{ zIndex: "6", left: "initial" }} >
                <a href='https://wa.me/918778548240?text=Hello How can I help you ?' target='_blank' className="whatsapp-icon">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" className='page' />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  );
}

export default Header;
