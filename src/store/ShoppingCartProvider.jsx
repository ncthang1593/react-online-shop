import { createContext, useReducer } from "react";
import { reducer } from "./reducers";
import { actions, initialState } from "./actions";

export const ShoppingStore = createContext({});

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    products: state.products,
    cartItems: state.cartItems,
    addItemCart: (payload) => {
      dispatch({ type: actions.ADD_ITEM, item: payload.item });
    },
    removeItemCart: (payload) => {
      dispatch({ type: actions.REMOVE_ITEM, item: payload.item });
    },
  };

  return (
    <ShoppingStore.Provider value={value}>{children}</ShoppingStore.Provider>
  );
};
