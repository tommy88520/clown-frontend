import { createSlice } from "@reduxjs/toolkit"

const cartInitState = {
  cart: [],
  cartLoading: true,
}

export const cartSlice = createSlice(
  {
    name: 'cart',
    initialState: cartInitState,
    reducers: {
      getCartData: (state) => {
        const cartData = JSON.parse(localStorage.getItem('clownCart'))
        if (!cartData) {
          state.cart = []
        } else {
          state.cart = cartData
        }
      },
      addCart: (state, { payload }) => {
        if (!state.cart.find(item => item.brand === payload.brand)) {
          state.cart = [...state.cart, { ...payload, quantity: 1 }]
        } else {
          state.cart = state.cart.map(item => {
            if (item.brand === payload.brand) {
              return { ...item, quantity: item.quantity + 1 }
            } else {
              return item
            }
          })
        }
        localStorage.setItem('clownCart', JSON.stringify(state.cart));
      },
      removeCart: (state, { payload }) => {
        if (state.cart.find(item => item.brand === payload.brand)?.quantity === 1) {
          state.cart = state.cart.filter(item => item.brand !== payload.brand)
        } else {
          state.cart = state.cart.map(item => {
            if (item.brand === payload.brand) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
        }
        localStorage.setItem('clownCart', JSON.stringify(state.cart));
      },
      deleteCart: (state, { payload }) => {
        state.cart = state.cart.filter(item => item.brand !== payload.brand)
        localStorage.setItem('clownCart', JSON.stringify(state.cart));
      }
    },
  },

)

export const { addCart, removeCart, deleteCart, getCartData } = cartSlice.actions

export default cartSlice.reducer