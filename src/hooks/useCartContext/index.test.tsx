import { renderHook } from '@testing-library/react-hooks';
import { CartItemsProvider } from '~/contexts/CartItemsContext';
import { useCartContext } from './useCartContext';

describe('Hook: useCartContext', () => {
  const item = {
    fruit: {
      id: 'maca',
      name: 'Maçã',
      imgUrl: '',
      description: '',
    },
    quantity: 1,
  };

  it('should add a item into items array', () => {
    const wrapper = CartItemsProvider;
    const { result } = renderHook(useCartContext, { wrapper });
    result.current.addToCart(item);

    const { items } = result.current;

    expect(items).toEqual([item]);
  });

  it('should remove a item from items array', () => {
    const wrapper = CartItemsProvider;
    const { result } = renderHook(useCartContext, { wrapper });

    result.current.addToCart(item);

    const itemId = 'maca';

    result.current.removeFromCart(itemId);

    expect(result.current.items).toEqual([]);
  });

  it('should update quantity', () => {
    const wrapper = CartItemsProvider;
    const { result } = renderHook(useCartContext, { wrapper });

    result.current.addToCart(item);

    const itemId = 'maca';

    result.current.updateQuantity({ id: itemId, quantity: 20 });

    expect(result.current.items).toEqual([{ ...item, quantity: 20 }]);
  });
});
