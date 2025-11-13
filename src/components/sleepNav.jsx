import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function SleepNavbar({ bgColor = "#0d6efd" }) {
  return (
    <>
      <Navbar fixed="top" expand="lg" style={{ backgroundColor: bgColor }}>
        <Container>
          <Navbar.Brand href="#" style={{ color: "#dcbe76" }} className="fs-5">
            <img
              alt=""
              src="src\assets\moon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Sleepflix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="fs-5">
                Busqueda
              </Nav.Link>
            </Nav>
            <Nav>
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
