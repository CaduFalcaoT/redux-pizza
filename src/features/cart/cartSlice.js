import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    delItem(state, action) {
      return state.filter((item) => {
        return item.pizzaId !== action.payload;
      });
    },
    increaseItem(state, action) {
      const item = state.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItem(state, action) {
      const item = state.find((item) => item.pizzaId === action.payload);

      if (item.quantity === 1) {
        return state.filter((item) => {
          return item.pizzaId !== action.payload;
        });
      }
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.length = 0;
    },
  },
});

export const { addItem, delItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getQuantityById = (id) => (state) =>
  state.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
