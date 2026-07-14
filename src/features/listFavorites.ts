import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface FavoriteProduct {
  id: number;
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
    addToFavorites: (state, action: PayloadAction<FavoriteProduct>) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);
      if (!existingProduct) {
        state.push(product);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } =
  listFavoritesSlice.actions;

export default listFavoritesSlice.reducer;
