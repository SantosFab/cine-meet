import "./detailMovie.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchDetail } from "../../reducer/fetch/fetchDetail";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row, Image } from "react-bootstrap";
import imageDefault from "../../assets/images/imageDefault.jpg";

function DetailMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.fetchDetail.data) || {};
  const urlBaseImg = useSelector((state) => state.fetchDetail.urlBaseImg);

  useEffect(() => {
    dispatch(fetchDetail({id, }));
  }, [dispatch, id]);

  function listItems(array) {
    return array?.map((companie, index) => {
      return index === array.length - 1 ? companie.name : `${companie.name} | `;
    });
  }

  function hasData(str, data) {
    return data !== "" && data !== undefined && data?.length !== 0 ? (
      <>
        <strong>{str}:</strong> {data}
      </>
    ) : (
      ""
    );
  }

  return (
    <div className="DetailMovie">
      <Container>
        <Col>
          <Row className="mx-3 py-3">
            <Col xs="auto">
              <Image
                className={movie.poster_path === null ? "imageDefault" : ""}
                src={
                  movie.poster_path !== null
                    ? urlBaseImg + movie.poster_path
                    : imageDefault
                }
                thumbnail
                alt={
                  movie.poster_path !== null
                    ? `Poster do ${movie.title}`
                    : "Imagem de Alexa do Pixabay"
                }
              />
              {movie.poster_path !== null ? (
                <></>
              ) : (
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
              )}
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
