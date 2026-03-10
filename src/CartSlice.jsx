import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      if (state.items[plant.id]) {
        state.items[plant.id].quantity += 1;
      } else {
        state.items[plant.id] = { ...plant, quantity: 1 };
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
        if (state.items[id].quantity <= 0) {
          delete state.items[id];
        }
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export const selectCartItems = (state) => Object.values(state.cart.items);

export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.quantity,
    0
  );

export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

export default cartSlice.reducer;