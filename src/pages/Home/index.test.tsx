import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CartItemsProvider } from '~/contexts/CartItemsContext';
import { ModalProvider } from '~/contexts/ModalContext';
import Modal from '~/modules/Modal';
import Home from '.';

describe('Page: Home', () => {
  it('should render successfully', () => {
    render(
      <BrowserRouter>
        <CartItemsProvider>
          <ModalProvider>
            <Home />
          </ModalProvider>
        </CartItemsProvider>
      </BrowserRouter>,
    );

    const searchInput = screen.getByPlaceholderText('Procurar frutas');
    const title = screen.getByText('Frutas');
    const fruitsTotal = screen.getByText('5 frutas');
    const listItems = screen.getAllByRole('listitem');

    expect(searchInput).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(fruitsTotal).toBeInTheDocument();
    expect(listItems.length).toBe(5);
  });

  it('should render manga and maca on search for ma', async () => {
    render(
      <BrowserRouter>
        <CartItemsProvider>
          <ModalProvider>
            <Home />
          </ModalProvider>
        </CartItemsProvider>
      </BrowserRouter>,
    );

    const searchInput = screen.getByPlaceholderText('Procurar frutas');
    await userEvent.type(searchInput, 'ma');

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);

    const maca = screen.getByText('Maçã');
    expect(maca).toBeInTheDocument();

    const manga = screen.getByText('Manga');
    expect(manga).toBeInTheDocument();
  });

  it('should open fruit modal with right title when fruit is not added to cart', async () => {
    render(
      <BrowserRouter>
        <CartItemsProvider>
          <ModalProvider>
            <Modal />
            <Home />
          </ModalProvider>
        </CartItemsProvider>
      </BrowserRouter>,
    );
    const listItems = screen.getAllByRole('listitem');

    await userEvent.click(listItems[0]);

    const fruitModalTitle = screen.getByText('Adicionar maçã');
    expect(fruitModalTitle).toBeInTheDocument();
  });

  it('should open fruit modal with right title when fruit is already at cart', async () => {
    render(
      <BrowserRouter>
        <CartItemsProvider>
          <ModalProvider>
            <Modal />
            <Home />
          </ModalProvider>
        </CartItemsProvider>
      </BrowserRouter>,
    );
    const listItems = screen.getAllByRole('listitem');

    await userEvent.click(listItems[0]);
    const addFruitModalButton = screen.getByRole('button', { name: 'Adicionar fruta' });
    await userEvent.click(addFruitModalButton);
    await userEvent.click(listItems[0]);

    const fruitModalButton = screen.getByText('Atualizar quantidade de maçãs');
    expect(fruitModalButton).toBeInTheDocument();
  });

  it('should render item with quantity if is added to cart', async () => {
    render(
      <BrowserRouter>
        <CartItemsProvider>
          <ModalProvider>
            <Modal />
            <Home />
          </ModalProvider>
        </CartItemsProvider>
      </BrowserRouter>,
    );
    const listItems = screen.getAllByRole('listitem');

    await userEvent.click(listItems[0]);
    const addFruitModalButton = screen.getByRole('button', { name: 'Adicionar fruta' });
    await userEvent.click(addFruitModalButton);

    const appleQuantity = screen.getByText('(1)');
    expect(appleQuantity).toBeInTheDocument();
  });
});
