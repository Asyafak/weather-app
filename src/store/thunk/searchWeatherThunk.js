import { createAsyncThunk } from "@reduxjs/toolkit";

// Define thunk
const searchWeatherThunk = createAsyncThunk(
  "weather/search",
  async (city, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a33a2b453b59451642036751bb35efaa&units=metric`
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
