// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
// import { Navbar, Nav, Container, NavDropdown, Row, Col, Button } from 'react-bootstrap';
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import universalLogo from "../assets/plumbero-logo.png";

const Header = () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  } 

  return (
    // <header>
    //   <Navbar bg={token ? "primary" : "dark"} variant='dark' expand='lg' collapseOnSelect>
    //     <Container>
          
    //       <Navbar.Brand>MERN Auth</Navbar.Brand>
          
    //       <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //       <Navbar.Collapse id='basic-navbar-nav'>
    //         <Nav className='ms-auto'>
    //           {token ? (
    //             <>
                  
    //                 <Nav.Link to='/profile'>
    //                   <NavDropdown.Item>Welcome {email} </NavDropdown.Item>
    //                 </Nav.Link>
    //                 <Nav.Link onClick={handleLogout}>
    //                   <NavDropdown.Item >
    //                     Logout
    //                   </NavDropdown.Item>
    //                 </Nav.Link>
                  
    //             </>
    //           ) : (
    //             <>
                  
    //                 <Nav.Link href="/login">
    //                   <FaSignInAlt /> Sign In
    //                 </Nav.Link>
                  
                  
    //                 <Nav.Link href="/register">
    //                   <FaSignOutAlt /> Sign Up
    //                 </Nav.Link>
                  
    //             </>
    //           )}
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </header>

    <header className="bg-white py-3 border-bottom">
    <Container>
      <Row className="align-items-center">
        {/* Logo */}
        <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
          <a href="#">
            <img src={universalLogo} alt="Universal logo" style={{ maxWidth: '180px' }} />
          </a>
        </Col>

        {/* Phone + Appointment */}
        <Col xs={12} md={8} className="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-3">
          
          {/* Phone Info */}
          <div className="d-flex align-items-center gap-2">
            <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '36px', height: '36px' }}>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <div className="text-muted small">24/7 EMERGENCY SERVICES</div>
              <div className="fw-bold fs-6">1 (306) 761 0933</div>
            </div>
          </div>

          {/* Appointment Button */}
          <Button variant="warning" className="text-uppercase fw-semibold px-4 py-2 rounded-pill">
            Request an Appointment
          </Button>
          {token ? (
            <>
            <div>
              Welcome {email} 
            </div>
            <a href="javascript:;" onClick={handleLogout}>Logout</a>
            </>
          ) : (
            <>
            </>
          )}
        </Col>
      </Row>
    </Container>
    </header>
  );
};

export default Header;