import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const product = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    console.log(product);
  }, []);

  const handleCheckOut = (e) => {
    e.preventDefault();
     
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <h2>Product Cart({product.length})</h2>
            {product.map((prod, index) => {
              return (
                <ListGroup key={index} variant="flush">
                  <Row>
                    <Col md={2}>
                      <Image src={prod.images[0]} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link
                        to={`/product/${prod.id}`}
                        className="text-decoration-none text-dark"
                      >
                        <h6>{prod.title}</h6>
                      </Link>
                    </Col>
                    <Col md={2} className="text-danger fw-bold">
                      ${prod.price}
                    </Col>
                    <Col md={2}>Quantity: {prod.CartQty}</Col>
                  </Row>
                  <Col md={2}>
                    ${prod.price + "*" + prod.CartQty}=
                    <span className="text-danger">
                      {""}${prod.price * prod.CartQty}
                    </span>
                  </Col>
                  <Col md={2}>
                    {" "}
                    <Button variant="danger">
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </ListGroup>
              );
            })}
          </Col>
          <Col md={4}>
            <Card className="mt-3">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    SubTotal (
                    {product.reduce((acc, qty) => acc + qty.CartQty, 0)}) Item
                  </h3>
                  <h4 className="fs-5 text-muted">
                    Total Price:
                    <span className="text-danger fw-bold">
                      {" "}
                      $
                      {product.reduce(
                        (acc, prod) => acc + prod.CartQty * prod.price,
                        0
                      )}
                    </span>
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="warning" onClick={handleCheckOut}>
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductCart;
