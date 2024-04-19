import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  ownPizzaModal: false,
};

const appSlices = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleSideBar: (state) => {
      state.sidebar = !state.sidebar;
    },
    handleOwnPizzaModal: (state) => {
      state.ownPizzaModal = !state.ownPizzaModal;
    },
  },
});

export const { handleSideBar, handleOwnPizzaModal } = appSlices.actions;

export default appSlices.reducer;
