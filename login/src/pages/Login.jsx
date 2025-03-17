import { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
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
            label="Enter Email"
            className="m-1"
          >
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
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
