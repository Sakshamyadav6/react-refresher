import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3 }) => {
  return (
    <>
      <Nav className="justify-content-center mt-2">
        <Nav.Item>
          {step1 ? (
            <Nav.Link
              href={"/order/shipping"}
              className="btn btn-light text-dark"
            >
              Shipping
            </Nav.Link>
          ) : (
            <Nav.Link disabled>Shipping</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step2 ? (
            <Nav.Link
              href={"/order/payment"}
              className="btn btn-light text-dark"
            >
              Payment
            </Nav.Link>
          ) : (
            <Nav.Link disabled>Payment</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step3 ? (
            <Nav.Link
              href={"/order/placeorder"}
              className="btn btn-light text-dark"
            >
              Place Order
            </Nav.Link>
          ) : (
            <Nav.Link disabled>Place Order</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </>
  );
};

export default CheckoutSteps;
