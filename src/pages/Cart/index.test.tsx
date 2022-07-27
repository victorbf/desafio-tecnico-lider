import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { CartItemsProvider } from '~/contexts/CartItemsContext';
import { useCartContext } from '~/hooks/useCartContext/useCartContext';

import Cart from '.';

vi.mock('~/hooks/useCartContext/useCartContext');
const useCartContextMocked = vi.mocked(useCartContext);

describe('Module: Cart', () => {
  const items = [
    {
      fruit: {
        id: 'banana',
        name: 'Banana',
        imgUrl: '',
        description: '',
      },
      quantity: 3,
    },
    {
      fruit: {
        id: 'maca',
        name: 'Maçã',
        imgUrl: '',
        description: '',
      },
      quantity: 3,
    },
  ];

  it('should render list', () => {
    useCartContextMocked.mockReturnValueOnce({ items } as any);

    render(
      <CartItemsProvider>
        <Cart />
      </CartItemsProvider>,
    );
    const itemsList = screen.getAllByRole('listitem');
    expect(itemsList.length).toBe(2);
  });

  it('should render empty state', () => {
    useCartContextMocked.mockReturnValueOnce({ items: [] } as any);

    render(
      <CartItemsProvider>
        <Cart />
      </CartItemsProvider>,
    );
    const emptyState = screen.getByText(
      'Opa, infelizmente não tem nenhuma fruta adicionada no carrinho',
    );

    expect(emptyState).toBeInTheDocument();
  });

  it('should call removeFromCart when click on any card', async () => {
    const removeFromCart = vi.fn();

    useCartContextMocked.mockReturnValueOnce({ items, removeFromCart } as any);

    render(
      <CartItemsProvider>
        <Cart />
      </CartItemsProvider>,
    );

    const cardItem = screen.getByText('Banana');

    await userEvent.click(cardItem);

    expect(removeFromCart).toHaveBeenCalledWith('banana');
  });
});
