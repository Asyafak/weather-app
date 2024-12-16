import { configureStore } from "@reduxjs/toolkit";

import searchWeatherSlices from "./slices/searchWeatherSlices";

const store = configureStore({
  reducer: {
    search: searchWeatherSlices,
  },
});

export default store;
