import { createSlice } from '@reduxjs/toolkit';
import {
  createContactOperation,
  getAllContactsOperation,
  deleteContact,
  patchContact,
} from './operationsContact.js';
import { logOutOperation } from './../auth/operationsAuth.js';

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
    editing: {},
  },
  reducers: {
    startEditing: (state, action) => {
      state.editing[action.payload.id] = true;
    },
    stopEditing: (state, action) => {
      state.editing[action.payload.id] = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContactsOperation.pending, handlePending)
      .addCase(getAllContactsOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = false;
      })
      .addCase(getAllContactsOperation.rejected, handleRejected)

      .addCase(createContactOperation.pending, handlePending)
      .addCase(createContactOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        state.error = false;
      })
      .addCase(createContactOperation.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(patchContact.pending, handlePending)

      .addCase(patchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const { id } = action.payload;
        const index = state.items.findIndex(contact => contact.id === id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.editing[id] = false;
      })
      .addCase(patchContact.rejected, handleRejected)
      .addCase(logOutOperation.fulfilled, state => {
        state.items = [];
        state.error = false;
        state.loading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { startEditing, finishEditing } = contactsSlice.actions;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     loading: false,
//     // creating: false, // Додано
//     error: false,
//     editing: {},
//   },
//   reducers: {
//     startEditing: (state, action) => {
//       state.editing[action.payload.id] = true;
//     },
//     stopEditing: (state, action) => {
//       state.editing[action.payload.id] = false;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(getAllContactsOperation.pending, state => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(getAllContactsOperation.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//         state.error = false;
//       })
//       .addCase(getAllContactsOperation.rejected, handleRejected)

//       .addCase(createContactOperation.pending, state => {
//         // state.creating = true; // Додано
//         state.error = false;
//       })
//       .addCase(createContactOperation.fulfilled, (state, action) => {
//         // state.creating = false; // Додано
//         state.items.push(action.payload);
//         state.error = false;
//       })
//       .addCase(createContactOperation.rejected, (state, action) => {
//         // state.creating = false; // Додано
//         state.error = action.payload;
//       })

//       .addCase(deleteContact.pending, state => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = false;
//         const index = state.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, handleRejected)

//       .addCase(patchContact.pending, state => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(patchContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = false;
//         const { id } = action.payload;
//         const index = state.items.findIndex(contact => contact.id === id);
//         if (index !== -1) {
//           state.items[index] = action.payload;
//         }
//         state.editing[id] = false;
//       })
//       .addCase(patchContact.rejected, handleRejected)
//       .addCase(logOutOperation.fulfilled, state => {
//         state.items = [];
//         state.error = false;
//         state.loading = false;
//       });
//   },
// });
