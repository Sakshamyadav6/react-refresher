import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addShippingAddress } from "../slice/orderSlice";

const Shipping = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [building, setBuilding] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address, building, city, country);
    const data = {
      address: address,
      building: building,
      city: city,
      country: country,
    };
    dispatch(addShippingAddress(data));
    navigate("/order/payment");
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <CheckoutSteps step1 />
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mt-1">
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </Col>
                <Col md={6} className="mt-1">
                  <Form.Control
                    type="text"
                    name="building"
                    placeholder="Building"
                    onChange={(e) => {
                      setBuilding(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={6} className="mt-1">
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </Col>
                <Col md={6} className="mt-1">
                  <Form.Control
                    type="text"
                    name="country"
                    placeholder="Country"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="mt-2 w-25" variant="info" type="submit">
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
