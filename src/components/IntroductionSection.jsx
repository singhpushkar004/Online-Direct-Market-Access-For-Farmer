import React from 'react';
import img1 from "../assets/images/image.png"
const IntroductionSection = () => {
  return (
    <section id="introduction" className="intro-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 animate__animated animate__fadeInLeft">
            <img 
              src={img1}
              alt="Farm to Consumer" 
              className="img-fluid rounded shadow" 
            />
          </div>
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h2 className="section-title mb-4">Introduction to ODMA</h2>
            <p className="lead">
              <strong>Online Direct Market Access (ODMA)</strong> is a digital platform that enables farmers to connect directly with consumers and buyers, eliminating intermediaries and enhancing profitability.
            </p>
            <ul className="intro-points mt-3">
              <li>✅ Higher prices for farmers through direct sales</li>
              <li>✅ Reduced costs and post-harvest losses</li>
              <li>✅ Increased transparency and decision-making power</li>
              <li>✅ Broader market reach beyond local boundaries</li>
              <li>✅ Improved quality control and consumer trust</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
