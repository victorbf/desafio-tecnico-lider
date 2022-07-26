import React, { createContext, Dispatch, useReducer, Reducer } from 'react';
import {
  CartActions,
  cartItemsReducer,
  CartState,
} from '~/reducers/cartItemsReducer/cartItemsReducer';

export type Fruit = {
  id: string;
  name: string;
  imgUrl: string;
  description: string;
};

export type Item = {
  fruit: Fruit;
  quantity: number;
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
