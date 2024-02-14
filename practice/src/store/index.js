import { configureStore } from '@reduxjs/toolkit'
import Counter_slice from './slices/Counter_slice'
import User_data_slice from './slices/User_data_slice'
import theme_slice from './slices/theme_slice'

 const store = configureStore({
  reducer: {
    counter:Counter_slice,
    user_data:User_data_slice,
    theme:theme_slice
  },
})

export {store}