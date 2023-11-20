import "./header.css";
import {
  Nav,
  Navbar,
  Form,
  Row,
  Col,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { /* useSelector, */ useDispatch } from "react-redux";
import { setInputValue } from "../../reducer/search";

function Header() {
  // const inputValue = useSelector((state) => state.input.value);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="Header" bg="dark" variant="dark">
      <Container>
        <Link to="/home" className="navbar-brand ms-3">
          CineMeet
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="Text-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home">Home</Link>
            <Link to="/layout">Link</Link>
          </Nav>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Pesquisar"
                  onChange={(e) => dispatch(setInputValue(e.target.value))}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" className="me-3">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
