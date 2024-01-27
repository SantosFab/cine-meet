import "./header.css";
import { Nav, Navbar, Form, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue } from "../../reducer/fetch/search/fetchSearch";
import { FetchSearchState } from "../../reducer/fetch/search/interface";
import { arrayGenre } from "../../utils/genre/arrayGenre";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const inputValue: string = useSelector(
    (state: FetchSearchState) => state.search
  );
  const dispatch = useDispatch();

  return (
    <Navbar expand="xl" className="header" bg="dark" variant="dark">
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
              <Link to={`/${genre[0]}`} key={genre[0]}>
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
};

export default Header;
