import { createSlice } from "@reduxjs/toolkit"

const cartOpenInitState = {
  cartOpen: false
}

export const cartOpenSlice = createSlice(
  {
    name: 'category',
    initialState: cartOpenInitState,
    reducers: {
      cartOpen: (state, { payload }) => {
        state.cartOpen = payload
      },
    },
  },
)

export const { cartOpen } = cartOpenSlice.actions

export default cartOpenSlice.reducer