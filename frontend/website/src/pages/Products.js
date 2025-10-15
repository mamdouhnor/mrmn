import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

const products = [
  {
    id: 1,
    name: 'Industrial Salt',
    description: 'High-purity salt for industrial applications including water treatment and chemical processing.',
    applications: ['Water Treatment', 'Chemical Processing', 'De-icing'],
    image: 'industrial-salt.jpg'
  },
  {
    id: 2,
    name: 'Food Grade Salt',
    description: 'Premium quality salt for food processing and culinary applications.',
    applications: ['Food Processing', 'Restaurants', 'Retail'],
    image: 'food-grade-salt.jpg'
  },
  {
    id: 3,
    name: 'Sea Salt',
    description: 'Naturally harvested sea salt with rich mineral content.',
    applications: ['Gourmet Cooking', 'Food Industry', 'Health & Wellness'],
    image: 'sea-salt.jpg'
  },
  {
    id: 4,
    name: 'Rock Salt',
    description: 'Natural rock salt for various industrial and commercial uses.',
    applications: ['Water Softening', 'Animal Feed', 'De-icing'],
    image: 'rock-salt.jpg'
  }
];

const Products = () => {
  return (
    <div className="products-page">
      <section className="page-header">
        <h1>Our Products</h1>
        <p>High-quality salt products for various industries</p>
      </section>

      <section className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={`/images/products/${product.image}`} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="applications">
                <h4>Common Applications:</h4>
                <ul>
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="btn btn-primary">Request Quote</Link>
            </div>
          </div>
        ))}
      </section>

      <section className="custom-solutions">
        <h2>Custom Salt Solutions</h2>
        <p>Need a specific type of salt or custom formulation? Our experts can help you find the perfect solution for your business needs.</p>
        <Link to="/contact" className="btn btn-secondary">Contact Our Specialists</Link>
      </section>
    </div>
  );
};

export default Products;
