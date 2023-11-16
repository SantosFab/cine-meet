import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="Header" bg="dark" variant="dark">
      <Container className="Container">
        <Navbar.Brand href="#home">CineMeet</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="Text-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;