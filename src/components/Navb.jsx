import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cart from '../images/cart.jpeg';

function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" >Apna Pizza Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">{/* Home */ } </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
             {/* About Us */ } 
            </Nav.Link>
          </Nav>
          <div className='d-flex'>
            <h5 className='text-white'>Offers &nbsp; </h5>
            <h5 className='text-white'>Account &nbsp; </h5>
            <img src={cart} alt=""  height={40}/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;