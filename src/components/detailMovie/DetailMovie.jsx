import "./detailMovie.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchDetail } from "../../reducer/API/fetch/fetchDetail";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row, Image } from "react-bootstrap";

function DetailMovie() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.fetchDetail.data) || {};
  const urlBaseImg = useSelector((state) => state.fetchDetail.urlBaseImg);

  useEffect(() => {
    dispatch(fetchDetail(movieId));
  }, [dispatch, movieId]);

  function listItems(array) {
    return array?.map((companie, index) => {
      return index === array.length - 1 ? companie.name : `${companie.name} | `;
    });
  }

  function hasData(str, data) {
    return data !== "" ? (
      <>
        <strong>{str}:</strong> {data}
      </>
    ) : (
      ""
    );
  }

  return (
    <div className="DetailMovie">
      <Container >
      <Col>
        <Row className="mx-3 py-3">
          <Col xs="auto">
            <Image src={`${urlBaseImg}${movie.poster_path}`} thumbnail />
          </Col>
          <Col className="description">
              <Col>
                <strong>Descrição</strong>
              </Col>
              <Col>{hasData("Título no Brasil", movie.title)}</Col>
              <Col>{hasData("Título original", movie.original_title)}</Col>
              <Col>{hasData("Língua original", movie.original_language)}</Col>
              <Col>{hasData("Gênero", listItems(movie.genres))}</Col>
              <Col>{hasData("Slogan", movie.tagline)}</Col>
              <Col>
                {hasData("Produtoras", listItems(movie.production_companies))}
              </Col>
              <Col>
                {hasData(
                  "Países Produtores",
                  listItems(movie.production_countries)
                )}
              </Col>
            <Col className="pt-5">{hasData("Sinopse", movie.overview)}</Col>
          </Col>
        </Row>
      </Col>
    </Container>
    </div>
  );
}

export default DetailMovie;
