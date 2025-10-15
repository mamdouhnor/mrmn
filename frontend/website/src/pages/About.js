import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About MRMNSALT</h1>
          <p className="subtitle">Your Trusted Partner in Salt Brokerage</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <div className="divider"></div>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p>
                Founded with a vision to bridge the gap between salt producers and industries worldwide, MRMNSALT has grown to become a leading name in the salt brokerage industry. Our journey began with a simple mission: to provide high-quality salt products through reliable and efficient supply chain solutions.
              </p>
              <p>
                Over the years, we've built strong relationships with salt producers and industrial clients across the globe, earning a reputation for integrity, quality, and exceptional service.
              </p>
            </div>
            <div className="story-image">
              <img src="/images/about/salt-harvesting.jpg" alt="Salt Harvesting" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <div className="divider"></div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Quality</h3>
              <p>We are committed to delivering only the highest quality salt products.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Partnership</h3>
              <p>We build long-term relationships based on trust and mutual success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We continuously seek better ways to serve our clients and improve our processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <div className="divider"></div>
            <p className="section-subtitle">Meet the experts behind MRMNSALT</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team/ceo.jpg" alt="CEO" />
              </div>
              <h3>Mohamed Hafez</h3>
              <p className="position">Sales Chief</p>
              <p className="bio">With extensive experience in the salt industry, Mohamed leads our sales team with expertise and dedication.</p>
              <p className="contact">
                <i className="fas fa-phone"></i> +1 (916) 507-7566
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team/operations.jpg" alt="Operations Manager" />
              </div>
              <h3>Operations Team</h3>
              <p className="position">Logistics & Distribution</p>
              <p className="bio">Our dedicated operations team ensures smooth logistics and timely delivery of your salt orders.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team/customer-service.jpg" alt="Customer Service" />
              </div>
              <h3>Customer Service</h3>
              <p className="position">Support Team</p>
              <p className="bio">Our friendly support team is always ready to assist you with any inquiries or concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Partner With Us?</h2>
          <p>Join our growing list of satisfied clients and experience the MRMNSALT difference.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/products" className="btn btn-outline">View Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
