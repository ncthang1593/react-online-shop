import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle payment processing logic
    alert('Payment processed successfully!');
  };

  return (
    <Container className="my-5">
      <h2>Payment Information</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formExpiryDate">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </Form.Group>

        {/* Submit button */}
        <Button variant="primary" type="submit">
          Pay Now
        </Button>
      </Form>
    </Container>
  );
};

export default Payment;