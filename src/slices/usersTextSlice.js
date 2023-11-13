import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const usersTextSlice = createSlice({
  name: 'usersText',
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { change } = usersTextSlice.actions;

export default usersTextSlice.reducer;
