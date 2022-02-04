import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ onLogin }) => {
  return (
    <div className="container login">
      <Form>
        <Col>
          <Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email@example.com"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Password"></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Button
                className="login-button"
                variant="secondary"
                type="submit"
                onClick={onLogin}
              >
                Login
              </Button>
            </Form.Group>
          </Row>
        </Col>
      </Form>
    </div>
  );
};

export default Login;
