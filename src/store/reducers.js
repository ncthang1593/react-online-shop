import { actions } from "./actions";

export const reducer = (state, action) => {
  const { cartItems, products } = state;
  const { id, quantity } = action.item || {};

  const findProductInCart = (id) =>
    cartItems.find((product) => product.id === parseInt(id));

  const updateCartItems = (updatedProduct) => {
    // Remove duplicates and update quantities if product is already in the cart
    return [
      ...cartItems.filter((cartItem) => cartItem.id !== updatedProduct.id),
      updatedProduct,
    ];
  };

  switch (action.type) {
    case actions.ADD_ITEM: {
      const product = products.find((product) => product.id === parseInt(id));

      if (!product || quantity <= 0) return state;
      const updatedProduct = { ...product, quantity };

      return {
        ...state,
        cartItems: updateCartItems(updatedProduct),
        products: products.map((product) =>
          product.id === parseInt(id) ? updatedProduct : product
        ),
      };
    }

    case actions.REMOVE_ITEM: {
      return {
        ...state,
        cartItems: cartItems.filter((item) => item.id !== parseInt(id)),
        products: products.map((product) =>
          product.id === parseInt(id) ? { ...product, quantity: 0 } : product
        ),
      };
    }

    default:
      return state;
  }
};