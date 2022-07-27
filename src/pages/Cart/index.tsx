import { useNavigate } from 'react-router-dom';
import EmptyState from '~/components/EmptyState';
import { useCartContext } from '~/hooks/useCartContext/useCartContext';
import { CartContainer, CartList, CartItemText, CartItemCard, CartCheckout } from './style';

const Cart = () => {
  const { items, removeFromCart } = useCartContext();
  const navigate = useNavigate();

  if (!items.length) {
    return (
      <CartContainer>
        <EmptyState text='Opa, infelizmente não tem nenhuma fruta adicionada no carrinho' />
      </CartContainer>
    );
  }

  const handleRemoveAll = () => {
    items.forEach((item) => {
      removeFromCart(item.fruit.id);
    });
    navigate('/');
  };

  return (
    <CartContainer>
      <CartList>
        {items.map((item) => (
          <CartItemCard
            role='listitem'
            key={item.fruit.id}
            imgUrl={item.fruit.imgUrl}
            name={item.fruit.name}
            quantity={item.quantity}
            onClick={() => removeFromCart(item.fruit.id)}
          >
            <CartItemText onClick={() => removeFromCart(item.fruit.id)}>
              Remover do carrinho
            </CartItemText>
          </CartItemCard>
        ))}
      </CartList>
      <CartCheckout
        onClick={() => handleRemoveAll()}
        to='/src/files/recibo.pdf'
        target='_blank'
        download
      >
        Confirmar compra!
      </CartCheckout>
    </CartContainer>
  );
};

export default Cart;
