import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
                onSubmit={() => {
                  if (location.state?.from) {
                    navigate(location.state.from);
                  }
                }}
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
