// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://auth-backend-lesson.herokuapp.com/api/';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/api';
// axios.defaults.baseURL =
//   'https://cors-anywhere.herokuapp.com/https://connections-api.herokuapp.com';

// const setHeaderToken = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const registerOperation = createAsyncThunk(
//   'auth/register',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/signup', userData);
//       setHeaderToken(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const loginOperation = createAsyncThunk(
//   'auth/login',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/login', userData);
//       setHeaderToken(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const logOutOperation = createAsyncThunk(
//   'auth/logout', // Виправлено назву
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post('/users/logout'); // Виправлено шлях
//       clearHeaderToken();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const refreshOperation = createAsyncThunk(
//   // Виправлено назву
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       if (!auth.token) {
//         return rejectWithValue('No token found');
//       }
//       setHeaderToken(auth.token);
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       clearAuthHeader();
//       return rejectWithValue(error.message);
//     }
//   }
// );
// // import axios from 'axios';
// // import { createAsyncThunk } from '@reduxjs/toolkit';

// // axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// // const setAuthHeader = token => {
// //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// // };

// // const clearAuthHeader = () => {
// //   axios.defaults.headers.common.Authorization = '';
// // };

// // export const registerOperation = createAsyncThunk(
// //   'auth/register',
// //    async (userData, { rejectWithValue })
// //    => {
// //     try {
// //       const resp = await axios.post('/users/signup', newUser);
// //       setAuthHeader(resp.data.token);
// //       return resp.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const loginOperation = createAsyncThunk(
// //   'auth/login',
// //   async (credentials, thunkAPI) => {
// //     try {
// //       const resp = await axios.post('/users/login', credentials);
// //       setAuthHeader(resp.data.token);
// //       return resp.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const logOutOperation = createAsyncThunk(
// //   'auth/logout',
// //   async (_, thunkAPI) => {
// //     try {
// //       await axios.post('/users/logout');
// //       clearAuthHeader();
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const refreshOperation = createAsyncThunk(
// //   'auth/refresh',
// //   async (_, thunkAPI) => {
// //     const reduxState = thunkAPI.getState();
// //     const persistedToken = reduxState.auth.token;

// //     if (!persistedToken) {
// //       throw new Error('Unable to fetch user');
// //     }

// //     const tokenExpiration = reduxState.auth.expiresAt;
// //     const currentTime = Date.now();

// //     if (tokenExpiration && tokenExpiration < currentTime) {
// //       throw new Error('Token has expired');
// //     }

// //     setAuthHeader(persistedToken);

// //     try {
// //       const resp = await axios.get('/users/current');
// //       return resp.data;
// //     } catch (error) {
// //       clearAuthHeader();
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   },
// //   {
// //     condition(_, thunkAPI) {
// //       const reduxState = thunkAPI.getState();
// //       return reduxState.auth.token !== null;
// //     },
// //   }
// // );
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/api/';
// axios.defaults.baseURL = '/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerOperation = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    console.log(newUser);
    try {
      const resp = await axios.post('/users/signup', newUser);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginOperation = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post('users/login', credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutOperation = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshOperation = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const persistedToken = reduxState.auth.token;

    if (!persistedToken) {
      throw new Error('Unable to fetch user');
    }
    const tokenExpiration = reduxState.auth.expiresAt;
    const currentTime = Date.now();

    if (tokenExpiration && tokenExpiration < currentTime) {
      throw new Error('Token has expired');
    }

    setAuthHeader(persistedToken);

    const resp = await axios.get('users/current');
    return resp.data;
  },
  {
    condition(_, thunkAPI) {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
