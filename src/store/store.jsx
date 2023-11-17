import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../reducer/search'
import fetchReducer from '../reducer/fetch'

export default configureStore({
  reducer: {
    input: inputReducer,
    fetch: fetchReducer,
  },
})