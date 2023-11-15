import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    entities: {
      lvl1: { id: 'lvl1', ended: 'false', active: 'true', exercise: '1', },
      lvl2: { id: 'lvl2', ended: 'false', active: 'false', exercise: '2', },
      lvl3: { id: 'lvl3', ended: 'false', active: 'false', exercise: '3', },
      lvl4: { id: 'lvl4', ended: 'false', active: 'false', exercise: '4', },
      lvl5: { id: 'lvl4', ended: 'false', active: 'false', exercise: '5', },
    },
    ids: [
      'lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5',
    ],
    currentLevel: 'lvl1',
  },
};

const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    nextLevel: (state, action) => {
      state.value.entities[action.payload].ended = 'true';

      const { ids } = state.value;
      const currentLevelIndex = ids.indexOf(action.payload);

      if (currentLevelIndex < ids.length - 1) {
        state.value.currentLevel = ids[currentLevelIndex + 1];
      }
    },
  },
});

export const { nextLevel } = levelsSlice.actions;

export default levelsSlice.reducer;
