import { createSlice } from "@reduxjs/toolkit";

import { searchWeatherThunk } from "../thunk/searchWeatherThunk";

const searchWeatherSlices = createSlice({
  name: "weather-search",
  initialState: {
    data: null,
    city: "bandung",
    error: null,
  },
  reducers: {
    setCity: (state, { payload }) => {
      state.city = payload;
    },
    removeError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchWeatherThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Menggunakan hasil fetch
      })
      // .addCase(searchWeatherThunk.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      .addCase(searchWeatherThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Menangkap error
      });
  },
});

export const { setCity, removeError } = searchWeatherSlices.actions;
export default searchWeatherSlices.reducer;
