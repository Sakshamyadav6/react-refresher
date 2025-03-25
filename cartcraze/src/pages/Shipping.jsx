import React from "react";
import { Container } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";

const Shipping = () => {
  return (
    <>
      <Container>
        <CheckoutSteps step1 />
      </Container>
    </>
  );
};

export default Shipping;
