import React from "react";
import { Container } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";

const Payment = () => {
  return (
    <>
      <Container>
        <CheckoutSteps step2 />
      </Container>
    </>
  );
};

export default Payment;
