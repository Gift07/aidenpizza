import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

const initialState = {
  sidebar: false,
  ownPizzaModal: false,
  pizzaData: null,
};

const appSlices = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleSideBar: (state) => {
      state.sidebar = !state.sidebar;
    },
    handleOwnPizzaModal: (state, action) => {
      if (!isEmpty(action.payload.data)) {
        state.pizzaData = action.payload.data;

        state.ownPizzaModal = !state.ownPizzaModal;
      } else if (isEmpty(action.payload.data)) {
        state.ownPizzaModal = !state.ownPizzaModal;
        state.pizzaData = null;
      }
    },
  },
});

export const { handleSideBar, handleOwnPizzaModal } = appSlices.actions;
export const selectPizzaData = (state) => state.app.pizzaData;

export default appSlices.reducer;
