import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="fs-4">
            CartCraze
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/product" className="fs-5">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-light fs-5" href="/">
              Login
            </Nav.Link>
            <Nav.Link className="fs-5">
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
