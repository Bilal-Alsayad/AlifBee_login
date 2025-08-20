import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import levelReducer from "./levelSlice";
import lessonReducer from "./lessonSlice";
import targetReducer from "./targetSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    level: levelReducer,
    lesson: lessonReducer,
    target: targetReducer,
  },
});

export default store;
