import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

const name = 'favouriteSlice'

type FavouriteState = {
  mealIds: { [key: string]: boolean }
}

const initialState: FavouriteState = {
  mealIds: {},
}

export const favouriteSlice = createSlice({
  name,
  initialState,
  reducers: {
    addMealToFavourites: (state, action: PayloadAction<string>) => {
      state.mealIds[action.payload] = true
    },
    removeMealFromFavourites: (state, action: PayloadAction<string>) => {
      state.mealIds[action.payload] = false
    },
    toggleMealFromFavourites: (state, action: PayloadAction<string>) => {
      state.mealIds[action.payload] = !!state.mealIds[action.payload]
    },
  },
})

export const {
  addMealToFavourites,
  removeMealFromFavourites,
  toggleMealFromFavourites,
} = favouriteSlice.actions

export const favouriteReducer = favouriteSlice.reducer

export const selectFavourite = (state: RootState) => state.favourite
