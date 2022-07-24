import { Item } from '~/contexts/CartItemsContext';

export enum CartActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export type CartActions =
  | {
      type: CartActionsType.ADD_TO_CART;
      payload: Item;
    }
  | {
      type: CartActionsType.REMOVE_FROM_CART;
      payload: Item['id'];
    };

export type CartState = {
  items: Item[];
};

export const cartItemsReducer = (state: CartState, action: CartActions): CartState => {
  switch (action.type) {
    case CartActionsType.ADD_TO_CART:
      return { items: [...state.items, action.payload] };
    case CartActionsType.REMOVE_FROM_CART:
      return { items: [...state.items.filter((item) => item.id !== action.payload)] };
    default:
      return state;
  }
};
