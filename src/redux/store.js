import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import modeReducer from "./modeSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    mode: modeReducer
  },
});
export default store;
