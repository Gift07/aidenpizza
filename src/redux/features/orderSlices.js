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

    createOrder(state, action) {
      const { itemName, quantity } = action.payload;
      const order = {};

      // Check each property and add to the order object if it's not null or an empty array
      if (state.selectedOption !== null)
        order.selectedOption = state.selectedOption;
      if (state.selectedToppings.length > 0)
        order.selectedToppings = state.selectedToppings;
      if (state.selectedExtra.length > 0)
        order.selectedExtra = state.selectedExtra;
      if (state.selectedType !== null) order.selectedType = state.selectedType;
      if (state.selectedDressing !== null)
        order.selectedDressing = state.selectedDressing;
      if (state.selectedSauce !== null)
        order.selectedSauce = state.selectedSauce;

      // Add itemName and totalPrice to the order object
      order.itemName = itemName;
      order["quantity"] = quantity;
      order.totalPrice = state.totalPrice;
      console.log(order);
      state.order = order;
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
  createOrder,
  cleanupOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
