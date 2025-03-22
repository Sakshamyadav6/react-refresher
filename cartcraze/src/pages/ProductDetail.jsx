import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [prod, setProd] = useState(null);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL + `/${id}`);
      console.log(response);
      setProd(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Container>
        {prod ? (
          <>
            <Row>
              <Col md={6} xs={12}>
                <Image src={prod.images[0]} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="fs-4 fw-bold">
                    {prod.title}
                  </ListGroup.Item>
                  <ListGroup.Item>{prod.rating}</ListGroup.Item>
                  <ListGroup.Item className="fs-4">
                    <span className="fw-bold">Brand</span>: {prod.brand}
                  </ListGroup.Item>
                  <ListGroup.Item className="fs-4">
                    <span className="fw-bold">Category</span>: {prod.category}
                  </ListGroup.Item>
                  <ListGroup.Item className="fs-6">
                    {prod.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="fs-2 fw-bold text-danger">
                    <Row>
                      <Col>Price</Col>
                      <Col>${prod.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="fs-6 fw-bold">
                    <Row>
                      <Col>Available</Col>
                      <Col>{prod.availabilityStatus}</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </>
        ) : (
          <h3 className="text-center mt-2 text-primary fw-bold fs-1">
            Loading...
          </h3>
        )}
      </Container>
    </>
  );
};

export default ProductDetail;
