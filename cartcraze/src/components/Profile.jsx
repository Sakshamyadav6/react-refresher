import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { image, firstName, lastName, username, email, gender } = useSelector(
    (state) => state.auth
  );
  return (
    <>
      <Container className="border mt-3 w-50">
        <Row>
          <Col md={4}>
            <Image src={image} />
          </Col>
          <Col md={4}>
            <Row>
              <Col>
                <span className="fw-bold">Username</span>: {username}
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="fw-bold">Name</span>: {firstName} {lastName}
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="fw-bold">Email:</span>
                {email}
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="fw-bold">Gender</span>: {gender}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 border">
        <Row>
          <Col md={4}>
            <h3 className="text-center">Total Orders</h3>
          </Col>
          <Col md={4}>
            <h3 className="text-center">Total Returns</h3>
          </Col>
          <Col md={4}>
            <h3 className="text-center">Total Cancelled</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3 className="text-center">12</h3>
          </Col>
          <Col md={4}>
            <h3 className="text-center">5</h3>
          </Col>
          <Col md={4}>
            <h3 className="text-center">3</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
