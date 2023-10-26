import { configureStore } from '@reduxjs/toolkit'
import areas from './slices/areasMap/index'

export default configureStore({
  reducer: {
    areas
  }
});