import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrder = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} xs={12}>
            <CheckoutSteps step3 />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceOrder;
