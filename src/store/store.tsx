import { configureStore } from "@reduxjs/toolkit";

import fetchSearchReducer from "../reducer/fetch/fetchSearch";

export default configureStore({
  reducer: {
    fetchSearch: fetchSearchReducer,
  },
});
