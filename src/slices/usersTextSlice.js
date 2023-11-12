import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: null,
};

const usersTextSlice = createSlice({
  name: 'usersText',
  initialState,
  reducers: {
    change: (state, action) => {
      state.text = action.payload;
    }
  }
});

export const { change } = usersTextSlice.actions;

export default usersTextSlice.reducer;
