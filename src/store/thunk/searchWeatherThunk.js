const API_URL = import.meta.env.VITE_WEATHER_URL;
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

import { createAsyncThunk } from "@reduxjs/toolkit";

// Define thunk
const searchWeatherThunk = createAsyncThunk(
  "weather/search",
  async (city, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(
          `Tidak dapat menemukan "${city}" :( Tolong masukan input yang masuk akal T_T`
        );
      }

      const data = await response.json(); // Parse JSON response
      return data; // Return data to be used in slice
    } catch (error) {
      return rejectWithValue(error.message); // Handle error in slice
    }
  }
);

export { searchWeatherThunk };
