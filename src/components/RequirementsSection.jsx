import React from 'react';

const RequirementSection = () => {
  return (
    <section id="project-requirements" className="project-requirements-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5 animate__animated animate__fadeInDown">
          Project Requirements
        </h2>

        <div className="row">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <h4>🔧 Functional Requirements</h4>
            <ul className="custom-list">
              <li>Farmers can register and log in to the platform.</li>
              <li>Buyers can browse available farm produce with details.</li>
              <li>Farmers can add, update, and delete their produce listings.</li>
              <li>Integrated order placement and tracking system for buyers.</li>
              <li>Secure payment gateway for transaction between farmers and buyers.</li>
              <li>Dashboard for farmers to manage sales and view statistics.</li>
              <li>Buyers can leave reviews and ratings for sellers.</li>
              <li>Admin panel to manage users, products, payments, and support.</li>
            </ul>
          </div>

          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h4>⚙️ Non-Functional Requirements</h4>
            <ul className="custom-list">
              <li>The system should be responsive and accessible on all devices.</li>
              <li>User data must be stored securely with proper encryption.</li>
              <li>Platform should load within 2–3 seconds under normal load.</li>
              <li>System should handle up to 10,000 concurrent users efficiently.</li>
              <li>Availability should be at least 99.5% uptime annually.</li>
              <li>Easy-to-use interface for both technical and non-technical users.</li>
              <li>Scalable architecture for future expansion.</li>
              <li>Compliant with digital transaction standards and data protection laws.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementSection;
