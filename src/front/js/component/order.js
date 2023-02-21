import React from 'react';
import { Form, Button } from 'react-bootstrap';

const OrderForm = () => {
  return (
    <Form style={{ maxWidth: 400, margin: 'auto', padding : 20, }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" />
      </Form.Group>

      <Form.Group controlId="formBasicComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default OrderForm;