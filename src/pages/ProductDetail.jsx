import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ShoppingStore } from "../store/ShoppingCartProvider";
import { actions } from "../store/actions";

const ProductDetail = () => {
  const { products, addItemCart } = useContext(ShoppingStore);
  const { id } = useParams();
  const [count, setCount] = useState(
    products.find((product) => product.id === parseInt(id)).quantity
  );
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    addItemCart({ type: actions.ADD_ITEM, item: { id, quantity: count } });
  };

  useEffect(() => {
    setCount(products.find((product) => product.id === parseInt(id)).quantity);
  }, [products]);

  return (
    <Container>
      <Row className="my-5">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <div>
            <Button
              variant="light"
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </Button>{" "}
            <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              {count}
            </span>
            <Button
              variant="light"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </Button>{" "}
          </div>
          <Button className="mt-2" variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
