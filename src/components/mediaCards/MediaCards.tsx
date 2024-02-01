import { TypeOfMedia } from "../../reducer/fetch/detail/interface";
import { FunctionComponent } from "react";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import { ResultItem } from "../../reducer/fetch/commonTypes/interface";
import { Link } from "react-router-dom";
import { urlBaseImg } from "../../utils/env/env";
import imageDefault from "../../assets/imageDefault.jpg";
import Copyright from "../copyright/Copyright";
import "./mediaCards.css";

interface MediaCardsProps {
  results: ResultItem[] | never[];

  mediaType?: TypeOfMedia;
}

const MediaCards: FunctionComponent<MediaCardsProps> = ({
  results,
  mediaType = "movie",
}) => (
  <Container className="d-flex flex-wrap justify-content-start MediaCards">
    {results?.map(
      ({ id, media_type, name, overview, poster_path, title }: ResultItem) => (
        <div className="ms-3 py-3 d-flex FilmCard" key={id}>
          <Col>
            <Card>
              <Link to={`/Detail/${media_type ?? mediaType}/${id}`}>
                <Card.Img
                  variant="top"
                  className={poster_path === null ? "imageDefault" : ""}
                  src={
                    poster_path !== null
                      ? urlBaseImg + poster_path
                      : imageDefault
                  }
                  alt={
                    poster_path !== null
                      ? `Poster do ${title}`
                      : "Imagem de Alexa do Pixabay"
                  }
                />
              </Link>
              {poster_path === null && <Copyright />}
              <Card.Body>
                <Card.Title>{title ?? name} </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item
                  className={overview !== "" ? "" : "descriptionVoid"}
                >
                  {overview !== "" ? overview : "Não há descrição"}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </div>
      )
    )}
  </Container>
);

export default MediaCards;
