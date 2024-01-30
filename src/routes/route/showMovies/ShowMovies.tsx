import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectState } from "../../../reducer/fetch/data/fetchData";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import "./showMovies.css";
import Navegation from "../../../components/navegation/Navegation";
import { arrayGenre } from "../../../utils/genre/arrayGenre";
import Cards from "../../../components/cards/Cards";


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
      <Cards results={results} urlBaseImg={urlBaseImg}/>
      <Navegation
        currentPageString={page}
        lastPage={total_pages}
        urlLocation={urlLocation}
      />
    </div>
  );
};

export default Genre;
