import "./cards.css";
import { Container, Card, ListGroup, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import urlStr from "../../utils/moviesUrl";

function Cards(props) {
  const movies = props.movies;
  const urlBaseImg = props.urlBaseImg;
  return (
    <div className="Cards">
      <Container className="d-flex flex-wrap justify-content-center">
        {movies?.map((movie) => (
          <div className="ms-3 py-3 d-flex" key={movie.id}>
            <Col>
              <Card className="card">
                <Link to={{ pathname: urlStr(movie.title), state: "movie" }}>
                  <Card.Img
                    variant="top"
                    src={urlBaseImg + movie.poster_path}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item
                    className={movie.overview !== "" ? "" : "descriptionVoid"}
                  >
                    {movie.overview !== ""
                      ? movie.overview
                      : "Não há descrição"}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Cards;
