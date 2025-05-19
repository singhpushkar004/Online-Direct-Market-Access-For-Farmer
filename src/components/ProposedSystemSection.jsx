import React from 'react';

const ProposedSystemSection = () => {
  return (
    <section id="proposed-system" className="proposed-system-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5 animate__animated animate__fadeInDown">
          Proposed System
        </h2>

        <div className="row">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <h4>💰 Economic Gains</h4>
            <ul className="system-list">
              <li>Eliminates middlemen to increase farmers’ income</li>
              <li>Gives farmers control over pricing and negotiation</li>
              <li>Reduces marketing and transportation costs</li>
            </ul>
          </div>

          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h4>🌐 Market Access & Reach</h4>
            <ul className="system-list">
              <li>Enables global reach for farmers’ produce</li>
              <li>Offers tools for targeted consumer marketing</li>
              <li>Opens up new market opportunities</li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <h4>🤝 Consumer Involvement & Trust</h4>
            <ul className="system-list">
              <li>Enhances farmer–consumer communication</li>
              <li>Builds trust through transparency and traceability</li>
              <li>Encourages repeat purchases via satisfaction</li>
            </ul>
          </div>

          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h4>⚙️ Efficiency & Sustainability</h4>
            <ul className="system-list">
              <li>Reduces waste with better inventory management</li>
              <li>Promotes local, ethical, and sustainable farming</li>
              <li>Improves overall food system resilience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposedSystemSection;
