import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectState } from "../../../reducer/fetch/data/fetchData";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import "./showMovies.css";
import Navegation from "../../../components/navegation/Navegation";
import { arrayGenre } from "../../../utils/genre/arrayGenre";
import imageDefault from "../../../assets/imageDefault.jpg";

interface GenreProps {}

const Genre: FunctionComponent<GenreProps> = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();

  const urlLocation = decodeURIComponent(useLocation().pathname.split("/")[1]);

  const selectDataState = useSelector(selectState);
  const { total_pages, results } = selectDataState.data || {
    total_pages: 1,
    results: [],
  };
  const urlBaseImg = selectDataState.urlBaseImg;

  let { page } = useParams();

  useEffect(() => {
    const foundGenre = arrayGenre.find((genre) => genre[0] === urlLocation);
    const genre: string | undefined = foundGenre?.[1];

    if (genre) {
      dispatch(fetchData({ genre: genre, page }));
    } else {
      dispatch(fetchData({ isSeries: true, page }));
    }

    return () => {};
  }, [dispatch, page, urlLocation]);

  return (
    <div className="Cards">
      <Container className="d-flex flex-wrap justify-content-center">
        {results?.map((movie) => (
          <div className="ms-3 py-3 d-flex" key={movie.id}>
            <Col>
              <Card className="card">
                <Link to={"test"}>
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
      <Navegation
        currentPageString={page}
        lastPage={total_pages}
        urlLocation={urlLocation}
      />
    </div>
  );
};

export default Genre;
