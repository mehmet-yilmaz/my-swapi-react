import { configureStore } from "@reduxjs/toolkit";
import reducer from "./app.reducer";
import { AppEffects$ } from "./app.effects";
export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([AppEffects$.middleware]),
});
