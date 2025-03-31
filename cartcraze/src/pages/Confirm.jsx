import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa";

const Confirm = () => {
  return (
    <Container className="d-flex vh-100! justify-content-center mt-5">
      <Card
        className="shadow-lg p-4 text-center"
        style={{ maxWidth: "500px", borderRadius: "15px" }}
      >
        <Card.Body>
          <FaShippingFast size={50} className="text-success mb-3" />
          <h2 className="text-danger fw-bold">🎉 Congratulations! ❤️</h2>
          <h4 className="text-primary">Your Order is on the Way 🚚</h4>
          <h5 className="text-muted">
            Estimated Delivery: <strong>Tuesday</strong>
          </h5>
          <Button variant="success" className="mt-3">
            <a href="#" className="text-white text-decoration-none">
              Track Your Order
            </a>
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Confirm;
