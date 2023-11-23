import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../reducer/search'
import fetchReducer from '../reducer/fetchMovies'
import genreReducer from '../reducer/genreDefault'

export default configureStore({
  reducer: {
    input: inputReducer,
    fetch: fetchReducer,
    genre: genreReducer,
  },
})