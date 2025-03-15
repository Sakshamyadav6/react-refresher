import React, { useContext, useEffect, useState } from "react";
import {
  Col,
  Container,
  FormControl,
  Image,
  ListGroup,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "./Rating";
import { toast, ToastContainer } from "react-toastify";

const ProdDetail = () => {
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  const handleAddToCart = (product, qty) => {
    const quantity = Number(qty);
    console.log(product, quantity);

    //create new item to add to cart
    const newItem = { ...product, CartQty: quantity };

    //get existing cart from localstorage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    //check if product already exist in the cart(based on product id)
    const exisitngProductIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (exisitngProductIndex > -1) {
      //update quantity if product already exist
      existingCart[exisitngProductIndex].qty += quantity;
    } else {
      //add new prodcut to the cart
      existingCart.push(newItem);
    }
    //store the updated cart in localstorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    navigate("/productcart");
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Image
              src={product?.images?.[0] || "placeholder.jpg"} // ✅ Safe access with fallback image
              alt={product?.title || "No Title"}
              fluid
              className="h-75"
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item className="fs-3 fw-bold">
                {product.title}
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} />
              </ListGroup.Item>

              <ListGroup.Item style={{ textAlign: "justify" }}>
                <span className="fw-bold fs-5">Description:</span>
                <br /> {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col className="fs-3 fw-bold">Price:</Col>
                  <Col className="text-danger fs-3 fw-bold">
                    ${product.price}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="fw-bold fs-6">
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.availabilityStatus}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Quantity</Col>
                  <Col>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                      value={qty}
                    >
                      <option>Select</option>
                      {[...Array(product.stock)].map((_, i) => {
                        return (
                          <option key={i} value={i + 1}>
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
                  variant="info"
                  className="w-100 mt-2"
                  onClick={() => {
                    handleAddToCart(product, qty);
                  }}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item className="fs-5 fw-bold">
                Other Information
              </ListGroup.Item>
              <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
              <ListGroup.Item className="text-capitalize">
                Category: {product.category}
              </ListGroup.Item>
              <ListGroup.Item className="text-capitalize">
                Shipping: {product.shippingInformation}
              </ListGroup.Item>
              <ListGroup.Item>
                Warranty: {product.warrantyInformation}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}> 
            <ListGroup variant="flush">
              <ListGroup.Item className="fs-5 fw-bold">Reviews</ListGroup.Item>
              {product.reviews?.map((review, index) => (
                <>
                  <ListGroup.Item key={index}>
                    <span className="fw-bold">{review.reviewerName}</span>
                    <br />
                    <span className="text-muted">{review.reviewerEmail}</span>
                    <br />
                    <span className="text-danger"> {review.comment}</span>
                    <span>
                      <Rating value={review.rating} />
                    </span>
                  </ListGroup.Item>
                </>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default ProdDetail;
