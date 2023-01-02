// import { createContext, useState, useReducer } from 'react'

// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null
// })


// export const USER_ACTION_TYPE = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) => {
//   const { type, payload } = action
//   console.log( payload);
//   switch (type) {
//     case USER_ACTION_TYPE.SET_CURRENT_USER:
//       return {
//         ...state,
//         ...payload
//       }
//     default:
//       throw new Error(`is unHandle ${type}`)
//   }
//   // return
// }

// const INITIAL_STATE = {
//   currentUser: null
// }

// const signAction

// export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(false)
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
//   const { currentUser } = state
//   const setCurrentUser = (user) => {
//     dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: { currentUser: user } })
//   }
//   const value = { currentUser, setCurrentUser }

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }