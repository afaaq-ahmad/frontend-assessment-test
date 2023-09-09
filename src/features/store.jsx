import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./commentSlice";

export default configureStore({
  reducer: {
    lists: listReducer,
  },
});
