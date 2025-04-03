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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCart } from "../slice/orderSlice";
import { errorToast } from "../services/toastify.service";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.order.cart);

  const getCart = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL + "/carts/1");
      console.log(response);
      setCart(response.data);
      console.log(cartData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckOut = () => {
    try {
      // dispatch(addCart(cart));
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
                  </tr>
                </thead>

                {cartData.map((cartProd) => {
                  return (
                    <>
                      <tbody key={cartProd.id}>
                        <tr>
                          <td>
                            <Image src={cartProd.thummbnail} height={100} />
                          </td>
                          <td>{cartProd.title}</td>
                          <td>{cartProd.qty}</td>
                          <td>${cartProd.price}</td>
                          <td>${(cartProd.price * cartProd.qty).toFixed(1)}</td>
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
                    {/* <Col>{cart.totalQuantity}</Col> */}
                    <Col>
                      {cartData.reduce(
                        (acc, prod) => acc + parseInt(prod.qty),
                        0
                      )}{" "}
                      items
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total Products</Col>
                    <Col>{cartData.length}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total Amount</Col>
                    <Col>
                      <span className="text-danger">
                        $
                        {cartData
                          .reduce((acc, prod) => acc + prod.price * prod.qty, 0)
                          .toFixed(1)}
                      </span>
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
