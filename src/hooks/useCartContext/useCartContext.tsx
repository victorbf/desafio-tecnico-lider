import { useCallback, useContext } from 'react';
import { CartItemsContext, Fruit, Item } from '~/contexts/CartItemsContext';
import {
  CartActionsType,
  UpdateQuantityPayload,
} from '~/reducers/cartItemsReducer/cartItemsReducer';

export const useCartContext = () => {
  const { state, dispatch } = useContext(CartItemsContext);
  const { items } = state;

  const removeFromCart = useCallback(
    (id: Fruit['id']) => {
      dispatch({ type: CartActionsType.REMOVE_FROM_CART, payload: id });
    },
    [dispatch],
  );

  const addToCart = useCallback(
    (item: Item) => {
      dispatch({ type: CartActionsType.ADD_TO_CART, payload: item });
    },
    [dispatch],
  );

  const updateQuantity = useCallback(
    ({ id, quantity }: UpdateQuantityPayload) => {
      dispatch({ type: CartActionsType.UPDATE_ITEM_QUANTITY, payload: { id, quantity } });
    },
    [dispatch],
  );

  return { removeFromCart, addToCart, updateQuantity, items };
};
