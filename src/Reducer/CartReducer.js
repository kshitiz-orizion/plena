import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state,{payload}) => {
        console.log(payload,"==payload===");
        // const item = {...payload.item, count: payload.count}
        // state.value.push(item)
    },
    removeFromCart: (state,{payload}) => {
     const index = state.value.findIndex((value) => value.id === payload)   
     const newState = state.value;
     newState.splice(index,1);
     state.value = newState;
    },
  },
})

export const { addToCart, removeFromCart } = CartSlice.actions

export default CartSlice.reducer