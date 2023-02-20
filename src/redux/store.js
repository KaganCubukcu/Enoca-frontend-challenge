import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { newsSlice } from "./newsApi/newsSlice";
import filterSliceReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    filterSlice: filterSliceReducer,
    [newsSlice.reducerPath]: newsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsSlice.middleware),
});

setupListeners(store.dispatch);
