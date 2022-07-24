import { Fruit, Item } from '~/contexts/CartItemsContext';

export enum CartActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY',
}

export type UpdateQuantityPayload = {
  id: Fruit['id'];
  quantity: number;
};

export type CartActions =
  | {
      type: CartActionsType.ADD_TO_CART;
      payload: Item;
    }
  | {
      type: CartActionsType.REMOVE_FROM_CART;
      payload: Fruit['id'];
    }
  | {
      type: CartActionsType.UPDATE_ITEM_QUANTITY;
      payload: UpdateQuantityPayload;
    };

export type CartState = {
  items: Item[];
};

export const cartItemsReducer = (state: CartState, action: CartActions): CartState => {
  switch (action.type) {
    case CartActionsType.ADD_TO_CART:
      return { items: [...state.items, action.payload] };
    case CartActionsType.REMOVE_FROM_CART:
      return { items: state.items.filter((item) => item.fruit.id !== action.payload) };
    case CartActionsType.UPDATE_ITEM_QUANTITY:
      return {
        items: state.items.map((item) =>
          item.fruit.id === action.payload.id
            ? { fruit: item.fruit, quantity: action.payload.quantity }
            : item,
        ),
      };
    default:
      return state;
  }
};
