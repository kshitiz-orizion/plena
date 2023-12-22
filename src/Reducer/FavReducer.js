import { createSlice } from '@reduxjs/toolkit'

export const FavSlice = createSlice({
  name: 'favourites',
  initialState: {
    value: [],
  },
  reducers: {
    addToFav: (state,{payload}) => {
        state.value.push(payload)
    },
    removeFromFav: (state,{payload}) => {
     const index = state.value.findIndex((value) => value.id === payload)   
     const newState = state.value;
     newState.splice(index,1);
     state.value = newState;
    },
  },
})

export const { addToFav, removeFromFav } = FavSlice.actions

export default FavSlice.reducer