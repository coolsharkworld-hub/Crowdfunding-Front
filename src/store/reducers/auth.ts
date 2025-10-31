// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// ** Types Import
import { InitialState, User } from 'src/types'

const initialUser: User = {
  _id: '',
  wallet: '',
  userName: '',
  email: '',
  avatar: ''
}

const initialState: InitialState = {
  isLoggedIn: false,
  token: '',
  wallet: '',
  user: initialUser
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true
      state.token = action.payload
    },

    logout(state) {
      state.isLoggedIn = false
      state.token = ''
      state.wallet = ''
      state.user = initialUser
    },

    setWallet(state, action) {
      state.wallet = action.payload
    },

    setUserData(state, action) {
      state.user = { ...state.user, ...action.payload }
    }
  }
})

export default auth.reducer

export const { login, logout, setUserData, setWallet } = auth.actions
