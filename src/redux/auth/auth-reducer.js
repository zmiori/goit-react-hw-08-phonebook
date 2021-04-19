import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialUserState = { name: null, email: null };
const userReducer = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => ({ name: null, email: null }),
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const initialTokenState = null;
const tokenReducer = createReducer(initialTokenState, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isLoggedInReducer = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [logoutSuccess]: () => false,
  [getCurrentUserSuccess]: () => true,
});

const isFetchingCurrentUserReduser = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

const authReduser = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn: isLoggedInReducer,
  isFetchingCurrentUser: isFetchingCurrentUserReduser,
});

export default authReduser;
