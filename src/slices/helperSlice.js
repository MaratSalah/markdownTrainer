import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

const helperSlice = createSlice({
  name: 'helper',
  initialState,
  reducers: {
    changeHelperVision: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeHelperVision } = helperSlice.actions;

export default helperSlice.reducer;
