import { NavLink } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
import Logo from '../assets/logo.png';

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="/home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
            Recetas faciles!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="ml-5">
                Home
              </Nav.Link>
              <NavDropdown title="Recetas" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Vegana">
                  Recetas Veganas
                </NavDropdown.Item>
                <NavDropdown.Item href="/Pasta">
                  Recetas Pasta
                </NavDropdown.Item>
                <NavDropdown.Item href="/Carnes">
                  Recetas con Carne
                </NavDropdown.Item>
                <NavDropdown.Item href="/Gourmet">
                  Recetas Gourmet
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Rank">Recetas mas votadas</Nav.Link>

              <Nav.Link href="/about">
                Contacto
              </Nav.Link>
              

            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" size="sm" active>
                <NavLink to="/addrecipe" className="link">
                  Nueva!
                </NavLink>
              </Button>{" "}
            <Button variant="light" size="sm" active>
              <NavLink to="/panel" className="link">
                Panel
              </NavLink>
            </Button>{" "}
            <Button variant="light" size="sm" active>
              <NavLink to="/login" className="link">
                Iniciar sesion
              </NavLink>
            </Button>{" "}
            <Button  variant="light" size="sm" active>
              <NavLink to="/form" className="link">
                Registrarse
              </NavLink>
            </Button>
            {/* <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
