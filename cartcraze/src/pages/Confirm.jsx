import React, { useEffect } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa";
import jsPdf from "jspdf";
import { useSelector } from "react-redux";

const Confirm = () => {
  const data = useSelector((state) => state.order);
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const doc = new jsPdf();
    let y = 10;
    doc.text("Order Details", 100, y);
    y += 10;

    const userDetails = [
      `Name: ${user.firstName} ${user.lastName}`,
      `Email: ${user.email}`,
      "Shipping Address",
      `Street Address: ${data.shippingAddress.address}`,
      `Building: ${data.shippingAddress.building}`,
      `City: ${data.shippingAddress.city}`,
      `Country: ${data.shippingAddress.country}`,
      `Payment Method: ${data.paymentMethod}`,
    ];
    userDetails.forEach((text) => {
      doc.text(text, 10, y);
      y += 10;
    });
    if (data.paymentMethod === "credit" || data.paymentMethod === "debit") {
      const cardDetails = [
        `Card Name: ${data.cardDetails.name}`,
        `Card Number: ${data.cardDetails.number}`,
      ];
      cardDetails.forEach((card) => {
        doc.text(card, 10, y);
        y += 10;
      });
    } else {
    }

    data.cart.products.forEach((order, index) => {
      doc.text(
        `${index + 1}. ${order.title} - ${order.price}`,
        10,
        y + index * 25
      );
      const imgHeight = 20;
      const imgWidth = 20;
      doc.addImage(
        order.thumbnail,
        "PNG",
        10,
        y + index * 25,
        imgWidth,
        imgHeight
      );
    });
    doc.save("order-details.pdf");
  }, []);
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
