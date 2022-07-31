import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from "../redux/countries"

const store = configureStore({
  reducer: {
      countries:countriesReducer

  },
});
export default store;
