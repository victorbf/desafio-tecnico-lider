import { ShoppingCart, SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '~/hooks/useCartContext/useCartContext';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderRightContent,
  HeaderLogoutButton,
  HeaderCartLink,
} from './style';

const Header = () => {
  const { items } = useCartContext();
  const navigate = useNavigate();
  const itemsTotal = items.length;

  return (
    <HeaderContainer>
      <HeaderTitle to='/'>Olá, usuário!</HeaderTitle>
      <HeaderRightContent>
        <HeaderLogoutButton
          type='button'
          title='logout'
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            navigate('/login');
          }}
        >
          <SignOut size={24} />
        </HeaderLogoutButton>
        <HeaderCartLink to='/cart'>
          <ShoppingCart size={24} /> {itemsTotal}
        </HeaderCartLink>
      </HeaderRightContent>
    </HeaderContainer>
  );
};

export default Header;
