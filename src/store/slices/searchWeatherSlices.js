import { createSlice } from "@reduxjs/toolkit";

import { searchWeatherThunk } from "../thunk/searchWeatherThunk";

const searchWeatherSlices = createSlice({
  name: "weather-search",
  initialState: {
    data: null,
    city: "",
    error: null,
  },
  reducers: {
    setCity: (state, { payload }) => {
      if (payload === "") return;
      console.log(`"${payload}"`);

      state.city = payload;
    },
    removeError: (state) => {
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
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

export const { setCity, removeError, setError } = searchWeatherSlices.actions;
export default searchWeatherSlices.reducer;
