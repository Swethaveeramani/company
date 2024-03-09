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
                    <a href="https://www.facebook.com/profile.php?id=100058701792156&sk=about" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.instagram.com/swetha_270311?igsh=MTB6djY0czVlejcxZw==" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/swetha-v-b705a9244/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
 