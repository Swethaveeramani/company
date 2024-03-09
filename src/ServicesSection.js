import React from 'react';
import './Styles.css'; // Import your CSS file

const ServicesSection = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2>Our Services</h2>
                <div className="service-box">
                    <div className="service " >
                        <div >
                            <h3 >Resume</h3>
                        <p>A professional resume tailored to your needs.</p>
                        <p className="price">500</p>
                        </div>
                        
                    </div>
                    <div className="service">
                        <h3>Portfolio</h3>
                        <p>A stunning portfolio to showcase your work.</p>
                        <p className="price">700</p>
                    </div>
                    <div className="service">
                        <h3>Resume + Portfolio</h3>
                        <p>The complete package: a resume and portfolio combo.</p>
                        <p className="price">1000</p>
                    </div>
                    <div className="service">
                        <h3>Front End Application</h3>
                        <p>The ultimate solution for your front-end needs.</p>
                        <p className="price">2000</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
