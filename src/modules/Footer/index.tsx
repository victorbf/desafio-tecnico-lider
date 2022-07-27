import { useCartContext } from '~/hooks/useCartContext/useCartContext';
import { FooterContainer, FooterHomeLink, FooterCartLink } from './style';

const Footer = () => {
  const { items } = useCartContext();

  const itemsTotal = items.length;

  return (
    <FooterContainer>
      <FooterHomeLink to='/'>Frutas</FooterHomeLink>
      <FooterCartLink to='/cart'>Carrinho ({itemsTotal})</FooterCartLink>
    </FooterContainer>
  );
};

export default Footer;
