import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";

const Shipping = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <CheckoutSteps step1 />
            <Form>
              <Form.Control type="text" />
              <Form.Control type="text" />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shipping;
