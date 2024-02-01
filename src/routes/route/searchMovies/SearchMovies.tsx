import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStateSearch,
  fetchSearch,
} from "../../../reducer/fetch/search/fetchSearch";
import { useParams } from "react-router-dom";
import Cards from "../../../components/cards/Cards";
import Navegation from "../../../components/navegation/Navegation";
import './searchMovies.css'

interface SearchMoviesProps {}

const SearchMovies: FunctionComponent<SearchMoviesProps> = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();

  const searchState = useSelector(selectStateSearch);
  const urlBaseImg = searchState.urlBaseImg;
  const { results, total_pages } = searchState.data || {
    results: [],
    total_pages: 1,
  };

  const { query, page } = useParams();
  const url = `SearchMovies/${query}`;

  useEffect(() => {
    dispatch(fetchSearch({ query: query as string, page: page }));
    return () => {};
  }, [dispatch, query, page]);

  return results.length !== 0 ? (
    <div className="Search">
      <Cards results={results} urlBaseImg={urlBaseImg} />
      <Navegation
        lastPage={total_pages}
        currentPageString={page}
        urlLocation={url}
      />
    </div>
  ) : (
    <div className="searchVoid d-flex justify-content-center align-items-center fs-2">
      Nada foi encontrado com: {query}
    </div>
  );
};

export default SearchMovies;
