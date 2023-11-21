import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../reducer/search'
import fetchReducer from '../reducer/fetch'
import genreReducer from '../reducer/genreDefault'

export default configureStore({
  reducer: {
    input: inputReducer,
    fetch: fetchReducer,
    genre: genreReducer,
  },
})