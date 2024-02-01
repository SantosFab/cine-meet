import { FunctionComponent, useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import imageDefault from "../../../assets/imageDefault.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import {
  Descriptor,
  DetailParams,
  DetailState,
} from "../../../reducer/fetch/detail/interface";
import {
  fetchDetail,
  selectStateDetail,
} from "../../../reducer/fetch/detail/fetchDetail";
import "./movieDetail.css";
import { useParams } from "react-router-dom";
import { urlBaseImg } from "../../../utils/env/env";

interface MovieDetailProps {}

const MovieDetail: FunctionComponent<MovieDetailProps> = () => {
  const dispatch =
    useDispatch<ThunkDispatch<DetailState, DetailParams, Action>>();
  const selectDetailState = useSelector(selectStateDetail);

  const { id } = useParams();
  console.log(selectDetailState.data);

  const {
    poster_path,
    title,
    original_title,
    original_language,
    genres,
    overview,
    production_companies,
    production_countries,
    tagline,
  } = selectDetailState?.data || {};

  function hasData(str: string, data: string | string[] | undefined) {
    return data !== "" && data !== undefined && data?.length !== 0 ? (
      <>
        <strong>{str}:</strong> {data}
      </>
    ) : (
      ""
    );
  }

  function listItems(array: Descriptor[] | undefined): string[] | undefined {
    return array?.map((companie, index) => {
      return index === array.length - 1 ? companie.name : `${companie.name} | `;
    });
  }

  useEffect(() => {
    dispatch(fetchDetail({ id: id }));

    return () => {};
  }, [dispatch, id]);

  return (
    <div className="DetailMovie">
      <Container>
        <Col>
          <Row className="mx-3 py-3">
            <Col xs="auto">
              <Image
                className={poster_path === null ? "imageDefault" : ""}
                src={
                  poster_path !== null && poster_path !== undefined
                    ? urlBaseImg + poster_path
                    : imageDefault
                }
                thumbnail
                alt={
                  poster_path !== null
                    ? `Poster do ${title}`
                    : "Imagem de Alexa do Pixabay"
                }
              />
              {poster_path !== null ? (
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
              <Col>{hasData("Título no Brasil", title)}</Col>
              <Col>{hasData("Título original", original_title)}</Col>
              <Col>{hasData("Língua original", original_language)}</Col>
              <Col>{hasData("Gênero", listItems(genres))}</Col>
              <Col>{hasData("Slogan", tagline)}</Col>
              <Col>
                {hasData("Produtoras", listItems(production_companies))}
              </Col>
              <Col>
                {hasData("Países Produtores", listItems(production_countries))}
              </Col>
              <Col className="pt-5">{hasData("Sinopse", overview)}</Col>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default MovieDetail;
