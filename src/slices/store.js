import { configureStore } from "@reduxjs/toolkit";
import userTextReducer from "./usersTextSlice";
import levelsSliceReducer from "./levelsSlice";

export default configureStore({
  reducer: {
    usersText: userTextReducer,
    levels: levelsSliceReducer,
  },
});
