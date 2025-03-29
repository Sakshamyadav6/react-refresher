import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <CheckoutSteps step1 />
            <Form>
              <Row>
                <Col md={6} className="mt-1">
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Street Address"
                  />
                </Col>
                <Col md={6} className="mt-1">
                  <Form.Control
                    type="text"
                    name="building"
                    placeholder="Building"
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={6} className="mt-1">
                  <Form.Control type="text" name="city" placeholder="City" />
                </Col>
                <Col md={6} className="mt-1">
                  <Form.Control
                    type="text"
                    name="country"
                    placeholder="Country"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="mt-2 w-25"
                    variant="info"
                    onClick={() => {
                      navigate("/order/payment");
                    }}
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shipping;
