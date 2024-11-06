import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="searchBar">
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;