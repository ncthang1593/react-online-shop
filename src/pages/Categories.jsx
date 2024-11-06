import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container } from 'react-bootstrap';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Clothing' },
  { id: 3, name: 'Home Appliances' },
  { id: 4, name: 'Books' },
  { id: 5, name: 'Toys' },
];

const Categories = () => {
  return (
    <Container>
      <h2>Categories</h2>
      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item key={category.id}>
            {/* Link to the products page filtered by category */}
            <Link to={`/products?category=${category.name}`}>
              {category.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Categories;