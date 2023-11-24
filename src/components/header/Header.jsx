import "./header.css";
import { Nav, Navbar, Form, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue } from "../../reducer/fetch/fetchSearch";
import { movieSearchPath } from "../../utils/moviesUrl";

function Header() {
  const inputValue = useSelector((state) => state.fetchSearch.value);
  const arrayGenre = useSelector((state) => state.genre.arrayGenre);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSearch(event) {
    if (inputValue === "") {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const encodedValue = movieSearchPath(inputValue);
    navigate(encodedValue);
  }

  return (
    <Navbar expand="xl" className="Header" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand ms-3">
          CineMeet
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="Text-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {arrayGenre.map((genre) => (
              <Link to={`/${genre[0]}`} key={genre}>
                {genre[0]}
              </Link>
            ))}
          </Nav>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Pesquisar"
                  onChange={(e) => dispatch(setInputValue(e.target.value))}
                  value={inputValue}
                />
              </Col>
              <Col xs="auto">
                <button
                  type="submit"
                  className="me-3 btn btn-light"
                  onClick={(e) => handleSearch(e)}
                  aria-label="Search"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
