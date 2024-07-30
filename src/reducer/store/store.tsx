import { configureStore } from "@reduxjs/toolkit";

import fetchDataReducer from "../fetch/mediaByGenre/fetchMediaByGenre";
import fetchDetailReducer from "../fetch/detail/fetchDetail";
import fetchSearchReducer from "../fetch/search/fetchSearch";

export default configureStore({
  reducer: {
    fetchData: fetchDataReducer,
    fetchDetail: fetchDetailReducer,
    fetchSearch: fetchSearchReducer,
  },
});
