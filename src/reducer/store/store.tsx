import { configureStore } from "@reduxjs/toolkit";

import fetchDataReducer from "../fetch/mediasByGenre/fetchmediaByGenre";
import fetchDetailReducer from "../fetch/detail/fetchDetail";

export default configureStore({
  reducer: {
    fetchData: fetchDataReducer,
    fetchDetai: fetchDetailReducer,
  },
});
