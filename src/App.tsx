import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Cart from './pages/Cart';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';
import Login from './pages/Login';
import { DefaultLayout } from './layouts';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route
            path='/'
            element={<ProtectedRoute authenticationPath='/login' outlet={<Home />} />}
          />
          <Route
            path='cart'
            element={<ProtectedRoute authenticationPath='/login' outlet={<Cart />} />}
          />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
