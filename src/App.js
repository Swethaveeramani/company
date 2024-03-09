// App.js
import React, { useEffect, useState } from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './Styles.css'; // Import your CSS file
import Slider from './Slider';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
    <div>
      <Header />
      <br/><br/><br/>
      <Slider/>
      <ServicesSection />
      <ContactSection />
      <Footer />
      {showBackToTop && <div id="back-to-top" onClick={scrollToTop}>&#8679;</div>}
    </div>
    </>
  );
}

export default App;
