import { useCallback, useContext } from 'react';
import { CartItemsContext, Item } from '~/contexts/CartItemsContext';
import { CartActionsType } from '~/reducers/cartItemsReducer/cartItemsReducer';

export const useCartContext = () => {
  const { state, dispatch } = useContext(CartItemsContext);
  const { items } = state;

  const removeFromCart = useCallback(
    (id: Item['id']) => {
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

  return { removeFromCart, addToCart, items };
};
