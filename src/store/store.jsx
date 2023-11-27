import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "../reducer/genreDefault";
import fetchMoviesReducer from "../reducer/fetch/fetchData";
import fetchDetailReducer from "../reducer/fetch/fetchDetail";
import fetchSearchReducer from "../reducer/fetch/fetchSearch";

export default configureStore({
  reducer: {
    genre: genreReducer,
    fetchData: fetchMoviesReducer,
    fetchDetail: fetchDetailReducer,
    fetchSearch: fetchSearchReducer,
  },
});
