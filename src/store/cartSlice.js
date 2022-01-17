import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    cart(state) {
      console.log(current(state));
    },
  },
});
