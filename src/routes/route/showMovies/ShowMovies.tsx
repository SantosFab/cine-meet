import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMediaByGenre,
  selectStateMediaByGenre,
} from "../../../reducer/fetch/mediasByGenre/fetchMediaByGenre";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useLocation, useParams } from "react-router-dom";
import Navegation from "../../../components/navegation/Navegation";
import { arrayGenre } from "../../../utils/genre/arrayGenre";
import Cards from "../../../components/cards/Cards";
import "./showMovies.css";
import {
  MediaByGenreParams,
  MediaByGenreState,
} from "../../../reducer/fetch/mediasByGenre/interface";

interface GenreProps {}

const Genre: FunctionComponent<GenreProps> = () => {
  const dispatch =
    useDispatch<ThunkDispatch<MediaByGenreState, MediaByGenreParams, Action>>();

  const urlLocation = decodeURIComponent(useLocation().pathname.split("/")[1]);

  const selectDataState = useSelector(selectStateMediaByGenre);
  const { total_pages, results } = selectDataState.data || {
    total_pages: 1,
    results: [],
  };
  const urlBaseImg = selectDataState.urlBaseImg;

  const { page } = useParams();

  useEffect(() => {
    const foundGenre = arrayGenre.find((genre) => genre[0] === urlLocation);
    const genre: string | undefined = foundGenre?.[1];

    if (urlLocation === "Séries") {
      dispatch(fetchMediaByGenre({ isSeries: true, page }));
    } else {
      dispatch(fetchMediaByGenre({ genre: genre, page }));
    }
    return () => {};
  }, [dispatch, page, urlLocation]);

  return (
    <div className="ShowMovies">
      <Cards
        results={results}
        urlBaseImg={urlBaseImg}
        mediaType={urlLocation === "Séries" ? "tv" : "movie"}
      />
      <Navegation
        currentPageString={page}
        lastPage={total_pages}
        urlLocation={urlLocation}
      />
    </div>
  );
};

export default Genre;
