import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { errorToast, successToast } from "../services/toastify.service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(email, userName, password);

    try {
      const response = await axios(
        import.meta.env.VITE_SERVER_URL + "/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: { email: email, username: userName, password: password },
          withCredentials: true,
        }
      );
      setEmail("");
      setUserName("");
      setPassword("");
      console.log(response);
      successToast(response.data.message);
      navigate("/product");
    } catch (error) {
      console.log(error.message);
      errorToast(error.message);
    }
  };
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="w-100"
          style={{ maxWidth: "500px", marginLeft: "100px" }}
        >
          <h1>Signup</h1>
          <Row>
            <Col md={8}>
              <FloatingLabel
                label="Enter Email"
                controlId="floatingEmail"
                className="mt-2 w-100"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </FloatingLabel>
              <FloatingLabel
                label="Enter UserName"
                controlId="floatingUserName"
                className="mt-2 w-100"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter UserName"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  value={userName}
                />
              </FloatingLabel>
              <FloatingLabel
                label="Enter Password"
                controlId="floatingPassword"
                className="mt-2 w-100"
              >
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </FloatingLabel>
              <Button
                variant="warning"
                className="mt-2 w-100"
                onClick={handleRegister}
              >
                Register
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Signup;
