// import { createSlice } from '@reduxjs/toolkit';
// const slice = createSlice({
//   name: 'filters',
//   initialState: {
//     name: '',
//     number: '',
//   },
//   reducers: {
//     changeFilter(state, action) {
//       const { name, number } = action.payload;
//       state.name = name ?? state.name;
//       state.number = number ?? state.number;
//     },
//   },
// });

// export const { changeFilter } = slice.actions;

// export default filtersReducer = filterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    changeFilter(state, action) {
      const { name, number } = action.payload;
      state.name = name ?? state.name;
      state.number = number ?? state.number;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
