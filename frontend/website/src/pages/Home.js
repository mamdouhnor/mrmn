import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Salt Brokerage Services</h1>
          <p>Connecting quality salt producers with businesses worldwide</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn btn-primary">Our Products</Link>
            <Link to="/contact" className="btn btn-secondary">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose MRMNSALT?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Network</h3>
            <p>Extensive connections with salt producers and buyers worldwide</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚖️</div>
            <h3>Quality Assurance</h3>
            <p>Rigorous quality control for all our salt products</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Reliable Logistics</h3>
            <p>Efficient shipping and handling solutions</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss your salt requirements</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>
    </div>
  );
};

export default Home;
