import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { CartItemsProvider, Item } from '~/contexts/CartItemsContext';
import { useCartContext } from '~/hooks/useCartContext/useCartContext';
import Footer from '.';

vi.mock('~/hooks/useCartContext/useCartContext');
const useCartContextMocked = vi.mocked(useCartContext);

describe('Module: Footer', () => {
  it('should render component successfully', () => {
    const item: Item = {
      fruit: {
        id: 'banana',
        name: 'Banana',
        imgUrl: '',
        description: '',
      },
      quantity: 3,
    };

    useCartContextMocked.mockReturnValueOnce({ items: [item] } as any);

    render(
      <BrowserRouter>
        <CartItemsProvider>
          <Footer />
        </CartItemsProvider>
      </BrowserRouter>,
    );

    const homeButton = screen.getByRole('link', { name: 'Frutas' });
    const cartLink = screen.getByRole('link', { name: `Carrinho (${1})` });

    expect(homeButton).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });
});
