import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCart } from "../slice/orderSlice";
import { errorToast } from "../services/toastify.service";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCart = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL + "/carts/1");
      console.log(response);
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckOut = () => {
    try {
      dispatch(addCart(cart));
    } catch (error) {
      errorToast("Cart is Empty");
    }
    navigate("/order/shipping");
  };

  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <Row>
        {cart ? (
          <>
            <Col md={8} xs={12} className="mt-2">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Discounted Total</th>
                  </tr>
                </thead>

                {cart.products.map((cartProd) => {
                  return (
                    <>
                      <tbody key={cartProd.id}>
                        <tr>
                          <td>
                            <Image src={cartProd.thumbnail} height={100} />
                          </td>
                          <td>{cartProd.title}</td>
                          <td>{cartProd.quantity}</td>
                          <td>${cartProd.price}</td>
                          <td>${cartProd.total.toFixed(1)}</td>
                          <td>${cartProd.discountedTotal}</td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </Table>
            </Col>
            <Col md={3} xs={12} className="mt-2">
              <ListGroup className="fw-bold">
                <ListGroup.Item>
                  <Row>
                    <Col>Total Quantity</Col>
                    <Col>{cart.totalQuantity}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total Products</Col>
                    <Col>{cart.totalProducts}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total Amount</Col>
                    <Col>
                      <span className="text-danger">${cart.total}</span>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant="info"
                    className="w-100"
                    onClick={handleCheckOut}
                  >
                    Check Out
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </>
        ) : (
          <>
            <p className="text-center mt-3">
              No Products in cart <Link to="/product">continue shopping</Link>
            </p>
          </>
        )}
      </Row>
    </>
  );
};

export default Cart;
