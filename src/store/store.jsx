import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../reducer/search'

export default configureStore({
  reducer: {
    input: inputReducer,
  },
})