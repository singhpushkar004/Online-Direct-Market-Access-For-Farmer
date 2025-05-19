import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark animated-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-bold text-white" to="#home">
          🌾 ODMA for Farmers
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/introduction">Introduction</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/purpose">Purpose</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/objectives">Objectives</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sing Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
