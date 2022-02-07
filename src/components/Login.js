import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { useAuth } from "../context/Auth";
import loginURL from "../services/ApiREST";
import axios from "axios";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isError, setIsError] = useState();
  const [pass, setPass] = useState("");
  const [enabled, setEnabled] = useState(true);
  const { setAuthTokens } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !pass) {
      swal("Error", "Debe llenar todos los campos", "error");
      return;
    }

    setEnabled(false);

    let url = loginURL;
    let email = username;
    let password = pass;
    axios
      .post(url, { email, password })
      .then((response) => {
        if (response.status === 200) {
          setIsError(false);
          setAuthTokens(response.data.token);
          navigate("/");
          //return <Navigate to="/" />;
          //localStorage.setItem("Token", response.data.token);
        } else {
          setIsError(true);
          swal("Error", "Credenciales invalidas", "error");
        }
      })
      .catch((error) => {
        setEnabled(true);
        setIsError(true);
        swal("Error", "Credenciales invalidas", "error");
      });

    setUsername("");
    setPass("");
  };

  return (
    <div className="container login">
      <React.Fragment>
        <Form>
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
                  disabled={!enabled}
                  onClick={onSubmit}
                >
                  Login
                </Button>
              </Form.Group>
            </Row>
          </Col>
        </Form>
      </React.Fragment>
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
