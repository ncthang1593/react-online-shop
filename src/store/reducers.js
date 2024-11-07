import { actions } from "./actions";

export const reducer = (state, action) => {
  let item = state.products.find(
    (product) => product.id === parseInt(action.item.id)
  );
  switch (action.type) {
    case actions.ADD_ITEM:
      let newCartItems = [];
      if (action.item.quantity > 0) {
        if (state.cartItems.length >= 1) {
          state.cartItems.forEach((cart) => {
            if (cart.id === parseInt(action.item.id)) {
              newCartItems = [...state.cartItems];
              let index = newCartItems.findIndex(
                (cart) => cart.id === parseInt(action.item.id)
              );
              newCartItems[index].quantity = action.item.quantity;
            } else {
              newCartItems = [...state.cartItems, item].map((_) => {
                return {
                  ..._,
                  quantity:
                    _.id === parseInt(action.item.id)
                      ? action.item.quantity
                      : _.quantity,
                };
              });
            }
          });

          // remove duplicate
          newCartItems = newCartItems.filter(
            (product, index, self) =>
              index === self.findIndex((p) => p.id === product.id)
          );
        } else {
          newCartItems = [...state.cartItems, item].map((_) => {
            return {
              ..._,
              quantity:
                _.id === parseInt(action.item.id)
                  ? action.item.quantity
                  : _.quantity,
            };
          });
        }
      }

      return {
        ...state,
        cartItems: newCartItems,
        products: state.products.map((_) => {
          return {
            ..._,
            quantity:
              _.id === parseInt(action.item.id)
                ? action.item.quantity
                : _.quantity,
          };
        }),
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (_) => _.id !== parseInt(action.item.id)
        ),
        products: state.products.map((_) => {
          return {
            ..._,
            quantity: _.id === parseInt(action.item.id) ? 0 : _.quantity,
          };
        }),
      };
  }
};
