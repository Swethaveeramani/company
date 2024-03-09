import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Styles.css';

function DarkVariantExample() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pinsentmasons.com/-/media/images/graduate/top-level-heroes/work-experience-desktop-hero-1440x700px.jpg?h=583&w=1200&hash=0E165B67FCBBD496B7F5C1D065643684"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>ProFuturix</h5>
          <p>We specialize in empowering your career journey with comprehensive solutions, from professional resumes to cutting-edge frontend applications.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pinsentmasons.com/-/media/images/graduate/blog/cards/blog-generic-card-hero-asset-5.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>ProFuturix</h5>
          <p>We specialize in empowering your career journey with comprehensive solutions, from professional resumes to cutting-edge frontend applications.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pinsentmasons.com/-/media/images/graduate/blog/cards/blog-generic-card-hero-asset-6.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>ProFuturix</h5>
          <p>
          We specialize in empowering your career journey with comprehensive solutions, from professional resumes to cutting-edge frontend applications.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
