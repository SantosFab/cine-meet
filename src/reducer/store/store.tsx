import { configureStore } from "@reduxjs/toolkit";

import fetchSearchReducer from "../fetch/search/fetchSearch";
import fetchDataReducer from "../fetch/data/fetchData";
import fetchDetailReducer from "../fetch/detail/fetchDetail";

export default configureStore({
  reducer: {
    fetchSearch: fetchSearchReducer,
    fetchData: fetchDataReducer,
    fetchDetai: fetchDetailReducer,
  },
});
