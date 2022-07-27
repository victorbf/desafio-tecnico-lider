import { ChangeEvent, useContext, useState } from 'react';
import fruits from 'db.json';
import Item from '~/components/Item';
import { Item as ItemContextType } from '~/contexts/CartItemsContext';
import { ModalContext } from '~/contexts/ModalContext';
import { useCartContext } from '~/hooks/useCartContext/useCartContext';
import FruitModal from '~/modules/FruitModal';
import { lowerCaseNormalizeString } from '~/utils/strings';
import { HomeContainer, HomeList, HomeSearchInput, HomeTitle } from './style';

const Home = () => {
  const { items, addToCart, updateQuantity } = useCartContext();
  const { handleModal, closeModal } = useContext(ModalContext);
  const [value, setValue] = useState('');

  const handleSubmit = (value: number, fruit: ItemContextType['fruit']) => {
    addToCart({ fruit, quantity: value });
    closeModal();
  };

  const handleUpdateQuantity = (value: number, id: string) => {
    updateQuantity({ id, quantity: value });
    closeModal();
  };

  const handleClick = ({
    isOnCart,
    fruit,
    quantity,
  }: {
    isOnCart: boolean;
    fruit: ItemContextType['fruit'];
    quantity: ItemContextType['quantity'];
  }) => {
    if (isOnCart) {
      handleModal(
        <FruitModal
          name={fruit.name}
          imgUrl={fruit.imgUrl}
          onSubmit={(value) => handleUpdateQuantity(value, fruit.id)}
          defaultValue={quantity}
          buttonTitle='Atualizar quantidade'
        />,
        `Atualizar quantidade de ${fruit.name.toLowerCase()}s`,
      );
      return;
    }
    handleModal(
      <FruitModal
        name={fruit.name}
        imgUrl={fruit.imgUrl}
        onSubmit={(value) => handleSubmit(value, fruit)}
        buttonTitle='Adicionar fruta'
      />,
      `Adicionar ${fruit.name.toLowerCase()}`,
    );
  };

  const handleChange = (inputValue: string) => {
    setValue(inputValue);
  };

  const fruitsList = fruits.filter((fruit) =>
    lowerCaseNormalizeString(fruit.name).includes(lowerCaseNormalizeString(value)),
  );

  return (
    <HomeContainer>
      <HomeSearchInput
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
        placeholder='Procurar frutas'
        value={value}
      />
      <HomeTitle>
        <h1>Frutas</h1>
        <p>
          {fruitsList.length} fruta{fruitsList.length !== 1 ? 's' : ''}
        </p>
      </HomeTitle>
      <HomeList>
        {fruitsList.map((fruit) => {
          const item = items.find((item) => item.fruit.id === fruit.id);
          const isOnCart = !!item;
          const quantity = item?.quantity || 0;

          return (
            <Item
              key={fruit.id}
              description={fruit.description}
              name={fruit.name}
              imgUrl={fruit.imgUrl}
              quantity={quantity}
              onClick={() => handleClick({ isOnCart, fruit, quantity })}
              isOnCart={isOnCart}
              role='listitem'
            />
          );
        })}
      </HomeList>
    </HomeContainer>
  );
};

export default Home;
