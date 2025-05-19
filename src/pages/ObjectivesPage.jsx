import React from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ObjectivesPage = () => {
  return (
    <>
    <Header/>
        <div className="objectives-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title">Objectives of Online Direct Market Access (ODMA)</h1>
          <p className="hero-description">
            Discover the key objectives that drive ODMA to empower farmers, improve market access, and promote sustainability.
          </p>
        </div>
      </section>

      {/* Objectives Content */}
      <section className="content-section">
        <div className="container">
          {/* Economic Objectives */}
          <h2 className="section-title">Economic Objectives</h2>
          <p className="section-description">
            The primary goal of ODMA is to improve the economic condition of farmers. By removing intermediaries, farmers can sell directly to consumers, which allows them to earn more and reduce costs. Here are the key economic objectives:
          </p>
          <ul className="objectives-list">
            <li><strong>Increase Revenue:</strong> Farmers will receive a larger share of the sale price of their products.</li>
            <li><strong>Improve Profit Margins:</strong> Direct sales allow for better control of pricing and negotiation.</li>
            <li><strong>Reduce Transaction Costs:</strong> By eliminating middlemen and reducing transport and marketing costs, farmers can lower their expenses.</li>
          </ul>

          {/* Market Access Objectives */}
          <h2 className="section-title">Market Access and Reach Objectives</h2>
          <p className="section-description">
            ODMA platforms provide farmers with broader market access. This section discusses how farmers can reach new customers and markets globally:
          </p>
          <ul className="objectives-list">
            <li><strong>Expand Market Coverage:</strong> Farmers can reach customers beyond their local region and even internationally.</li>
            <li><strong>Target Specific Consumer Segments:</strong> Farmers can use platform tools to target particular groups and increase their sales.</li>
            <li><strong>Access New Markets:</strong> Through ODMA, farmers can enter markets that were previously unavailable to them.</li>
          </ul>

          {/* Consumer Engagement Objectives */}
          <h2 className="section-title">Consumer Engagement and Trust Objectives</h2>
          <p className="section-description">
            Building strong relationships with consumers is crucial. ODMA helps farmers foster consumer trust and engagement, leading to long-term success:
          </p>
          <ul className="objectives-list">
            <li><strong>Increase Consumer Participation:</strong> Direct communication with consumers allows farmers to build relationships and share valuable information.</li>
            <li><strong>Enhance Consumer Confidence:</strong> Transparency and traceability enable farmers to gain trust, leading to repeat business.</li>
            <li><strong>Foster Loyalty:</strong> As consumer engagement increases, so does brand loyalty, ensuring long-term business growth.</li>
          </ul>

          {/* Efficiency and Sustainability Objectives */}
          <h2 className="section-title">Efficiency and Sustainability Objectives</h2>
          <p className="section-description">
            ODMA helps farmers streamline their operations, reduce waste, and support sustainable practices. Here are the key objectives for improving efficiency and sustainability:
          </p>
          <ul className="objectives-list">
            <li><strong>Improve Operational Efficiency:</strong> Farmers can optimize their inventory and order management through the platform.</li>
            <li><strong>Reduce Waste:</strong> The direct nature of the transactions ensures fewer products go unsold or spoil due to overproduction.</li>
            <li><strong>Promote Sustainable Farming Practices:</strong> By connecting with ethically-minded consumers, farmers can adopt sustainable practices and contribute to a healthier food system.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center">
        <div className="container">
          <h2 className="cta-title">ODMA - Empowering Farmers for a Better Future</h2>
          <p className="cta-description">Join the movement to support farmers and help them thrive with direct market access.</p>
          <Link to="/signup" className="cta-button">Get Involved</Link>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ObjectivesPage;
