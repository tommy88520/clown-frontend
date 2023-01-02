import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const initialState = {
  logIn: false,
  logInLoading: false,
  userData: {}
}
export const logIn = createAsyncThunk('user/logIn', async (user) => {
  try {
    const { data } = await userRequest.post("/login", user)
    Swal.fire({
      title: '登入成功',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    localStorage.setItem('clownToken', JSON.stringify(data.access_token))
    window.location.assign(`${process.env.REACT_APP_BASE_URL}`)
    return Promise.resolve(data);
  } catch (e) {
    console.log(e);
    Swal.fire({
      title: '帳號或密碼錯誤',
      text: '建議再試一次',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
    return Promise.reject(e);
  }
})

export const getUserInfo = createAsyncThunk('user/getUserInfo', async (user) => {
  try {
    const { data } = await userRequest.get("/user/profile", {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('clownToken'))}` }
    })
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }

})

export const signUp =  async (user) => {
    await userRequest.post("/user/signUp", user)
    .then((response) => {
      Swal.fire({
        title: '註冊成功',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }).catch(error => {
      if (error.response.data.error === '帳號已經存在'){
        Swal.fire({
          title: '帳號已經重複',
          text: '建議再試一次',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      } else {
        Swal.fire({
          title: '註冊失敗',
          text: '建議再試一次',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
      
    });
}
export const userSlice = createSlice(
  {
    name: 'user',
    initialState,
    reducers: {
      userLogIn: (state) => {
        const userData = JSON.parse(localStorage.getItem('clownToken'))
        if (userData) {
          state.logIn = true
        }
      },
      signOut: (state, { payload }) => {
        state.logIn = payload
        localStorage.removeItem('clownToken');
      }
    },
    extraReducers: {
      [logIn.fulfilled](state, { payload }) {
        state.logInLoading = true;

        // state.logIn = true
        // state.userData = payload.data
      },
      [logIn.rejected](state, error) {
        console.log(error);
      },
      [logIn.pending](state) {
        state.logInLoading = false
      },
      [getUserInfo.fulfilled](state, { payload }) {
        if (payload === 'token錯誤' || payload === '非會員') {
          return state
        } else {
          localStorage.setItem('clownToken', JSON.stringify(payload.token))
          console.log('payload', payload);
          state.userData = payload
          state.logIn = true
        }
      },
      [getUserInfo.rejected](state, error) {
        console.log(error);
      },
      [getUserInfo.pending](state) {
        state.logInLoading = false
      },
    }
  },
)

export const { signOut, userLogIn } = userSlice.actions

export default userSlice.reducer