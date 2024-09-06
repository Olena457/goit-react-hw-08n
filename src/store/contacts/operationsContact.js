// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const createContactOperation = createAsyncThunk(
//   'contacts/create',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/contacts', contact);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getAllContactsOperation = createAsyncThunk(
//   'contact/getAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios('/contacts');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllContactsOperation = createAsyncThunk(
  ' contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContactOperation = createAsyncThunk(
  'contacts/addContact',

  async (items, thunkAPI) => {
    try {
      const resp = await axios.post('/contacts', items);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (itemId, thunkAPI) => {
    try {
      const resp = await axios.delete(`/contacts/${itemId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async (updatedContact, thunkAPI) => {
    const { id, name, number } = updatedContact;
    try {
      const response = await axios.patch(`contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);