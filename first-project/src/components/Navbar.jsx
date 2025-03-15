import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ShopApp</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
