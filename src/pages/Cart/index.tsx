import EmptyState from '~/components/EmptyState';
import { useCartContext } from '~/hooks/useCartContext/useCartContext';
import { CartContainer, CartList, CartItemText, CartItemCard } from './style';

const Cart = () => {
  const { items, removeFromCart } = useCartContext();

  if (!items.length) {
    return (
      <CartContainer>
        <EmptyState text='Opa, infelizmente não tem nenhuma fruta adicionada no carrinho' />
      </CartContainer>
    );
  }

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
    </CartContainer>
  );
};

export default Cart;
