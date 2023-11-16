import "./header.css";
import { Nav, Navbar, Form, Row, Col, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="Header" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="ms-3">CineMeet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " className="Text-white" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
          <Row>
            <Col >
              <Form.Control
                type="text"
                placeholder="Search"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="me-3">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;