import { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { default as axios } from "axios";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios("http://localhost:3100/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { username: username, password },
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="mt-5 text-center fw-bold">Login</h1>
      <Container className="m-auto w-25">
        <Row>
          <Col md={4} xs={12}></Col>
        </Row>
        <Form className="mt-4" onSubmit={handleLogin}>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Username"
            className="m-1"
          >
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Enter Passwrod"
            className="m-1"
          >
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FloatingLabel>
          <Button className="w-100 mt-3" variant="warning" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Login;
