import React from 'react';
import './Styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import the WhatsApp icon from Font Awesome

function Header() {
  return (
    <>
    <header>
      <nav>
        <div className="container">
          <h1>ProFuturix</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <div className="fixed-bottom-right-100 p-3" style={{ zIndex: "6", left: "initial" }}>
                <a href='https://wa.me/918778548240?text=Hello How can I help you ?' target='_blank'>
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
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
