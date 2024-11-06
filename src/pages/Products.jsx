import React, { useContext, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./../components/Product";
import SearchBar from "./../components/SearchBar";
import { ShoppingStore } from "../store/ShoppingCartProvider";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { products } = useContext(ShoppingStore);
  const [searchParams] = useSearchParams();
  const paramValueCategory = searchParams.get("category");

  // Filter products based on search term
  const filteredProducts = products
    .filter((product) => {
      return paramValueCategory ? product.category === paramValueCategory : product;
    })
    .filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <Container className="mt-3">
      <h2>Products</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
