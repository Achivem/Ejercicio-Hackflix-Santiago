import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function SleepNavbar() {
  return (
    <>
      <Navbar bg="Primary" fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="/assets/moon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Sleepflix
          </Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Busqueda</Nav.Link>
              <NavDropdown title="Ver más" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Recomendaciones</NavDropdown.Item>
                <NavDropdown.Item href="#">Sobre Nosotros</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Bootstrap</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default SleepNavbar;
