import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Badge } from "react-bootstrap";
import PaymentCart from "../pages/PaymentCart";
import { ShoppingStore } from "../store/ShoppingCartProvider";

const AppNavBar = () => {
  const { cartItems } = useContext(ShoppingStore);
  const [show, setShow] = useState(false);
  const [totalCart, setTotalCart] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTotalCart(
      cartItems.reduce((acc, curr) => {
        return (acc += curr.quantity);
      }, 0)
    );
  }, [cartItems]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Navbar.Brand as={Link} to="/">
        E-Commerce
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/categories">
            Categories
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          {/* <Nav.Link as={Link} onClick={handleShow}>
            View Cart
          </Nav.Link> */}
        </Nav>

        <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            onClick={handleShow}
            style={{ position: "relative" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <Badge
              pill
              bg="danger"
              style={{
                position: "absolute",
                top: 0,
                right: -5,
                fontSize: "0.75em",
              }}
            >
              {totalCart}
            </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <PaymentCart show={show} handleClose={handleClose}></PaymentCart>
    </Navbar>
  );
};

export default AppNavBar;
