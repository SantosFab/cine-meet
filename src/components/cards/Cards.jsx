import "./cards.css";
import { Container, Card, ListGroup, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import urlStr from "../../utils/moviesUrl";
import imageDefault from "../../assets/images/imageDefault.jpg";

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
                <Link
                  to={{
                    pathname: urlStr(movie.title ?? movie.name, movie.id),
                  }}
                >
                  <Card.Img
                    variant="top"
                    className={movie.poster_path === null ? "imageDefault" : ""}
                    src={
                      movie.poster_path !== null && movie.poster_path !== undefined
                        ? urlBaseImg + movie.poster_path
                        : imageDefault
                    }
                    alt={
                      movie.poster_path !== null
                        ? `Poster do ${movie.title}`
                        : "Imagem de Alexa do Pixabay"
                    }
                  />
                </Link>
                {movie.poster_path === null ? (
                  <div className="authorsLicense">
                    Image by{" "}
                    <a href="https://pixabay.com/users/alexas_fotos-686414/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=821993">
                      Alexa
                    </a>{" "}
                    from{" "}
                    <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=821993">
                      Pixabay
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                <Card.Body>
                  <Card.Title>{movie.title ?? movie.name} </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item
                    className={movie.overview !== "" && movie.overview !== undefined ? "" : "descriptionVoid"}
                  >
                    {movie.overview !== "" && movie.overview !== undefined
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
