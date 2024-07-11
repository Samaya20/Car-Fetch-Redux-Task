import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchCars = createAsyncThunk("fetchCars", async () => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/Samaya20/Cars-Fake-Data/main/cars.json"
  );
  return response.data;
});

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fecthing cars data :/ ";
    });
  },
});

export default carSlice.reducer;
