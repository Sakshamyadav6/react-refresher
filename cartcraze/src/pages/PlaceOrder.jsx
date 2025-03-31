import React, { useEffect } from "react";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const data = useSelector((state) => state.order);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleBuy = (e) => {
    e.preventDefault();
    navigate(`/order/confirmation/success/${user.username}/${data.cart.id}`);
  };
  useEffect(() => {
    console.log(data);
    console.log(user);
  }, []);
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} xs={12} sm={10}>
            <CheckoutSteps step3 />
            <Row>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="list-group-item-success">
                    Personal Details
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Name: {user.firstName} {user.lastName}
                  </ListGroup.Item>
                  <ListGroup.Item className="text-break">
                    Email: {user.email}
                  </ListGroup.Item>
                  <ListGroup.Item>Username: {user.username}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="list-group-item-info">
                    Shipping Address
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Street Address: {data.shippingAddress.address}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Apartment: {data.shippingAddress.building}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    City: {data.shippingAddress.city}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Country: {data.shippingAddress.country}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="list-group-item-warning">
                    Cart
                  </ListGroup.Item>
                  {data.cart.products.map((cartProd) => {
                    return (
                      <>
                        <ListGroup.Item key={cartProd.id}>
                          <Image
                            src={cartProd.thumbnail}
                            height={70}
                            width={100}
                          />
                        </ListGroup.Item>
                        <ListGroup.Item>Title: {cartProd.title}</ListGroup.Item>
                        <ListGroup.Item>
                          Quantity: {cartProd.quantity}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Discount: {cartProd.discountPercentage}%
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Price: ${cartProd.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          After Discount: ${cartProd.discountedTotal}
                        </ListGroup.Item>
                      </>
                    );
                  })}
                </ListGroup>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="list-group-item-danger">
                        Payment Method: {data.paymentMethod}
                      </ListGroup.Item>
                      {data.paymentMethod === "credit" ||
                      data.paymentMethod === "debit" ? (
                        <>
                          <ListGroup.Item>
                            Card Number: {data.cardDetails.number}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Name: {data.cardDetails.name}
                          </ListGroup.Item>
                        </>
                      ) : (
                        <></>
                      )}
                    </ListGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ListGroup className="mt-2 fs-5" variant="flush">
                      <ListGroup.Item className="list-group-item-primary fw-bold">
                        Order Summary
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total:{" "}
                        <span className="text-danger fw-bold">
                          ${data.cart.total}
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total Products {data.cart.totalProducts}
                      </ListGroup.Item>

                      <ListGroup.Item>
                        Total Quantity: {data.cart.totalQuantity}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          className="w-100"
                          variant="info"
                          onClick={handleBuy}
                        >
                          Buy Now
                        </Button>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          className="w-100"
                          variant="secondary"
                          onClick={() => {
                            navigate("/order/payment");
                          }}
                        >
                          Back
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceOrder;
