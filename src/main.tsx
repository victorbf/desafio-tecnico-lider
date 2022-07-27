import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartItemsProvider } from './contexts/CartItemsContext';
import App from './App';
import { ModalProvider } from './contexts/ModalContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div style={{ position: 'relative' }}>
      <CartItemsProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CartItemsProvider>
    </div>
  </BrowserRouter>,
);
