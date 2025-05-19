import React from 'react';


const ObjectivesSection = () => {
  return (
    <section id="objectives" className="objectives-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5 animate__animated animate__fadeInDown">
          Project Objectives
        </h2>

        <div className="row">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <h4>🎯 Economic Objectives</h4>
            <ul className="objectives-list">
              <li>Increase revenue and profitability for farmers</li>
              <li>Reduce costs from traditional channels</li>
              <li>Improve profit margins with fair pricing</li>
            </ul>
          </div>

          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h4>🌐 Market Access & Reach</h4>
            <ul className="objectives-list">
              <li>Expand market reach and access new markets</li>
              <li>Connect with global consumers directly</li>
              <li>Target specific consumer segments</li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <h4>🤝 Consumer Engagement & Trust</h4>
            <ul className="objectives-list">
              <li>Build strong consumer-farmer relationships</li>
              <li>Promote transparency and traceability</li>
              <li>Enhance customer trust and loyalty</li>
            </ul>
          </div>

          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h4>🌱 Efficiency & Sustainability</h4>
            <ul className="objectives-list">
              <li>Improve operational efficiency and reduce waste</li>
              <li>Support sustainable agricultural practices</li>
              <li>Contribute to a resilient food system</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
