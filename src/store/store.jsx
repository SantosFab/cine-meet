import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../reducer/search'
import fetchMoviesReducer from '../reducer/API/fetch/fetchMovies'
import genreReducer from '../reducer/API/genreDefault'
import fetchDetailReducer from '../reducer/API/fetch/fetchDetail'

export default configureStore({
  reducer: {
    input: inputReducer,
    fetchMovies: fetchMoviesReducer,
    fetchDetail: fetchDetailReducer,
    genre: genreReducer,
  },
})