import React from "react";
import { Container } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrder = () => {
  return (
    <>
      <Container>
        <CheckoutSteps step3 />
      </Container>
    </>
  );
};

export default PlaceOrder;
