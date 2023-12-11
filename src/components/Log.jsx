import { Container, Form, Button, Alert } from "react-bootstrap";

export const Log = () => {
  return (
    <Container className="mt-5">
      <div>
        <h2>Iniciar Sesión</h2>
        <Form className="px-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
            <Form.Text className="text-muted">
              No compartiremos tus datos con terceros.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="*****" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mantenerme conectado" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </Container>
  );
};
