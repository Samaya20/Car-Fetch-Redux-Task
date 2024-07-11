import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../redux/carSlice";

export default configureStore({
  reducer: {
    cars: carSlice,
  },
});
