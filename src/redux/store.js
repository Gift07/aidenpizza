import { configureStore } from "@reduxjs/toolkit";
import appSlices from "./features/appSlices";
import cartSlices from "./features/cartSlices";

export const store = configureStore({
  reducer: {
    app: appSlices,
    cart: cartSlices,
  },
});
