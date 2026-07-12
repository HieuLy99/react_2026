/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

export interface FavoriteProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: ratingType;
  image: string;
}
export type ratingType = {
  rate: number;
  count: number;
};
const initialFavoritesProduct: FavoriteProduct[] = [];

const listFavoritesSlice = createSlice({
  name: "listFavorites",
  initialState: initialFavoritesProduct,
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find(
        (item: FavoriteProduct) => item.id === product.id,
      );
      if (!existingProduct) {
        state.push(product);
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      return state.filter((item: FavoriteProduct) => item.id !== productId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } =
  listFavoritesSlice.actions;

export default listFavoritesSlice.reducer;
