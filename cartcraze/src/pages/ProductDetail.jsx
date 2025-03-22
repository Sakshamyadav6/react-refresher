import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  ListGroup,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { successToast } from "../services/toastify.service";
import Rating from "../components/Rating";

const ProductDetail = () => {
  const [prod, setProd] = useState(null);
  const { id } = useParams();
  const [quantiy, setQuantity] = useState(1);
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_URL + `/products/${id}`
      );
      console.log(response);
      setProd(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddtoCart = (prod, quantity) => {
    console.log(prod, quantity);
    successToast(`${prod.title} Added to Cart`);
    navigate("/cart");
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
                  <ListGroup.Item>
                    <Rating value={prod.rating} />
                  </ListGroup.Item>
                  <ListGroup.Item className="fs-4">
                    <span className="fw-bold">Brand</span>: {prod.brand}
                  </ListGroup.Item>
                  <ListGroup.Item className="fs-4">
                    <span className="fw-bold">Category</span>: {prod.category}
                  </ListGroup.Item>
                  <ListGroup.Item className="fs-6 text-justify">
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
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity:</Col>
                      <Col>
                        <Form.Select
                          value={quantiy}
                          onChange={(e) => {
                            setQuantity(e.target.value);
                          }}
                        >
                          <option>Select</option>
                          {[...Array(prod.stock)].map((_, i) => {
                            return (
                              <option value={i + 1} key={i}>
                                {i + 1}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      variant="warning"
                      className="w-100"
                      onClick={() => {
                        handleAddtoCart(prod, quantiy);
                      }}
                    >
                      Add to Cart
                    </Button>
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
