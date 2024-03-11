import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import Facebook icon

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container">
                <p>&copy; 2024 ProFuturix. All rights reserved.</p>
                <div className="social-icons">
                    {/* Replace the Twitter icon with the Facebook icon */}
                    <a href="https://github.com/Swethaveeramani" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.instagram.com/profuturix?igsh=MTVxcTFuenUxeXkwbw==" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/profuturix-company-a87a202b9/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
 