import { configureStore } from '@reduxjs/toolkit';
import userTextReducer from './usersTextSlice';
import levelsSliceReducer from './levelsSlice';
import helperSliceReducer from './helperSlice';

export default configureStore({
  reducer: {
    usersText: userTextReducer,
    levels: levelsSliceReducer,
    helper: helperSliceReducer,
  },
});
