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
