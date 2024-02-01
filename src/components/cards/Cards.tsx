import { Link } from "react-router-dom";
import { TypeOfMedia } from "../../reducer/fetch/detail/interface";
import { FunctionComponent } from "react";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import { ResultItem } from "../../reducer/fetch/commonTypes/interface";
import React from "react";
import imageDefault from "../../assets/imageDefault.jpg";
import ImageDefault from "../imageDefault/ImageDefault";
import "./cards.css";

interface CardsProps {
  results: ResultItem[] | never[];
  urlBaseImg: string;
  mediaType?: TypeOfMedia;
}

const Cards: FunctionComponent<CardsProps> = ({
  results,
  urlBaseImg,
  mediaType = "movie",
}) => (
  <Container className="d-flex flex-wrap justify-content-start Cards">
    {results?.map((movie) =>
      movie.media_type === "person" ? (
        <React.Fragment key={movie.id} />
      ) : (
        <div className="ms-3 py-3 d-flex" key={movie.id}>
          <Col>
            <Card className="card">
              <Link to={`/Detail/${movie.media_type ?? mediaType}/${movie.id}`}>
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
              {movie.poster_path === null && <ImageDefault />}
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
      )
    )}
  </Container>
);

export default Cards;
