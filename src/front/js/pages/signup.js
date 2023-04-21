import React, { useState } from "react";
import { Form, FormControl, FormGroup, Col, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();
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
    axios
      .post("https://3001-cristoferap-localmarket-1d8i3g5peuz.ws-us95.gitpod.io/api/register", { email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error.response.data);
      });
      navigate("/login")

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form onSubmit={handleRegister}>
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

}