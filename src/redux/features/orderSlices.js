import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOption: null,
  selectedToppings: [],
  selectedExtra: [],
  totalPrice: 0,
  basePrice: 0,
  selectedType: null,
  selectedDressing: null,
  selectedSauce: null,
  order: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    selectOption(state, action) {
      console.log("got in the option", action);
      state.selectedOption = action.payload;
      if (state.basePrice === 0) {
        console.log("the base price is", state.basePrice);
        state.totalPrice = action.payload.price;
        state.basePrice = action.payload.price;
        console.log("the base price is", state.basePrice);
      } else if (state.basePrice > 0) {
        state.totalPrice =
          state.totalPrice - state.basePrice + action.payload.price;
        state.basePrice = action.payload.price;
      }
    },
    addTopping(state, action) {
      state.selectedToppings.push(action.payload);
      state.totalPrice += action.payload.price;
    },

    addExtra(state, action) {
      state.selectedExtra.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    addType(state, action) {
      state.selectedType.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    addDressing(state, action) {
      state.selectedDressing.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeExtra(state, action) {
      const extra = action.payload;
      const index = state.selectedExtra.findIndex((ext) => ext.id === extra.id);
      if (index !== -1) {
        state.selectedExtra.splice(index, 1);
        state.totalPrice -= action.payload.price;
      }
    },
    changeTopping(state, action) {
      const topping = action.payload;
      const index = state.selectedToppings.findIndex(
        (t) => t.id === topping.id
      );
      if (index !== -1) {
        // If topping is already selected, remove it
        state.selectedToppings.splice(index, 1);
        state.totalPrice -= action.payload.price;
      } else {
        // If topping is not selected, add it
        state.selectedToppings.push(topping);
        state.totalPrice += action.payload.price;
      }
    },

    selectSauce(state, action) {
      state.selectedSauce = action.payload;
      state.totalPrice += action.payload.price;
    },

    cleanupOrder(state) {
      //performing a cleanup
      state.basePrice = 0;
      state.totalPrice = 0;
      state.selectedDressing = null;
      state.selectedExtra = [];
      state.selectedSauce = null;
      state.selectedToppings = [];
      state.selectedType = null;
      state.selectedOption = null;
    },
  },
});

export const {
  selectOption,
  addTopping,
  addExtra,
  removeExtra,
  changeTopping,
  selectSauce,
  addType,
  addDressing,
  cleanupOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
