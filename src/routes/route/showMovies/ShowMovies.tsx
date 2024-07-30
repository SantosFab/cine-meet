import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMediaByGenre,
  selectStateMediaByGenre,
} from "../../../reducer/fetch/mediaByGenre/fetchMediaByGenre";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useLocation, useParams } from "react-router-dom";
import Navegation from "../../../components/navegation/Navegation";
import { arrayGenre } from "../../../utils/genre/arrayGenre";
import MediaCards from "../../../components/mediaCards/MediaCards";
import "./showMovies.css";
import {
  MediaByGenreParams,
  MediaByGenreState,
} from "../../../reducer/fetch/mediaByGenre/interface";

interface GenreProps {}

const Genre: FunctionComponent<GenreProps> = () => {
  const dispatch =
    useDispatch<ThunkDispatch<MediaByGenreState, MediaByGenreParams, Action>>();

  const urlLocation = decodeURIComponent(useLocation().pathname.split("/")[1]);

  const mediaByGenreState = useSelector(selectStateMediaByGenre);
  const { total_pages, results } = mediaByGenreState.data || {
    total_pages: 1,
    results: [],
  };

  const { page } = useParams();

  useEffect(() => {
    const foundGenre = arrayGenre.find((genre) => genre[0] === urlLocation);
    const genre: string | undefined = foundGenre?.[1];

    dispatch(fetchMediaByGenre({ genre: genre, page }));

    return () => {};
  }, [dispatch, page, urlLocation]);

  return (
    <div className="ShowMovies">
      <MediaCards results={results} />
      <Navegation
        currentPageString={page}
        lastPage={total_pages}
        urlLocation={urlLocation}
      />
    </div>
  );
};

export default Genre;
