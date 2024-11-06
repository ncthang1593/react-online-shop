import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      {/* Jumbotron for a welcoming message */}
      <div className="my-5">
        <h1>Welcome to Our E-Commerce Store!</h1>
        <p>
          Discover the best products at unbeatable prices. Shop from a wide range of categories including electronics, clothing, home appliances, and more!
        </p>
        <p>
          <Button variant="primary" as={Link} to="/products">Shop Now</Button>
        </p>
      </div>

      {/* Featured Categories Section */}
      <h2>Featured Categories</h2>
      <Row className="my-4">
        <Col md={4}>
          <div className="category-box">
            <h3>Electronics</h3>
            <p>Explore the latest gadgets and devices.</p>
            <Button variant="outline-primary" as={Link} to="/products?category=Electronics">Browse Electronics</Button>
          </div>
        </Col>

        <Col md={4}>
          <div className="category-box">
            <h3>Clothing</h3>
            <p>Find the latest trends in fashion.</p>
            <Button variant="outline-primary" as={Link} to="/products?category=Clothing">Browse Clothing</Button>
          </div>
        </Col>

        <Col md={4}>
          <div className="category-box">
            <h3>Home Appliances</h3>
            <p>Upgrade your home with our top appliances.</p>
            <Button variant="outline-primary" as={Link} to="/products?category=Home%20Appliances">Browse Home Appliances</Button>
          </div>
        </Col>
      </Row>

      {/* Call-to-action for viewing all products */}
      <div className="text-center my-5">
        <h2>Check Out Our Full Collection!</h2>
        <Button variant="success" size="lg" as={Link} to="/products">View All Products</Button>
      </div>
    </Container>
  );
};

export default Home;