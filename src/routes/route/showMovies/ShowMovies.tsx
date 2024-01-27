import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../reducer/fetch/data/fetchData";
import { FetchDataState } from "../../../reducer/fetch/data/interface";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import "./showMovies.css";

interface GenreProps {}

const Genre: FunctionComponent<GenreProps> = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
  const movies = useSelector(
    (state: { fetchData: FetchDataState }) => state.fetchData.data?.results
  );
  const urlBaseImg = useSelector(
    (state: { fetchData: FetchDataState }) => state.fetchData.urlBaseImg
  );

  let { page } = useParams();
  console.log(page);
  useEffect(() => {
    dispatch(fetchData({}));
    return () => {};
  }, [dispatch]);

  return (
    <div className="Cards">
      <Container className="d-flex flex-wrap justify-content-center">
        {movies?.map((movie) =>
          movie.media_type === "person" ? (
            <></>
          ) : (
            <div className="ms-3 py-3 d-flex" key={movie.id}>
              <Col>
                <Card className="card">
                  <Link to={"test"}>
                    <Card.Img
                      variant="top"
                      className={
                        movie.poster_path === null ? "imageDefault" : ""
                      }
                      src={urlBaseImg + movie.poster_path}
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
                    <div></div>
                  )}
                  <Card.Body>
                    <Card.Title>{movie.title ?? movie.name} </Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item
                      className={
                        movie.overview !== "" && movie.overview !== undefined
                          ? ""
                          : "descriptionVoid"
                      }
                    >
                      {movie.overview !== "" && movie.overview !== undefined
                        ? movie.overview
                        : "Não há descrição"}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </div>
          )
        )}
      </Container>
      ;
    </div>
  );
};

export default Genre;
