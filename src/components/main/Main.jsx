import "./main.css";
import { Container, Card, ListGroup, Col } from "react-bootstrap";

function Main(props) {
  const movies = props.movies;
  const urlBaseImg = props.urlBaseImg;
  return (
    <div className="Main">
      <Container className="d-flex flex-wrap justify-content-center">
        {movies?.map((e) => (
          <div className="ms-3 py-3 d-flex" key={e.id}>
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={urlBaseImg + e.poster_path} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className={e.overview !== "" ? '' : 'descriptionVoid'}>
                    {e.overview !== "" ? e.overview : "Não há descrição"}
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

export default Main;