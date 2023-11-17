import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../features/search'

export default configureStore({
  reducer: {
    input: inputReducer,
  },
})