import { useCartContext } from '~/hooks/useCartContext/useCartContext';
import { HeaderContainer, HeaderTitle, HeaderLogoutButton, HeaderCartLink } from './style';

const Header = () => {
  const { items } = useCartContext();
  const itemsTotal = items.length;

  return (
    <HeaderContainer>
      <HeaderTitle>Olá, usuário!</HeaderTitle>
      <HeaderLogoutButton
        type='button'
        title='logout'
        onClick={() => localStorage.removeItem('isAuthenticated')}
      >
        ICON
      </HeaderLogoutButton>
      <HeaderCartLink to='/cart'>ICON {itemsTotal}</HeaderCartLink>
    </HeaderContainer>
  );
};

export default Header;
