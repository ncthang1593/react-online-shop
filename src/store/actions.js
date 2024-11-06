import { PRODUCTS } from "./data";

export const initialState = {
  products: PRODUCTS,
  cartItems: [],
};

export const actions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};
