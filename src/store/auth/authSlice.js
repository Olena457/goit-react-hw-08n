import { createSlice } from '@reduxjs/toolkit';
import {
  logOutOperation,
  loginOperation,
  registerOperation,
  refreshOperation,
} from './operationsAuth.js';

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.loading = false;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: null,
    isLoggedIn: false,
    loading: false,
    error: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerOperation.pending, handlePending)
      .addCase(registerOperation.fulfilled, handleFulfilled)
      .addCase(registerOperation.rejected, handleRejected)

      .addCase(loginOperation.pending, handlePending)
      .addCase(loginOperation.fulfilled, handleFulfilled)
      .addCase(loginOperation.rejected, handleRejected)

      .addCase(logOutOperation.pending, handlePending)
      .addCase(logOutOperation.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logOutOperation.rejected, handleRejected)

      .addCase(refreshOperation.pending, state => {
        state.isRefreshing = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshOperation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshOperation.rejected, handleRejected);
  },
});
export const authReducer = authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import {
//   logOutOperation,
//   loginOperation,
//   registerOperation,
//   refreshOperation,
// } from './operationsAuth.js';

// const handlePending = state => {
//   state.loading = true;
//   state.error = false;
// };

// const handleFulfilled = (state, action) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
//   state.loading = false;
//   state.error = false;
//   state.expiresAt = Date.now() + action.payload.expiresIn * 1000;
// }

// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {
//       name: '',
//       email: '',
//     },
//     token: null,
//     isLoggedIn: false,
//     loading: false,
//     error: false,
//     isRefreshing: false,

//   },
//   extraReducers: builder => {
//     builder
//       .addCase(registerOperation.pending, handlePending)
//       .addCase(registerOperation.fulfilled, handleFulfilled)
//       .addCase(registerOperation.rejected, handleRejected)

//       .addCase(loginOperation.pending, handlePending)
//       .addCase(loginOperation.fulfilled, handleFulfilled)
//       .addCase(loginOperation.rejected, handleRejected)

//       .addCase(logOutOperation.pending, handlePending)
//       .addCase(logOutOperation.fulfilled, state => {
//         state.user = { name: '', email: '' };
//         state.token = null;
//         state.isLoggedIn = false;
//         state.loading = false;
//         state.error = null;
//         state.expiresAt = null;
//       })
//       .addCase(logOutOperation.rejected, handleRejected)

//       .addCase(refreshOperation.pending, state => {
//         state.isRefreshing = true;
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(refreshOperation.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.loading = false;
//         state.isRefreshing = false;
//         state.error = null;
//         state.expiresAt = Date.now() + action.payload.expiresIn * 1000;
//       })
//       .addCase(refreshOperation.rejected, handleRejected);
//   },
// });

// export const authReducer = authSlice.reducer;
