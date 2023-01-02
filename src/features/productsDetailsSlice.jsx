import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const DetailInitState = {
  products: [],
  productsLoading: true,
}

export const getProductsDetails = createAsyncThunk('category/getProductsDetails',async (params)=>{
  try {
    const data = await userRequest.get(`/category/${params}`);
    // console.log('getProductsDetails',data);
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
})

export const productSlice = createSlice(
  {
    name: 'products',
    initialState: DetailInitState,
    reducers: {},
    extraReducers: {
      [getProductsDetails.fulfilled](state, { payload }) {
        // console.log('getProductsDetails',payload.data);
        state.productsLoading = false;
        state.products = payload.data
      },
      [getProductsDetails.rejected](state, error) {
        console.log(123);
      },
      [getProductsDetails.pending](state) {
        state.productsLoading = true
      }
    }
  },
)

export default productSlice.reducer