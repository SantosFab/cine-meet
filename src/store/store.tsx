import { configureStore } from "@reduxjs/toolkit";

import fetchSearchReducer from "../reducer/fetch/fetchSearch";
import fetchDataReducer from "../reducer/fetch/fetchData";

export default configureStore({
  reducer: {
    fetchSearch: fetchSearchReducer,
    fetchData: fetchDataReducer,
  },
});
