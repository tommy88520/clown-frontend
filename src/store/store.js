import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import categoryReducer from '../features/categorySlice'
import getProductsDetailsReducer from '../features/productsDetailsSlice'
import cartOpenReducer from '../features/cartOpenSlice'
import cartReducer from '../features/cartSlice'
import thunk from 'redux-thunk'
export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    products: getProductsDetailsReducer,
    cartOpen:  cartOpenReducer,
    cart: cartReducer
  },
  middleware: [thunk]
})

