import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalItems: 0,
  cartTotalPrice: 0,
};

const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addItemToCart: (state, action) => {
      console.log("items in cart", action);
      const newItem = action.payload;
      // Check if the item already exists in the cart by checking the _id
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.name === newItem.name
      );

      if (existingItemIndex >= 0) {
        // Increment the quantity of the existing item
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        // Item does not exist in the cart, add it as a new item with quantity = 1
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
      console.log("cart", state.cartItems);
      // Recalculate the cart totals
      calculateCartTotals(state);
    },
    // Remove an item from the cart
    removeItemFromCart: (state, action) => {
      const itemToRemove = action.payload;
      // Filter out the item from the cartItems array based on the _id
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== itemToRemove._id
      );
      // Recalculate the cart totals
      calculateCartTotals(state);
    },
    // Clear all items from the cart
    clearCart: (state) => {
      state.cartItems = [];
      // Recalculate the cart totals
      calculateCartTotals(state);
    },
    // Increment the quantity of an item in the cart
    incrementItemQuantity: (state, action) => {
      const itemName = action.payload;
      // Find the item in the cart by its _id and increment its quantity
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === itemName
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
      // Recalculate the cart totals
      calculateCartTotals(state);
    },
    // Decrement the quantity of an item in the cart
    decrementItemQuantity: (state, action) => {
      const itemName = action.payload;
      // Find the item in the cart by its _id
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === itemName
      );
      if (itemIndex >= 0) {
        // Decrement the quantity of the item
        state.cartItems[itemIndex].quantity -= 1;
        // If the quantity reaches zero, remove the item from the cart
        if (state.cartItems[itemIndex].quantity <= 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }
      // Recalculate the cart totals
      calculateCartTotals(state);
    },
  },
});

// Helper function to recalculate the cart totals
const calculateCartTotals = (state) => {
  // Initialize totals
  let totalItems = 0;
  let totalPrice = 0;

  // Loop through the cart items to calculate totalItems and totalPrice
  for (const item of state.cartItems) {
    console.log("the item", item);
    totalItems += 1; // Count each distinct item (does not include quantity)
    totalPrice += item.price * (item.quantity || 1);
  }

  // Update state totals
  state.cartTotalItems = totalItems;
  state.cartTotalPrice = totalPrice;
};

// Export the action creators and reducer
export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlices.actions;

export default cartSlices.reducer;
