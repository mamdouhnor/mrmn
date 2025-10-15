import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MRMN SALT</h3>
          <p>Your trusted partner in premium salt brokerage services, connecting quality producers with businesses worldwide.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><i className="fas fa-envelope"></i> info@mrmnsalt.com</p>
          <p><i className="fas fa-phone"></i> +1 (916) 507-7566</p>
          <p><i className="fas fa-map-marker-alt"></i> 3953 La Honda Way<br />Carmichael, CA 95608</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MRMN SALT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
