import React, { useState } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { errorToast, successToast } from "../services/toastify.service";
import { useDispatch } from "react-redux";
import { login } from "../slice/loginSlice";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(userName, password);

    try {
      const response = await axios(import.meta.env.VITE_SERVER_URL + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { username: userName, password: password },
        withCredentials: true,
      });
      console.log(response);
      if (response.data.accessToken) {
        const data = {
          accessToken: response.data.accessToken,
          email: response.data.email,
          username: response.data.username,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          gender: response.data.gender,
          image: response.data.image,
          refreshToken: response.data.refreshToken,
        };
        dispatch(login(data));
        successToast(`Welcome ${response.data.username}`);
        navigate("/product");
      } else {
        errorToast(response.data.message);
      }
      setUserName("");
      setPassword("");
    } catch (error) {
      console.log(error);
      errorToast(error.message);
    }
  };
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center  vh-100">
        <div
          className="w-100"
          style={{ maxWidth: "600px", marginLeft: "350px" }}
        >
          <h1 className="mt-2">Login</h1>

          <Row>
            <Col md={6}>
              <FloatingLabel
                controlId="floatingUsername"
                label="Enter username"
                className="mt-2"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter UserName"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  value={userName}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Enter Password"
                className="mt-2"
              >
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                />
              </FloatingLabel>
              <Button
                variant="warning"
                className="mt-2 w-100"
                onClick={handleLogin}
              >
                Login
              </Button>
              <span className="m-1">
                Don't have an account? <Link to="/signup">Register</Link>
              </span>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Login;
