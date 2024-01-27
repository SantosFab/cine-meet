import { configureStore } from "@reduxjs/toolkit";

import fetchSearchReducer from "../reducer/fetch/search/fetchSearch";
import fetchDataReducer from "../reducer/fetch/data/fetchData";

export default configureStore({
  reducer: {
    fetchSearch: fetchSearchReducer,
    fetchData: fetchDataReducer,
  },
});
