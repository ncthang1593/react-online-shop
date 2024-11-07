import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ShoppingStore } from "../store/ShoppingCartProvider";
import { actions } from "../store/actions";
import Toastr from "./Toastr";

const ProductDetail = () => {
  const { products, addItemCart } = useContext(ShoppingStore);
  const { id } = useParams();
  const [count, setCount] = useState(
    products.find((product) => product.id === parseInt(id)).quantity
  );
  const [showToastr, setShowToastr] = useState(false);
  const [toastrMessage, setToastrMessage] = useState("");
  const [toastrType, setToastrType] = useState("success");

  const handleShowToastr = (type) => {
    setToastrType(type);
    setToastrMessage(
      type === "success"
        ? "Add to card was successful!"
        : "Something went wrong!"
    );
    setShowToastr(true);
  };

  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    addItemCart({ type: actions.ADD_ITEM, item: { id, quantity: count } });
    if (count) {
      handleShowToastr("success");
    }
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

      <Toastr
        show={showToastr}
        onClose={() => setShowToastr(false)}
        message={toastrMessage}
        type={toastrType}
      />
    </Container>
  );
};

export default ProductDetail;
