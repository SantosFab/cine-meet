import { FunctionComponent } from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { urlBaseImg } from "../../utils/env/env";
import ImageDefault from "../imageDefault/ImageDefault";
import imageDefault from "../../assets/imageDefault.jpg";

interface FilmeCardProps {
  id: number;
  media_type?: string;
  poster_path: string | null;
  overview: string;
  title: string;
  name: string;
  mediaType: string;
}

const FilmeCard: FunctionComponent<FilmeCardProps> = ({
  id,
  media_type,
  name,
  overview,
  poster_path,
  title,
  mediaType,
}) => {
  return (
    <div className="ms-3 py-3 d-flex" key={id}>
      <Col>
        <Card className="card">
          <Link to={`/Detail/${media_type ?? mediaType}/${id}`}>
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
          {poster_path === null && <ImageDefault />}
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
  );
};

export default FilmeCard;
