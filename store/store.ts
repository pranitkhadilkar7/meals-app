import { configureStore } from '@reduxjs/toolkit'
import { favouriteReducer } from '../screens/favourites/favourite-slice'

export const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
