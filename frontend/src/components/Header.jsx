// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


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
    <header>
      <Navbar bg={token ? "primary" : "dark"} variant='dark' expand='lg' collapseOnSelect>
        <Container>
          
          <Navbar.Brand>MERN Auth</Navbar.Brand>
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {token ? (
                <>
                  
                    <Nav.Link to='/profile'>
                      <NavDropdown.Item>Welcome {email} </NavDropdown.Item>
                    </Nav.Link>
                    <Nav.Link onClick={handleLogout}>
                      <NavDropdown.Item >
                        Logout
                      </NavDropdown.Item>
                    </Nav.Link>
                  
                </>
              ) : (
                <>
                  
                    <Nav.Link href="/login">
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  
                  
                    <Nav.Link href="/register">
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;