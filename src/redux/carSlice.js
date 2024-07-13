import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
  selectedCar: null,
};

export const fetchCars = createAsyncThunk("fetchCars", async () => {
  const response = await axios.get("http://localhost:3001/cars");
  const sortedCars = response.data.slice().sort((a, b) => a.model.localeCompare(b.model));
  return sortedCars;
});

export const updateCar = createAsyncThunk("updateCar", async (updatedCar, { rejectWithValue }) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/cars/${updatedCar.id}`,
      updatedCar
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    selectCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching cars data :/";
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.data = state.data.map((car) =>
          car.id === action.payload.id ? action.payload : car
        );
      });
  },
});

export const { selectCar } = carSlice.actions;

export default carSlice.reducer;
