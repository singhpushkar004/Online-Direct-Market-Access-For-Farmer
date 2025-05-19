import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
const IntroductionPage = () => {
  return (
   <>
    <Header/>
    <div className="introduction-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title">Welcome to Online Direct Market Access for Farmers</h1>
          <p className="hero-description">
            A revolutionary platform that directly connects farmers to consumers, ensuring fair trade, higher profits, and greater access to markets.
          </p>
        </div>
      </section>

      {/* Introduction Content */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">What is ODMA?</h2>
          <p className="section-description">
            Online Direct Market Access (ODMA) is a digital platform designed to directly connect farmers with consumers. 
            By bypassing intermediaries such as wholesalers and retailers, farmers are able to sell their produce at better prices, reducing costs and increasing their profits.
          </p>

          <h3 className="section-title">Key Benefits of ODMA:</h3>
          <ul className="benefits-list">
            <li><strong>Higher Prices:</strong> Farmers can get better prices by selling directly to consumers.</li>
            <li><strong>Reduced Costs:</strong> Eliminating transportation and storage costs increases profitability.</li>
            <li><strong>Increased Transparency:</strong> Farmers can view real-time market prices and make informed decisions.</li>
            <li><strong>Global Reach:</strong> Access to a wider market allows farmers to sell beyond their local area.</li>
            <li><strong>Improved Quality Control:</strong> Farmers maintain control over the quality of their products.</li>
          </ul>

          <h3 className="section-title">Challenges to Consider:</h3>
          <ul className="challenges-list">
            <li><strong>Technology Adoption:</strong> Farmers need to be digitally literate to use the platform effectively.</li>
            <li><strong>Logistics:</strong> Delivery can be a challenge, especially in rural areas.</li>
            <li><strong>Payment Systems:</strong> Reliable payment methods must be in place.</li>
            <li><strong>Building Trust:</strong> Farmers need to build consumer trust for long-term success.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center">
        <div className="container">
          <h2 className="cta-title">Join the Revolution in Agriculture!</h2>
          <p className="cta-description">Empower yourself with better market access, higher profits, and more control over your products. Start selling directly to consumers today.</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </section>
    </div>
    <Footer/>
   </>
  );
};

export default IntroductionPage;
