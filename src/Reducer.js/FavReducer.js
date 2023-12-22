import { createSlice } from '@reduxjs/toolkit'

export const FavSlice = createSlice({
  name: 'favourites',
  initialState: {
    value: [],
  },
  reducers: {
    addToFav: (item) => {
      state.value = [...state.value, item]
    },
    removeFromFav: (id) => {
     const index = state.value.findIndex((value) => value.id === id)
     const newState = state.value;
     newState.splice(index,1);
     state.value = [...newState];
    },
  },
})

export const { addToFav, removeFromFav } = FavSlice.actions

export default FavSlice.reducer