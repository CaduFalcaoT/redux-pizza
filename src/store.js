import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user,
  },
});

export default store;
