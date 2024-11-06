import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './../components/Product';
import SearchBar from './../components/SearchBar';
const Products = () => {
  // Mock data for products
  const products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'A powerful laptop for all your needs.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'A smart smartphone with great features.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'A smartwatch with fitness tracking capabilities.',
      image: 'https://via.placeholder.com/150',
    },
    // Add more products as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h2>Products</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row>
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;