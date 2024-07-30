import { FunctionComponent } from "react";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import { ResultItem } from "../../reducer/fetch/commonTypes/interface";
import { Link } from "react-router-dom";
import { urlBaseImg } from "../../utils/env/env";
import imageDefault from "../../assets/imageDefault.jpg";
import Copyright from "../copyRight/CopyRight";
import "./mediaCards.css";

interface MediaCardsProps {
  results: ResultItem[] | never[];
}

const MediaCards: FunctionComponent<MediaCardsProps> = ({ results }) => (
  <Container className="d-flex flex-wrap justify-content-center MediaCards">
    {results?.map(({ id, overview, poster_path, title }: ResultItem) => (
      <div className="ms-3 py-3 d-flex FilmCard" key={id}>
        <Col>
          <Card>
            <Link to={`/Detail/${id}`}>
              <Card.Img
                variant="top"
                className={poster_path === null ? "imageDefault" : ""}
                src={
                  poster_path !== null ? urlBaseImg + poster_path : imageDefault
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
              <Card.Title>{title} </Card.Title>
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
    ))}
  </Container>
);

export default MediaCards;
