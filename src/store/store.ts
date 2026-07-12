import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import listFavoritesReducer from "../features/listFavorites";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorites: listFavoritesReducer,
  },
});