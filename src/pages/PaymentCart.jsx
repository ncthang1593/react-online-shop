import { useState, useContext } from "react";
import { Button, Col, Offcanvas, Row, Table } from "react-bootstrap";
import { ShoppingStore } from "./../store/ShoppingCartProvider";
import { actions } from "./../store/actions";
const initialCartItems = [
  // {
  //   id: 1,
  //   name: "Laptop",
  //   price: 999,
  //   quantity: 1,
  //   image: "https://via.placeholder.com/100",
  // },
  // {
  //   id: 2,
  //   name: "Smartphone",
  //   price: 699,
  //   quantity: 2,
  //   image: "https://via.placeholder.com/100",
  // },
];

function PaymentCart({ show, handleClose }) {
  const { cartItems, removeItemCart, addItemCart } = useContext(ShoppingStore);

  const handleRemoveItem = (id) => {
    removeItemCart({ type: actions.REMOVE_ITEM, item: { id } });
  };

  const handleQuantityChange = (id, newQuantity) => {
    addItemCart({ type: actions.ADD_ITEM, item: { id, quantity: newQuantity } });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/payment"); // Navigate to Payment page
  };
  return (
    <div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="width-offcanvas"
        style={{ width: "33%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: 0,
          }}
        >
          {cartItems.length ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      {item.name}
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="mt-5"
            >
              <h4>No items in your cart.</h4>
            </div>
          )}

          <Row className="my-4">
            <Col>
              <div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Total Price: </h4>
                  <h4>${totalPrice.toFixed(2)}</h4>
                  {/* Update button to navigate to payment page */}
                </div>
                <hr />

                <div>
                  <Button
                    style={{ width: "100%", height: "48px" }}
                    variant="success"
                    size=""
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default PaymentCart;
