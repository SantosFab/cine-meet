import { FunctionComponent } from "react";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageDefault from "../../assets/imageDefault.jpg";
import { TypeOfMedia } from "../../reducer/fetch/detail/interface";
import { ResultItem } from "../../reducer/fetch/commonTypes/interface";
import './cards.css'

interface CardsProps {
  results: ResultItem[] | never[];
  urlBaseImg: string;
  mediaType?: TypeOfMedia;
}

const Cards: FunctionComponent<CardsProps> = ({
  results,
  urlBaseImg,
  mediaType = "movie",
}) => {
  return (
    <Container className="d-flex flex-wrap justify-content-center Cards">
      {results?.map((movie) => (
        <div className="ms-3 py-3 d-flex" key={movie.id}>
          <Col>
            <Card className="card">
              <Link to={`/Detail/${mediaType}/${movie.id}`}>
                <Card.Img
                  variant="top"
                  className={movie.poster_path === null ? "imageDefault" : ""}
                  src={
                    movie.poster_path !== null
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
                  className={movie.overview !== "" ? "" : "descriptionVoid"}
                >
                  {movie.overview !== "" ? movie.overview : "Não há descrição"}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </div>
      ))}
    </Container>
  );
};

export default Cards;
