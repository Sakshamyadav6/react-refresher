import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [isCard, setIsCard] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value == "credit" || e.target.value == "debit") {
      setIsCard(true);
    } else {
      setIsCard(false);
    }
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} xs={12}>
            <CheckoutSteps step2 />
            <Form>
              <Row>
                <Col md={12} xs={12}>
                  <select className="form-select" onChange={handleChange}>
                    <option value="">Select Payment Method</option>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="stripe">Stripe</option>
                    <option value="cod">Cash On Delivery</option>
                  </select>
                </Col>
              </Row>
              {isCard ? (
                <>
                  <Row>
                    <Col md={6} xs={12}>
                      <Form.Control
                        type="number"
                        className="mt-2"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                      />
                    </Col>
                    <Col md={6} xs={12}>
                      <Form.Control
                        type="name"
                        className="mt-2"
                        placeholder="Enter Full Name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} xs={12}>
                      <Form.Control className="mt-2" placeholder="CVV" />
                    </Col>
                  </Row>
                </>
              ) : (
                <></>
              )}
              <Row>
                <Col xs={12}>
                  <Button
                    variant="info"
                    className="w-25 m-1"
                    onClick={() => {
                      console.log(isCard);
                      navigate('/order/placeorder')
                    }}
                  >
                    Next
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-25 m-1"
                    onClick={() => {
                      navigate("/order/shipping");
                    }}
                  >
                    Back
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

export default Payment;
