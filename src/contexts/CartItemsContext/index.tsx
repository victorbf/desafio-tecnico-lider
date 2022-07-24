import React, { createContext, Dispatch, useReducer, Reducer } from 'react';
import {
  CartActions,
  cartItemsReducer,
  CartState,
} from '~/reducers/cartItemsReducer/cartItemsReducer';

export type Item = {
  id: string;
  name: string;
  imgUrl: string;
};

const initialState: CartState = {
  items: [],
};

const CartItemsContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartActions>;
}>({ state: initialState, dispatch: () => null });

const CartItemsProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer<Reducer<CartState, CartActions>>(
    cartItemsReducer,
    initialState,
  );

  return (
    <CartItemsContext.Provider value={{ state, dispatch }}>{children}</CartItemsContext.Provider>
  );
};

export { CartItemsProvider, CartItemsContext };
