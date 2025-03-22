import React from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { isLoggedIn, username } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark">
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
              {isLoggedIn ? <></> : <>Login</>}
            </Nav.Link>

            {isLoggedIn ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle variant="info">{username}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <i className="fa-solid fa-user"></i> Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="/cart">
                      <i className="fa-solid fa-cart-shopping"></i> Cart
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa-solid fa-gear"></i> Settings
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <></>
            )}

            {/* <Button onClick={handle}> click</Button> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
