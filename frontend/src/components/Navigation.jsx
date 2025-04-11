import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="light" className="py-3">
      <Container>
        {/* Brand (optional) */}
        {/* <Navbar.Brand href="#">Plumbero</Navbar.Brand> */}

        <Navbar.Toggle aria-controls="main-navbar" className="border-0">
          <i className="fa-solid fa-bars text-primary fs-4"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto text-center text-uppercase fw-semibold">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;