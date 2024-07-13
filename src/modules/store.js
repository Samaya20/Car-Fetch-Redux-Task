import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../redux/carSlice";

export default configureStore({
  reducer: {
    cars: carReducer,
  },
});
