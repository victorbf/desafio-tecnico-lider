import { ShoppingCart, SignOut } from 'phosphor-react';
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
  const itemsTotal = items.length;

  return (
    <HeaderContainer>
      <HeaderTitle to='/'>Olá, usuário!</HeaderTitle>
      <HeaderRightContent>
        <HeaderLogoutButton
          type='button'
          title='logout'
          onClick={() => localStorage.removeItem('isAuthenticated')}
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
