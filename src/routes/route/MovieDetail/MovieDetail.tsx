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
import { listItems } from "./script";

interface MovieDetailProps {}

const MovieDetail: FunctionComponent<MovieDetailProps> = () => {
  const dispatch =
    useDispatch<ThunkDispatch<DetailState, DetailParams, Action>>();
  const selectDetailState = useSelector(selectStateDetail);

  const { id } = useParams();

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

  const handleListItems = (str: string, data?: Descriptor[] | string) =>
    listItems({ str, data });

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
              <Col>{handleListItems("Título no Brasil", title)}</Col>
              <Col>{handleListItems("Título original", original_title)}</Col>
              <Col>{handleListItems("Língua original", original_language)}</Col>
              <Col>{handleListItems("Gênero", genres)}</Col>
              <Col>{handleListItems("Slogan", tagline)} </Col>
              <Col>{handleListItems("Produtoras", production_companies)}</Col>
              <Col>
                {handleListItems("Países Produtores", production_countries)}
              </Col>
              <Col className="pt-5">{handleListItems("Sinopse", overview)}</Col>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default MovieDetail;
