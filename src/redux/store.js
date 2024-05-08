import { configureStore } from "@reduxjs/toolkit";
import appSlices from "./features/appSlices";
import cartSlices from "./features/cartSlices";
import orderSlices from "./features/orderSlices";

export const store = configureStore({
  reducer: {
    app: appSlices,
    cart: cartSlices,
    order: orderSlices,
  },
});
