import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-gradient py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Connect With Us</h5>
            <ul className="footer-social">
              <li><a href="https://facebook.com" className="footer-social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="https://twitter.com" className="footer-social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="https://linkedin.com" className="footer-social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="https://instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt"></i> Post-Graduate College, Ghazipur</li>
              <li><i className="fas fa-phone-alt"></i> +91 123 456 7890</li>
              <li><i className="fas fa-envelope"></i> contact@odma.com</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="footer-copy">© 2025 Online Direct Market Access for Farmers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
