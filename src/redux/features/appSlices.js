import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

const initialState = {
  sidebar: false,
  ownPizzaModal: false,
  pizzaData: null,
  kitechenNotes: "",
  formData: {
    name: "",
    email: "",
    phone: "",
    location: "",
  },
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
    handleUpdateFormData: (state, { payload }) => {
      const { name, value } = payload;
      state.formData[name] = value;
    },
    handleUpdateNotes: (state, { payload }) => {
      const { name, value } = payload;
      state.kitechenNotes = value;
    },
  },
});

export const {
  handleSideBar,
  handleOwnPizzaModal,
  handleUpdateFormData,
  handleUpdateNotes,
} = appSlices.actions;
export const selectPizzaData = (state) => state.app.pizzaData;
export const selectFormData = (state) => state.app.formData;
export const selectNotes = (state) => state.app.kitechenNotes;

export default appSlices.reducer;
