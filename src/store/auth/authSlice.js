import { createSlice } from '@reduxjs/toolkit';
import {
  logOutOperation,
  loginOperation,
  registerOperation,
  currentOperation,
} from './operationsAuth.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerOperation.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginOperation.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutOperation.fulfilled, state => {
        state.user = {
          name: '',
          email: '',
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentOperation.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(currentOperation.rejected, state => {
        state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;