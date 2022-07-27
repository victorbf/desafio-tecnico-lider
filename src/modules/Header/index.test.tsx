import { render, screen } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { CartItemsProvider } from '~/contexts/CartItemsContext';
import { useCartContext } from '~/hooks/useCartContext/useCartContext';
import Header from '.';

vi.mock('~/hooks/useCartContext/useCartContext');
const useCartContextMocked = vi.mocked(useCartContext);

describe('Commponent: Header', () => {
  useCartContextMocked.mockReturnValueOnce({ items: [] } as any);

  it('should render title', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const title = screen.getByText(/Olá, usuário!/);

    expect(title).toBeInTheDocument();
  });

  it('should update items length in cart icon', () => {
    const item = {
      fruit: {
        id: 'banana',
        name: 'Banana',
        imgUrl: '',
        description: '',
      },
      quantity: 3,
    };

    useCartContextMocked.mockReturnValueOnce({ items: [] } as any);

    const Wrapper = ({ children }: PropsWithChildren<unknown>) => (
      <BrowserRouter>
        <CartItemsProvider>{children}</CartItemsProvider>
      </BrowserRouter>
    );
    const { rerender } = render(
      <Wrapper>
        <Header />
      </Wrapper>,
    );

    const cartItemsTotal = screen.getByText(/0/);
    expect(cartItemsTotal).toBeInTheDocument();

    useCartContextMocked.mockReturnValueOnce({ items: [item] } as any);

    rerender(
      <Wrapper>
        <Header />
      </Wrapper>,
    );

    const updateCartItemsTotal = screen.getByText(/1/);
    expect(updateCartItemsTotal).toBeInTheDocument();
  });
});
