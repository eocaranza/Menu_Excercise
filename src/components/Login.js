import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !pass) {
      alert("Please fill the required fields");
      return;
    }

    onLogin(username, pass);

    setUsername("");
    setPass("");
  };

  return (
    <div className="container login">
      <Form onSubmit={onSubmit}>
        <Col>
          <Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Button
                className="login-button"
                variant="secondary"
                type="submit"
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

/*
onSubmit={() => {
  if (location.state?.from) {
    navigate(location.state.from);
  }
}}
*/
export default Login;
