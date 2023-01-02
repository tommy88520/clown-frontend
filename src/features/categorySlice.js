import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: { "Content-Type": "application/json", },
});

const categoryInitState = {
  data: {
    title: '',
    imageUrl: '',
    route: '',
    products: []
  },
  categoryLoading: true,
}

export const getCategory = createAsyncThunk('category/getCategory', async () => {
  try {
    const data = await userRequest.get("/category");
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
})
export const categorySlice = createSlice(
  {
    name: 'category',
    initialState: categoryInitState,
    reducers: {},
    extraReducers: {
      [getCategory.fulfilled](state, { payload }) {
        state.categoryLoading = false;
        state.data = payload.data
      },
      [getCategory.rejected](state, error) {
      },
      [getCategory.pending](state) {
        state.categoryLoading = true
      }
    }
  },

)

export default categorySlice.reducer