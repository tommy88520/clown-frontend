export const selectCartOpen = (state) => state.cartOpen.cartOpen
export const selectCart = (state) => state.cart.cart
export const selectCartCount = (state) => {
  if (!state.cart.cart) return state.cart.cart
  return state.cart.cart.reduce((total, cartItem) => total + cartItem.quantity, 0)
}
export const selectCartTotal = (state) => {
  if (!state.cart.cart) return state.cart.cart
  return state.cart.cart.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
}