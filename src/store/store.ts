import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import listFavoritesReducer from "../features/listFavorites";
import storage from "redux-persist/lib/storage"; // localStorage
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     favorites: listFavoritesReducer,
//   },
// });
// configureStore đã chủ động gọi tới combineReducers nhưng dùng persistReducer cần bọc quanh rootReducer

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites", "counter"],
  blacklist: [],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  favorites: listFavoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
