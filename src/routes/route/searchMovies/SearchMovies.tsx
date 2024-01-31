import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStateSearch,
  fetchSearch,
} from "../../../reducer/fetch/search/fetchSearch";
import { useLocation } from "react-router-dom";
import Cards from "../../../components/cards/Cards";

interface SearchMoviesProps {}

const SearchMovies: FunctionComponent<SearchMoviesProps> = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();

  const searchState = useSelector(selectStateSearch);
  const urlBaseImg = searchState.urlBaseImg;
  const { results } = searchState.data || { results: [] };

  const { state } = useLocation();
  useEffect(() => {
    dispatch(fetchSearch({ query: state as string, page: 1 }));
    return () => {};
  }, [dispatch, state]);

  return (
    <>
      <Cards results={results} urlBaseImg={urlBaseImg} />
    </>
  );
};

export default SearchMovies;
