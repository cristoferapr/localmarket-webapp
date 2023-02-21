import React, { useState } from 'react';
import { Form, FormControl, FormGroup, Col, Button } from 'react-bootstrap';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, ingrese un correo electrónico y una contraseña válidos');
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Por favor, ingrese un correo electrónico válido con formato email@dominio.com');
      return;
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    // todo implementar validacion y solicitud post
    setError(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <FormGroup>
          <Col sm={10}>
            <FormControl
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={10}>
            <FormControl
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={10}>
            <Button type="submit">Registrarse</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Signup;