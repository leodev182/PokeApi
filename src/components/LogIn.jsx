import React from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log(datos);
  };

  return (
    <Container className="mt-5 px-5">
      <h2>Regístrate para ser un Maestro PoKemón</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                {...register("name", { required: "Este campo es requerido" })}
              />
              {errors.name && (
                <Alert variant="danger">{errors.name.message}</Alert>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido"
                {...register("lastName", {
                  required: "Este campo es requerido",
                })}
              />
              {errors.lastName && (
                <Alert variant="danger">{errors.lastName.message}</Alert>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu usuario"
                {...register("username", {
                  required: "Este campo es requerido",
                })}
              />
              {errors.username && (
                <Alert variant="danger">{errors.username.message}</Alert>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                {...register("email", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Ingresa un email válido",
                  },
                })}
              />
              {errors.email && (
                <Alert variant="danger">{errors.email.message}</Alert>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register("password", {
                  required: "Este campo es requerido",
                })}
              />
              {errors.password && (
                <Alert variant="danger">{errors.password.message}</Alert>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma tu contraseña"
                {...register("confirmPassword", {
                  required: "Este campo es requerido",
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
              />
              {errors.confirmPassword && (
                <Alert variant="danger">{errors.confirmPassword.message}</Alert>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" style={{ marginTop: "2rem" }}>
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};
