import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import validator from 'validator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderForm = ({ cart,price }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate()

  const enviarCorreo = async (event) => {
    event.preventDefault();

    if (!validator.isEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!validator.isAlpha(name.replace(/\s/g, ''))) {
      alert('Please enter a name with only letters');
      return;
    }

    if (!validator.isLength(phone, { min: 8, max: 8 })) {
      alert('Please enter a phone number with 8 digits');
      return;
    }

    if (validator.isEmpty(address)) {
      alert('Please enter an address');
      return;
    }

    const formData = { email, name, phone, address, comment, cart, price };

    try {
      // enviar solo los datos del formulario que se han completado
      await axios.post('https://3001-cristoferap-localmarket-1d8i3g5peuz.ws-us95.gitpod.io/api/sendmail', formData);
  
      // Muestre un mensaje al usuario indicando que el correo electrónico se envió correctamente
      alert('El correo electrónico se envió correctamente');
      navigate('/')
    } catch (error) {
      // Muestre un mensaje al usuario indicando que se produjo un error al enviar el correo electrónico
      alert('Se produjo un error al enviar el correo electrónico');
      console.error(error);
    }

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={enviarCorreo}>
        Submit
      </Button>
    </Form>
  );
};

export default OrderForm;