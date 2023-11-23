import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../reducer/search'
import fetchMoviesReducer from '../reducer/fetchMovies'
import genreReducer from '../reducer/genreDefault'

export default configureStore({
  reducer: {
    input: inputReducer,
    fetchMovies: fetchMoviesReducer,
    genre: genreReducer,
  },
})