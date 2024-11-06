import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// Mock data for products (you can replace this with actual data fetching logic)
const products = [
  {
    id: 1,
    name: 'Laptop',
    description: 'A powerful laptop for all your needs.',
    price: '$999',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Smartphone',
    description: 'A smart smartphone with great features.',
    price: '$699',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    name: 'Headphones',
    description: 'Noise-cancelling over-ear headphones.',
    price: '$199',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    name: 'Smartwatch',
    description: 'A smartwatch with fitness tracking capabilities.',
    price: '$299',
    image: 'https://via.placeholder.com/300',
  },
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((product) => product.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <h2>Product not found</h2>; // Handle case where product is not found
  }

  return (
    <Container>
      <Row className="my-5">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;