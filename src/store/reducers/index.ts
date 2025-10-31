// ** Redux Imports
import { combineReducers } from '@reduxjs/toolkit'

// Auth Imports
import auth from './auth'

const reducer = combineReducers({
  auth
})

export default reducer
