import React from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/loginSlice";
import { successToast } from "../services/toastify.service";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { isLoggedIn, username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    successToast("Logged Out Sucessfully");
    navigate("/");
  };

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
                    <Dropdown.Item href={`/user/profile/${username}`}>
                      <i className="fa-solid fa-user"></i> Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="/cart">
                      <i className="fa-solid fa-cart-shopping"></i> Cart
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa-solid fa-gear"></i> Settings
                    </Dropdown.Item>
                    <Dropdown.Item href={`/admin/${username}`}>
                      <i className="fa-solid fa-person"></i> Admin
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <></>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
