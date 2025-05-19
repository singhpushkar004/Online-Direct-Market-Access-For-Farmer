import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
const PurposePage = () => {
  return (
    <>
    <Header/>
        <div className="purpose-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title">Purpose of Online Direct Market Access (ODMA)</h1>
          <p className="hero-description">
            Our mission is to empower farmers by providing a direct platform for selling their produce, improving their income, market reach, and overall sustainability.
          </p>
        </div>
      </section>

      {/* Purpose Content */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Economic Gains</h2>
          <p className="section-description">
            The primary purpose of ODMA is to increase the economic well-being of farmers. By cutting out the middlemen and connecting farmers directly with consumers, they can earn higher prices and improve profit margins. Farmers will also save on marketing and transportation costs.
          </p>
          <ul className="purpose-list">
            <li><strong>Increase in Income:</strong> Farmers will be able to keep more of the money from their produce.</li>
            <li><strong>Increased Profit Margins:</strong> Direct sales to consumers allow farmers to set their prices and negotiate for better deals.</li>
            <li><strong>Low Costs:</strong> Farmers will avoid traditional marketing expenses like advertising and transportation costs.</li>
          </ul>

          <h2 className="section-title">Market Access and Reach</h2>
          <p className="section-description">
            ODMA enables farmers to expand their market reach. Instead of selling only in local markets, farmers will now be able to access a global consumer base. Online marketplaces also offer targeted marketing tools to help farmers connect with the right customers.
          </p>
          <ul className="purpose-list">
            <li><strong>Increased Market Coverage:</strong> Farmers can reach consumers beyond their local region, opening up new sales opportunities.</li>
            <li><strong>Targeted Marketing:</strong> Farmers can tailor their offerings to specific consumer groups.</li>
            <li><strong>New Markets:</strong> Online platforms offer access to markets that might otherwise be inaccessible.</li>
          </ul>

          <h2 className="section-title">Consumer Involvement and Confidence</h2>
          <p className="section-description">
            With ODMA, consumers can become more involved in the process of purchasing farm-fresh produce. Farmers can directly interact with consumers, educating them about the products and farming practices. This transparency builds trust and increases the likelihood of repeat business.
          </p>
          <ul className="purpose-list">
            <li><strong>Increased Consumer Participation:</strong> Direct interaction allows farmers to inform consumers about the products.</li>
            <li><strong>Increased Consumer Confidence:</strong> The transparency provided by ODMA platforms fosters trust and loyalty.</li>
          </ul>

          <h2 className="section-title">Efficiency and Sustainability</h2>
          <p className="section-description">
            ODMA platforms help farmers manage their inventory, track orders, and ensure that they can meet demand efficiently. Additionally, the model promotes sustainable farming practices, as consumers are more likely to support local and ethical farmers.
          </p>
          <ul className="purpose-list">
            <li><strong>Efficiency:</strong> Streamlined processes reduce waste and enhance profitability.</li>
            <li><strong>Increased Sustainability:</strong> Direct-to-consumer sales encourage more sustainable agricultural practices.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center">
        <div className="container">
          <h2 className="cta-title">Empowering Farmers for a Sustainable Future</h2>
          <p className="cta-description">Join us in transforming agriculture and improving the livelihoods of farmers through direct market access. Start selling today!</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default PurposePage;
