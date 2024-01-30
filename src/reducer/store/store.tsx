import { configureStore } from "@reduxjs/toolkit";

import fetchDataReducer from "../fetch/mediasByGenre/fetchMediaByGenre";
import fetchDetailReducer from "../fetch/detail/fetchDetail";

export default configureStore({
  reducer: {
    fetchData: fetchDataReducer,
    fetchDetail: fetchDetailReducer,
  },
});
