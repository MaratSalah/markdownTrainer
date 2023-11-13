import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { ended: 'false', active: 'true' },
    { ended: 'false', active: 'false' },
    { ended: 'false', active: 'false' },
    { ended: 'false', active: 'false' },
    { ended: 'false', active: 'false' },
  ],
};

const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    nextLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const { nextLevel } = levelsSlice.actions;

export default levelsSlice.reducer;
