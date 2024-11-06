import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const initialCartItems = [
  {
    id: 1,
    name: 'Laptop',
    price: 999,
    quantity: 1,
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 699,
    quantity: 2,
    image: 'https://via.placeholder.com/100',
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/payment'); // Navigate to Payment page
  };

  return (
    <Container>
      <h2>Your Shopping Cart</h2>
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
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                {item.name}
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  style={{ width: '60px' }}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row className="my-4">
        <Col md={8}></Col>
        <Col md={4}>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          {/* Update button to navigate to payment page */}
          <Button variant="success" size="lg" onClick={handleCheckout}>Proceed to Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;