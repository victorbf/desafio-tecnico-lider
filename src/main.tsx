import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartItemsProvider } from './contexts/CartItemsContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CartItemsProvider>
      <App />
    </CartItemsProvider>
  </BrowserRouter>,
);
